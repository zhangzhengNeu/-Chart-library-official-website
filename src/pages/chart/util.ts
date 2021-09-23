import { Base64 } from 'js-base64';
import { chartTypeList, otherList, exampleList } from './index';

// 获取子类型
export function getSubTypeList(list: any[]) {
  const typeMap: any = {};
  list.forEach(({ id, docId }: any) => {
    typeMap[id] = require(`../chart/${docId || id}/index.js`).default;
  });
  return typeMap;
}

// 获取图表demo
//  /* webpackChunkName: 'bar-basic-code' */
export async function getChartDemo({ type, subType }: { type: string; subType: string }) {
  const demo = await import(`../chart/${type}/${subType}/demo.js`)
    .then(res => res.default)
    .catch(a => ({ status: 'error', msg: '没有该类型对应的示例代码，请联系相关人员添加！' }));
  return demo;
}

export { chartTypeList };
export const chartSubTypeMap = getSubTypeList(chartTypeList);
export const chartDemoMenuList = [...chartTypeList, ...otherList, ...exampleList];
export const demoMap = {
  ...chartSubTypeMap,
  ...getSubTypeList(otherList),
  ...getSubTypeList(exampleList),
};

export function getChartDoc({ type, subType }: { type: string; subType: string }) {
  try {
    const demo = require(`../chart/${type}/${subType}/doc.md`);
    return Base64.decode(demo.replace('data:text/markdown;base64,', ''));
  } catch (e) {
    console.info('not found:', `${type}-${subType} doc`);
  }
}

// 获取子类型文档
export async function getTypeDoc() {
  const typeDocList: string[] = [];
  console.groupCollapsed('%c read chartType doc:', 'color: #daa804');
  for (const { id, docId } of chartTypeList) {
    const subTypeList = chartSubTypeMap[id];
    for (const item of subTypeList) {
      const subType = item.docId || item.id;
      if (subType) {
        const doc = getChartDoc({ type: docId || id, subType });
        doc && typeDocList.push(doc);
      }
    }
  }
  console.groupEnd();
  return typeDocList.join('\n --- \n');
}
