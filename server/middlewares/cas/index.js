/*
  登录逻辑
  判断session 存在 直接next()
  不存在 如果为ajax 直接提示 登录失败，否则跳转到登录页 cas/login?services=from
  手动登录 or cas判断还在有效期内 跳转到 cas/validate?ticket=ticket&services=from
  校验成功 返回到form，设置session
*/
const _ = require('lodash');
const assert = require('assert');
const { parseString } = require("xml2js");
const {
  getLoginService,
  getLogoutService,
  formatcasUrl,
  CASError,
  validate,
  normalizeUserModel } =
  require('./lib/util');

module.exports = ({ baseURI = '', logoutUrl, casUrl }, callback) => {
  // 检验参数
  assert(
    _.isString(casUrl) || _.isFunction(casUrl),
    `参数 "casUrl" 类型非法, 期望 string | function`);

  callback && assert(_.isFunction(callback), `参数 "callback" 类型非法, 期望 function`);
  baseURI && assert(_.isString(baseURI), `参数 "baseURI" 类型非法, 期望 string`);
  logoutUrl && assert(_.isString(logoutUrl), `参数 "logoutUrl" 类型非法, 期望 string`);

  return async (ctx, next) => {
    const casBaseURI = typeof casUrl === 'function' ? casUrl(ctx) : casUrl;
    const ticket = ctx.query.ticket;
    const logInService = getLoginService(ctx.href);
    const logOutService = logoutUrl ? getLogoutService(ctx.href, baseURI) : '';

    assert(_.isString(casBaseURI), `参数 "casUrl" 函数返回值非法, 期望 string`);

    // 登出
    if (logoutUrl && ctx.path === logoutUrl) {
      delete ctx.session.user;
      return ctx.redirect(formatcasUrl(casBaseURI, 'cas-server/logout', logOutService));
    }

    // 已经登录
    if (ctx.session.user && ctx.session.user.id) {
      // 保持登录状态
      ctx.session.last_accessed_at = Date.now();
      return next();
    }

    // 登录失败，ajax请求返回
    const isXmlHttpReq = ctx.header['x-requested-with'] === 'XMLHttpRequest';
    if (isXmlHttpReq) {
      ctx.throw(CASError('登录已过期，请重新登录！'));
    }

    // 重新登录
    if (!ticket) {
      return ctx.redirect(formatcasUrl(casBaseURI, 'cas-server/login', logInService));
    }

    // 验证ticket的有效性，即登录状态
    let body = '';
    try {
      body = await validate({ casBaseURI, ticket, service: logInService });
      console.log('validate body: ', body)
    } catch (e) {
      ctx.throw(CASError('验证cas ticket 失败'));
    }

    body = await new Promise(function(resolve, reject) {
      parseString(
        body,
        {
          trim: true,
          explicitArray: false,
          tagNameProcessors: [
            function(name) {
              return name.replace("cas:", "");
            }
          ]
        },
        function(err, obj) {
          if (err) {
            console.debug("token info parse failed !");
            reject(err);
          } else {
            resolve(obj);
          }
        }
      );
    });

    if (body.serviceResponse.authenticationSuccess) {
      body = normalizeUserModel(
        body.serviceResponse.authenticationSuccess.attributes
      );
      body.ticket = ticket;
      ctx.session.user = {
        realName: body.realName,
        userName: body.userName,
        id: body.id,
        mail: body.mail,
      }

      // 对ctx或者uerName进行额外操作
      callback && (await callback(ctx, body));
      ctx.redirect(logInService);
    } else {
      return ctx.redirect(formatcasUrl(casBaseURI, 'cas-server/login', logInService));
    }
  }
}
