const normalizeUserModel = casUserInfo => {
  const user = {
    realName: casUserInfo.realName,
    userName: casUserInfo.userName,
    aclListWithMethod: casUserInfo.aclListWithMethod
      .match(/\[(.*)\]/)[1]
      .split(/,\s*/),
    aclList: casUserInfo.aclList.match(/\[(.*)\]/)[1].split(/,\s*/),
    mail: casUserInfo.mail,
    dingtalkId: casUserInfo.dingtalkId,
    deptId: casUserInfo.deptId,
    id: casUserInfo.id,
    permissionIds: casUserInfo.permissionIds.split(",")
  };

  // user.aclList.push('/cas-temporary/.*');
  // //锤子项目权限
  // user.aclList.push('/cas-cacsi/.*');
  // //单页simple-web应用AJAX权限
  // user.aclList.push(
  //   '/ops-simple-web/(saveMain|list|init|update|delete|info|.*(f|F)ollow.*|getDataSource|upload|close|changePosition)',
  // );

  return user;
};

const validate = async ({ casBaseURI, ticket, service }) => {
  const res = await axios.get(`${casBaseURI}/cas-server/serviceValidate`, {
    params: { ticket, service }
  });
  return res.data;
}

const url = require('url');
const axios = require('axios');
const errorGenerator = require('middlewares/errorGenerator');

const getLoginService = href => {
  let originHref = href.replace(/(\?|&)?ticket=([^&]+)/, ''); // 过滤ticket
  originHref = originHref.replace(/(\?|&)?__cas_server_host__=([^&]+)/, ''); // 过滤__cas_server_host__
  return originHref;
};
// 登出 service
const getLogoutService = (href, baseURI) => {
  const urlObj = url.parse(href);
  urlObj.pathname = baseURI;
  urlObj.search = '';
  return url.format(urlObj);
};
// 构建 cas 登入登出的url
const formatcasUrl = (casBaseURI, pathname, service) => {
  var urlObj = url.parse(casBaseURI);
  urlObj.pathname = pathname;
  urlObj.search = `?service=${encodeURIComponent(service)}`;
  return url.format(urlObj);
}; // 错误信息
const CASError = msg => {
  const error = new Error(msg);
  const CASError = errorGenerator.CASError(error, 'CASError');
  return CASError;
};
module.exports = {
  getLoginService,
  getLogoutService,
  formatcasUrl,
  CASError,
  validate,
  normalizeUserModel
};
