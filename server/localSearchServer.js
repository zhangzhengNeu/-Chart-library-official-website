const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { routeMap, baseURI } = require('./utils/config');
// const baseApi = routeMap[process.env.NODE_ENV || 'dev'];

// 固定读取测试环境的文档
const baseApi = 'http://test.ximalaya.com/rocket-chart-gallery';

// 搜索文档地址
const urlList = [
  '/docs/apis',
  '/docs/intro',
  '/docs/chart-type',
  '/docs/common',
  '/docs/dataset-usage',
  '/docs/data-update',
  '/docs/theme',
  '/docs/faq',
  '/version',
];
const urlTitleMap = {
  '/docs/apis': 'API文档',
  '/docs/common': '通用功能',
  '/docs/chart-type': '图表类型',
  '/docs/faq': 'FAQ',
  '/docs': '使用文档',
  '/version': '版本记录',
};
// 标题选择器
const titleSelector = 'h1,h2,h3,h4,h5,h6';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function openPage(page, url, delay = 1000) {
  await page.goto(baseApi + url, {
    waitUntil: 'networkidle2', // 网络空闲说明已加载完毕
  });
  await sleep(delay);
  const namespace = urlTitleMap[url] || '文档';

  const links = await page.$$eval(
    titleSelector,
    (a, url, namespace) => {
      return a.map((item) => {
        const title = item.textContent;
        const id = item.id;
        const content = [];

        // 最多5个子标签数据
        let count = 5;
        while (count > 0) {
          item = item.nextElementSibling;
          if (!item || item.nodeName.startsWith('H')) {
            count = 0;
          } else {
            content.push(item.textContent);
          }
          count--;
        }

        return {
          namespace,
          title,
          content: content.join('\n'),
          href: `${url}#${id}`,
        };
      });
    },
    baseURI + url,
    namespace,
  );
  return links;
}

// 保存结果
function save(cont) {
  console.log('save start ---');
  // searchList.push(...cont);
  fs.writeFileSync(path.join(__dirname, '../.search-index.json'), JSON.stringify(cont));
  console.log('save end ---');
}

async function grabCont(delay) {
  console.log('search start ---');
  const brower = await puppeteer.launch({
    args: ['--no-sandbox'],
  });

  console.log('search launch ---');
  // 开启一个新页面
  const page = await brower.newPage();
  const list = [];

  for (let i = 0; i < urlList.length; i++) {
    const res = await openPage(page, urlList[i], delay);
    list.push(...res);
  }
  // 关闭浏览器
  brower.close();
  console.log('search end ---');
  await save(list);
  return list;
}

// 更新搜索索引
grabCont();
