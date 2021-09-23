import { ubt } from '@xmly/xmrep';
export default {
  //  点击搜索框 点击事件
  '27014 ': ({ currPage }: { currPage: string }) => {
    ubt.click(27014, 'click', { currPage });
  },
  //  右上角header点击 点击事件
  '27013 ': ({ categories, currPage }: { categories: string; currPage: string }) => {
    ubt.click(27013, 'click', { categories, currPage });
  },
  //  点击开始使用 点击事件
  '27012 ': () => {
    ubt.click(27012, 'click', { currPage: 'home' });
  },
  //  点击图表示例 点击事件
  '27004 ': ({ currPage }: { currPage: string }) => {
    ubt.click(27004, 'click', { currPage });
  },
  //  每种图表点击量 点击事件
  '26969 ': ({ chartType, currPage }: { chartType: string; currPage: string }) => {
    ubt.click(26969, 'click', { chartType, currPage });
  },
  //  gallery根路径首页 页面展示
  '26995 enter /rocket-chart-gallery/': () => {
    ubt.pageView(26995, '/', { currPage: '/' });
  },
  //  gallery根路径首页 页面离开
  '26996 leave /rocket-chart-gallery/': () => {
    ubt.pageExit(26996, { currPage: '/' });
  },
  //  gallery图表演示页 页面展示
  '26967 enter /rocket-chart-gallery/example/play': () => {
    ubt.pageView(26967, 'example/play', { currPage: 'example/play' });
  },
  //  gallery图表演示页 页面离开
  '26968 leave /rocket-chart-gallery/example/play': () => {
    ubt.pageExit(26968, { currPage: 'example/play' });
  },
  //  gallery简介 页面离开
  '26966 leave /rocket-chart-gallery/docs/intro': () => {
    ubt.pageExit(26966, { currPage: 'intro' });
  },
  //  gallery简介 页面展示
  '26965 enter /rocket-chart-gallery/docs/intro': () => {
    ubt.pageView(26965, 'intro', { currPage: 'intro' });
  },
  //  gallery版本记录 页面展示
  '26963 enter /rocket-chart-gallery/version': () => {
    ubt.pageView(26963, 'version', { currPage: 'version' });
  },
  //  gallery版本记录 页面离开
  '26964 leave /rocket-chart-gallery/version': () => {
    ubt.pageExit(26964, { currPage: 'version' });
  },
  //  gallery图表用法 页面展示
  '26961 enter /rocket-chart-gallery/chart-usage': () => {
    ubt.pageView(26961, 'chart-usage', { currPage: 'chart-usage' });
  },
  //  gallery图表用法 页面离开
  '26962 leave /rocket-chart-gallery/chart-usage': () => {
    ubt.pageExit(26962, { currPage: 'chart-usage' });
  },
  //  galleryAPI文档 页面展示
  '26959 enter /rocket-chart-gallery/apis': () => {
    ubt.pageView(26959, 'apis', { currPage: 'apis' });
  },
  //  galleryAPI文档 页面离开
  '26960 leave /rocket-chart-gallery/apis': () => {
    ubt.pageExit(26960, { currPage: 'apis' });
  },
  //  gallery图表示例 页面展示
  '26955 enter /rocket-chart-gallery/example': () => {
    ubt.pageView(26955, 'example', { currPage: 'example' });
  },
  //  gallery图表示例 页面离开
  '26956 leave /rocket-chart-gallery/example': () => {
    ubt.pageExit(26956, { currPage: 'example' });
  },
  //  gallery使用文档 页面展示
  '26953 enter /rocket-chart-gallery/quick-start': () => {
    ubt.pageView(26953, 'quick-start', { currPage: 'quick-start' });
  },
  //  gallery使用文档 页面离开
  '26954 leave /rocket-chart-gallery/quick-start': () => {
    ubt.pageExit(26954, { currPage: 'quick-start' });
  },
  //  图表库首页 页面展示
  '26949 enter /rocket-chart-gallery/home': () => {
    ubt.pageView(26949, 'home', { currPage: 'home' });
  },
  //  图表库首页 页面离开
  '26950 leave /rocket-chart-gallery/home': () => {
    ubt.pageExit(26950, { currPage: 'home' });
  },
  //  使用文档—联系我们 页面展示
  '26990 enter /rocket-chart-gallery/docs/contact-us': () => {
    ubt.pageView(26990, 'contact-us', { currPage: 'contact-us' });
  },
  //  使用文档—联系我们 页面离开
  '26991 leave /rocket-chart-gallery/docs/contact-us': () => {
    ubt.pageExit(26991, { currPage: 'contact-us' });
  },
  //  使用文档—FAQ 页面展示
  '26988 enter /rocket-chart-gallery/docs/faq': () => {
    ubt.pageView(26988, 'faq', { currPage: 'faq' });
  },
  //  使用文档—FAQ 页面离开
  '26989 leave /rocket-chart-gallery/docs/faq': () => {
    ubt.pageExit(26989, { currPage: 'faq' });
  },
  //  使用文档—颜色与主题 页面展示
  '26986 enter /rocket-chart-gallery/docs/theme': () => {
    ubt.pageView(26986, 'theme', { currPage: 'theme' });
  },
  //  使用文档—颜色与主题 页面离开
  '26987 leave /rocket-chart-gallery/docs/theme': () => {
    ubt.pageExit(26987, { currPage: 'theme' });
  },
  //  使用文档—更新和异步数据显示 页面展示
  '26984 enter /rocket-chart-gallery/docs/data-update': () => {
    ubt.pageView(26984, 'data-update', { currPage: 'data-update' });
  },
  //  使用文档—更新和异步数据显示 页面离开
  '26985 leave /rocket-chart-gallery/docs/data-update': () => {
    ubt.pageExit(26985, { currPage: 'data-update' });
  },
  //  使用文档—数据管理 页面展示
  '26982 enter /rocket-chart-gallery/docs/dataset-usage': () => {
    ubt.pageView(26982, 'dataset-usage', { currPage: 'dataset-usage' });
  },
  //  使用文档—数据管理 页面离开
  '26983 leave /rocket-chart-gallery/docs/dataset-usage': () => {
    ubt.pageExit(26983, { currPage: 'dataset-usage' });
  },
  //  使用文档—通用功能 页面离开
  '26981 leave /rocket-chart-gallery/docs/common': () => {
    ubt.pageExit(26981, { currPage: 'common' });
  },
  //  使用文档—通用功能 页面展示
  '26980 enter /rocket-chart-gallery/docs/common': () => {
    ubt.pageView(26980, 'common', { currPage: 'common' });
  },
  //  使用文档—图表类型 页面展示
  '26978 enter /rocket-chart-gallery/docs/chart-type': () => {
    ubt.pageView(26978, 'chart-type', { currPage: 'chart-type' });
  },
  //  使用文档—图表类型 页面离开
  '26979 leave /rocket-chart-gallery/docs/chart-type': () => {
    ubt.pageExit(26979, { currPage: 'docs/chart-type' });
  },
};
