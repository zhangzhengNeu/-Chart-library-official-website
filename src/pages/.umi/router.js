import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/zheng/Desktop/chill/learn/project/rocket-chart-gallery/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/docs',
    redirect: '/docs/quick-start',
    title: '使用文档',
    exact: true,
    Routes: [require('./TitleWrapper.jsx').default],
    _title: '使用文档',
    _title_default: 'rocket-chart-gallery',
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index'),
        })
      : require('../../layouts/index').default,
    title: 'rocketChart 图表库',
    routes: [
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__RocketIndex" */ '../RocketIndex'),
            })
          : require('../RocketIndex').default,
        exact: true,
        _title: 'rocketChart 图表库',
        _title_default: 'rocket-chart-gallery',
      },
      {
        path: '/404',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
            })
          : require('../404').default,
        exact: true,
        _title: 'rocketChart 图表库',
        _title_default: 'rocket-chart-gallery',
      },
      {
        path: '/home',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__home__index" */ '../home/index'),
            })
          : require('../home/index').default,
        exact: true,
        _title: 'rocketChart 图表库',
        _title_default: 'rocket-chart-gallery',
      },
      {
        path: '/docs/apis',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Apis__index" */ '../Apis/index'),
            })
          : require('../Apis/index').default,
        title: 'API 文档',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'rocketChart 图表库 - API 文档',
        _title_default: 'rocket-chart-gallery',
      },
      {
        path: '/docs',
        title: '使用文档',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Docs__index" */ '../Docs/index'),
            })
          : require('../Docs/index').default,
        routes: [
          {
            path: '/docs/intro',
            title: '简介',
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '使用文档 - 简介',
            _title_default: 'rocket-chart-gallery',
          },
          {
            path: '/docs/quick-start',
            title: '快速开始',
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '使用文档 - 快速开始',
            _title_default: 'rocket-chart-gallery',
          },
          {
            path: '/docs/chart-type',
            title: '图表类型',
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '使用文档 - 图表类型',
            _title_default: 'rocket-chart-gallery',
          },
          {
            path: '/docs/common',
            title: '通用功能',
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '使用文档 - 通用功能',
            _title_default: 'rocket-chart-gallery',
          },
          {
            path: '/docs/dataset-usage',
            title: '数据管理',
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '使用文档 - 数据管理',
            _title_default: 'rocket-chart-gallery',
          },
          {
            path: '/docs/data-update',
            title: '更新和异步数据显示',
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '使用文档 - 更新和异步数据显示',
            _title_default: 'rocket-chart-gallery',
          },
          {
            path: '/docs/theme',
            title: '颜色与主题',
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '使用文档 - 颜色与主题',
            _title_default: 'rocket-chart-gallery',
          },
          {
            path: '/docs/faq',
            title: 'FAQ',
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '使用文档 - FAQ',
            _title_default: 'rocket-chart-gallery',
          },
          {
            path: '/docs/contact-us',
            title: '联系我们',
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '使用文档 - 联系我们',
            _title_default: 'rocket-chart-gallery',
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zheng/Desktop/chill/learn/project/rocket-chart-gallery/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
            _title: 'rocket-chart-gallery',
            _title_default: 'rocket-chart-gallery',
          },
        ],
        _title: 'rocketChart 图表库 - 使用文档',
        _title_default: 'rocket-chart-gallery',
      },
      {
        path: '/example',
        title: '图表示例',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__example__index" */ '../example/index.tsx'),
            })
          : require('../example/index.tsx').default,
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'rocketChart 图表库 - 图表示例',
        _title_default: 'rocket-chart-gallery',
      },
      {
        path: '/example/play',
        title: '图表实例演示',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__example__play" */ '../example/play.tsx'),
            })
          : require('../example/play.tsx').default,
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'rocketChart 图表库 - 图表实例演示',
        _title_default: 'rocket-chart-gallery',
      },
      {
        path: '/chart-usage',
        title: '图表用法',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__chartUsage" */ '../chartUsage'),
            })
          : require('../chartUsage').default,
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'rocketChart 图表库 - 图表用法',
        _title_default: 'rocket-chart-gallery',
      },
      {
        path: '/version',
        title: '版本记录',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Version__index" */ '../Version/index'),
            })
          : require('../Version/index').default,
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'rocketChart 图表库 - 版本记录',
        _title_default: 'rocket-chart-gallery',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/zheng/Desktop/chill/learn/project/rocket-chart-gallery/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'rocket-chart-gallery',
        _title_default: 'rocket-chart-gallery',
      },
    ],
    _title: 'rocketChart 图表库',
    _title_default: 'rocket-chart-gallery',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/zheng/Desktop/chill/learn/project/rocket-chart-gallery/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'rocket-chart-gallery',
    _title_default: 'rocket-chart-gallery',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
