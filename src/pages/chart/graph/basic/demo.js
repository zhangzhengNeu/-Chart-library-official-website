export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  dom: document.querySelector('#container'),
  title: '基本型',
  // 如不设置symbolSize将根据value默认生成，不可设置坐标
  type: 'graph-basic',
  datasetParams:{
    repulsion:400,
    edgeLength:80,
  },
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
      { id: 'Myriel', category: '类目0', value: 19.12,symbolSize: 19 },
      { id: 'Napoleon',category: '类目1', value: 8.66,symbolSize: 8 },
      { id: 'MlleBaptistine',category: '类目2', value: 15.32,symbolSize: 25 },
      { id: 'MmeMagloire',category: '类目3',value: 15.32,symbolSize: 15 },
      { id: 'CountessDeLo',category: '类目2', value: 8.66, symbolSize: 8 },
      { id: 'Geborand',category: '类目2',  value: 6.66,symbolSize: 16 },
      { id: 'Champtercier',category: '类目1',  value: 6.66,symbolSize: 16 },
      { id: 'Cravatte',category: '类目4',  value: 6.66,symbolSize: 16 },
      { id: 'Count',category: '类目5',  value: 6.66,symbolSize: 11 },
      { id: 'OldMan',category: '类目1',  value: 6.66,symbolSize: 11},
      { id: 'Labarre',category: '类目0',  value: 6.66,symbolSize: 6 },
      { id: 'Valjean',category: '类目1',  value: 66,symbolSize: 11},
      { id: 'Marguerite',category: '类目1',  value: 15.4,symbolSize: 5},
      { id: 'MmeDeR',category: '类目4',  value: 6.66,symbolSize: 10},
      { id: 'Isabeau',category: '类目4',  value: 6.66,symbolSize: 10 },
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
