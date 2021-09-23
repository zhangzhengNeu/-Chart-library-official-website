export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  dom: document.querySelector('#container'),
  title: '环形布局',
  // 如不设置symbolSize将根据value默认生成，不可设置坐标
  type: 'graph-circular',
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
      { id: 'Myriel', category: '类目0', value: 30 },
      { id: 'Napoleon',category: '类目1', value: 8 },
      { id: 'MlleBaptistine',category: '类目2', value: 15 },
      { id: 'MmeMagloire',category: '类目3',value: 15 },
      { id: 'CountessDeLo',category: '类目2', value: 8 },
      { id: 'Geborand',category: '类目2',  value: 16 },
      { id: 'Champtercier',category: '类目1',  value: 26 },
      { id: 'Cravatte',category: '类目4',  value: 6 },
      { id: 'Count',category: '类目5',  value: 6  },
      { id: 'OldMan',category: '类目1',  value: 16 },
      { id: 'Labarre',category: '类目0',  value: 26 },
      { id: 'Valjean',category: '类目1',  value: 46 },
      { id: 'Marguerite',category: '类目1',  value: 27 },
      { id: 'MmeDeR',category: '类目4',  value: 10 },
      { id: 'Isabeau',category: '类目4',  value: 16  },
    ],
    links:[
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
    ]
  },
};

rocketChart.init(options);
`;
