const fs = require('fs');
const path = require('path');

// 搜索列表
const searchList = [];

// 保存结果
async function read() {
  let data = fs.readFileSync(path.join(__dirname, '../../.search-index.json'), 'utf8');
  data = JSON.parse(data) || [];
  searchList.push(...data);
}

const filterList = keyword => {
  return searchList.filter(
    ({ title, content }) => title.includes(keyword) || content.includes(keyword),
  );
};

// 读数据
// 因docker容器问题，使用本地准备好内容
async function index(keyword, delay) {
  try {
    if (!searchList.length) {
      await read();
    }
    return filterList(keyword);
  } catch (e) {
    console.log('search error ---', e);
    return [];
  }
}

module.exports = index;
