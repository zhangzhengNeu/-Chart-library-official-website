/* eslint-disable */
const Router = require('koa-router');

const Proxy = require('../middlewares/proxy');
const removePrefix = require('../utils/remove-prefix');
const { apiPrefix } = require('utils/config');
const baseApi = require('utils/api-map');
const seachIndex = require('utils/search-index')

const home = require('controllers/home');

const router = new Router();

const proxy = Proxy({
  map: path => baseApi + removePrefix(path, apiPrefix),
  maxContentLength: 52428890,
});

router.get('/api/search', async (ctx, next) => {
  const { keyword = '', delay } = ctx.request.query;
  ctx.body = await seachIndex(keyword, delay);
});

// 首页
router
  // 自动代理到 java 和 首页渲染
  .get('*', async (ctx, next) => {
    await home(ctx);
    // const path = ctx.path;
    // // ctx.user && console.log('current user: ', ctx.user)

    // // 如果路径以 apiPrefix 开头，认为是 ajax 请求
    // if (!apiPrefix) {
    //   /* eslint-disable no-console */
    //   console.warn('apiPrefix 未配置，proxy 功能无法正常使用！');
    // }
    // // 自动代理
    // if (apiPrefix && path.startsWith(apiPrefix) && path !== apiPrefix) {
    //   await proxy(ctx, next);
    // } else {
    //   // 其他请求 尝试使用首页渲染
    //   await home(ctx);
    // }
  });

module.exports = router;
