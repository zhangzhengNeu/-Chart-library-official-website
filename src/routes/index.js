/* eslint-disable */
const docsRoutes = require('./docsRoutes');
const exampleRoutes = require('./exampleRoutes');
const apisRoutes = require('./apisRoutes');
const versionRoutes = require('./versionRoutes');

module.exports = [
  {
    path: '/',
    component: '../layouts/index',
    title: 'rocketChart 图表库',
    routes: [
      { path: '/', component: './RocketIndex' },
      { path: '/404', component: './404' },
      { path: '/home', component: './home/index' },
      ...apisRoutes,
      ...docsRoutes,
      ...exampleRoutes,

      {
        path: '/chart-usage',
        title: '图表用法',
        component: './chartUsage',
      },
      ...versionRoutes,
    ],
  },
];
