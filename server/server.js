require('app-module-path/register');

const Promise = require('bluebird');

Promise.config({
  warnings: false,
  longStackTraces: true,
});

global.Promise = Promise;

const path = require('path');
const _ = require('lodash');

const Koa = require('koa');
const nunjucks = require('koa-nunjucks-2');
const bodyParser = require('koa-bodyparser');
const favicon = require('koa-favicon');
const axios = require('axios');

const koaStatic = require('koa-static');
const koaMount = require('koa-mount');
const session = require('koa-session');
const logger = require('koa-logger');
// const casFilter = require('./middlewares/cas')
// const request = require('./middlewares/request')

const healthCheck = require('./middlewares/health-check');
const removePrefix = require('./middlewares/remove-prefix');

const config = require('./utils/config');
const router = require('./router');
const pkg = require('../package.json');

const app = new Koa();
const isDev = (app.env || 'dev') === 'dev';
const port = process.env.NODE_PORT || config.server.port || 8080;

app.name = pkg.name;
app.keys = [`${pkg.name}`];

const staticPath = './views';

// 健康检查中间件
app.use(healthCheck());

// 路径前缀统一处理
app.use(removePrefix(config.baseURI));

// 静态资源
app.use(koaMount('/static', koaStatic(path.join(__dirname, staticPath))));

// app.use(favicon(path.join(__dirname, '../src/public/favicon.ico')));

// koa-logger
app.use(logger(app));

app.use(bodyParser());

app.use(
  // session中间件
  session(
    {
      key: `koa:sess:${pkg.name}`,
      // 二十四小时过期
      maxAge: 24 * 60 * 60 * 1000,
      store: {
        storage: {},
        get(key, maxAge) {
          return this.storage[key];
        },
        set(key, sess, maxAge) {
          this.storage[key] = sess;
        },
        destroy(key) {
          delete this.storage[key];
        },
      },
    },
    app,
  ),
);

// app.use(
//     // 请求中间件
//     request(
//         function(ctx) {
//           console.log('user, ', ctx.session.user)
//             return {
//                 // 通用参数配置，默认 header
//                 headers: {
//                     // gzip 压缩
//                     'Accept-Encoding': 'gzip, deflate',
//                     'content-type': ctx.get('content-type'),
//                     cookie: ctx.get('cookie'),
//                     referer: ctx.get('referer')
//                 }
//             }
//         },
//         {
//             formatRes(res) {
//                 const statusCode = res.statusCode || res.status
//                 const data = res.data

//                 // 返回结果是否为流
//                 const isStream = data && _.isFunction(data.pipe)

//                 let body = `[response ${isStream ? 'file' : 'data'}]`

//                 // 返回结果是否存在错误
//                 const isError = data == null || data.code !== 0
//                 // 在非流模式下，本地 or 返回结果不符合规范的情况下打印日志
//                 if ((isDev || isError) && !isStream) {
//                     body = JSON.stringify(data)
//                 }

//                 return {
//                     res_statusCode: statusCode,
//                     res_body: body
//                 }
//             }
//         }
//     )
// )

// 统一错误处理
// app.use(
// 错误处理中间件
// )

// cas登录控制
// app.use(
//     // cas中间件
//   casFilter({
//     casUrl: "http://ops.test.ximalaya.com", // config.casUrl,
//     logoutUrl: '/logout',
//     baseURI: config.baseURI
//   }, async (ctx, user) => {
//     const res = await axios.get(config.backendMap[app.env] + '/dev/initSession?id='+(user.id || ''));
//     const serverToken = res.headers['set-cookie'][0].split(';')[0]
//     if (serverToken.indexOf('JSESSIONID=') === 0) {
//       ctx.cookies.set('JSESSIONID', serverToken.slice(11));
//     }
//     return ''
//   })
// )

app.use(
  nunjucks({
    ext: 'html',
    path: path.join(__dirname, staticPath),
    nunjucksConfig: {
      noCache: isDev,
      autoescape: true,
    },
  }),
);

// 路由配置
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
  console.info(`server started at localhost:${port}`);
});
