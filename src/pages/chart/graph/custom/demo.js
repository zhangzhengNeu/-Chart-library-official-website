export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  dom: document.querySelector('#container'),
  title: '自定义坐标',
  // 如不设置symbolSize则根据value默认生成，可设置坐标
  type: 'graph-custom',
  data: {
    categoryKey:'category',
    target: [
      { key: 'id', name: '名称' },
      { key: 'value', name: '数据值' },
      { key: 'category', name: '类目'},
      // { key: 'symbolSize', name: '圆点尺寸' },
      // { key: 'x', name: 'x' },
      // { key: 'y', name: 'y' },
    ],
    source: [
        { id: 'Myriel', category: '类目0', value: 19.12,symbolSize: 19, x: -266, y: 29 },
        { id: 'Napoleon',category: '类目1', value: 8.66,symbolSize: 28, x: -518, y: 44 },
        { id: 'MlleBaptistine',category: '类目2', value: 15.32,symbolSize: 55, x: -12, y: 245 },
        { id: 'MmeMagloire',category: '类目3',value: 15.32,symbolSize: 25, x: -162, y: 95 },
        { id: 'CountessDeLo',category: '类目2', value: 8.66, symbolSize: 28, x: -379, y: 329 },
        { id: 'Geborand',category: '类目2',  value: 6.66,symbolSize: 26, x: -217, y: 406 },
        { id: 'Champtercier',category: '类目1',  value: 6.66,symbolSize: 36, x: -433, y: -165 },
        { id: 'Cravatte',category: '类目4',  value: 6.66,symbolSize: 26, x: -382, y: -45 },
        { id: 'Count',category: '类目5',  value: 6.66,symbolSize: 31, x: -113, y: 287 },
        { id: 'OldMan',category: '类目1',  value: 6.66,symbolSize: 31, x: -544, y: 251 },
        { id: 'Labarre',category: '类目0',  value: 6.66,symbolSize: 6, x: 89, y: 134 },
        { id: 'Valjean',category: '类目1',  value: 66,symbolSize: 41, x: -87, y: -6 },
        { id: 'Marguerite',category: '类目1',  value: 15.4,symbolSize: 15, x: -339, y: -184 },
        { id: 'MmeDeR',category: '类目4',  value: 6.66,symbolSize: 10, x: -194, y: -178 },
        { id: 'Isabeau',category: '类目4',  value: 6.66,symbolSize: 10, x: -108, y: -201 },
    ],
    links: [
        { source: 'Napoleon', target: 'Myriel'},
        { source: 'MlleBaptistine', target: 'Myriel' },
        { source: 'MmeMagloire', target: 'Myriel' },
        { source: 'MmeMagloire', target: 'MlleBaptistine' },
        { source: 'CountessDeLo', target: 'Myriel' },
        { source: 'Geborand', target: 'Myriel' },
        { source: 'Champtercier', target: 'Myriel' },
        { source: 'Cravatte', target: 'Myriel' },
        { source: 'Count', target: 'Myriel' },
        { source: 'OldMan', target: 'Myriel' },
        { source: 'Valjean', target: 'Myriel' },
        { source: 'Valjean', target: 'MlleBaptistine' },
        { source: 'Valjean', target: 'MmeMagloire' },
        { source: 'Valjean', target: 'Labarre' },
        { source: 'Marguerite', target: 'Valjean' },
        { source: 'MmeDeR', target: 'Valjean' },
        { source: 'Isabeau', target: 'Valjean' },
    ],
  },
};

rocketChart.init(options);
`;
