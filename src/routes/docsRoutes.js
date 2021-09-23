// eslint-disable-next-line no-undef

module.exports = [
  { path: '/docs', redirect: '/docs/quick-start', title: '使用文档' },
  {
    path: '/docs',
    title: '使用文档',
    component: './Docs/index',
    routes: [
      {
        path: '/docs/intro',
        title: '简介',
      },
      {
        path: '/docs/quick-start',
        title: '快速开始',
      },
      {
        path: '/docs/chart-type',
        title: '图表类型',
      },
      {
        path: '/docs/common',
        title: '通用功能',
      },
      {
        path: '/docs/dataset-usage',
        title: '数据管理',
      },
      {
        path: '/docs/data-update',
        title: '更新和异步数据显示',
      },
      {
        path: '/docs/theme',
        title: '颜色与主题',
      },
      {
        path: '/docs/faq',
        title: 'FAQ',
      },
      {
        path: '/docs/contact-us',
        title: '联系我们',
      },
    ],
  },
];
