export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '新增用户数',
  toolBar: '右侧标题',
  type: 'card-average',
  datasetParams: {
    // 可以不包这层
    average: {
      // 是否开启选中功能
      selectable: true,
      // 配合selectable使用
      onSelect: (params) => {
        console.log('params', params)
      },
      // 对齐
      flow: 'row',
      // 排列
      align: 'around',
      // 垂直对齐方式
      verticalAlign: 'top',
      style: { lineHeight: '5em' },
      valueStyle: {},
      formatters: {
        value: {
          type: 'abbr',
          suffix: '人',
        },
        value1: {
          type: '.4percent',
          suffix: '↑',
          valueStyle: {
            color: '#ff5676',
            fontSize: 14,
          }
        },
        value2: {
          type: 'percent',
          suffix: '↓',
          valueStyle: {
            color: '#45cab5'
          }
        }
      }
    },
  },
  data: {
    target: [
      { name: '用户数', key: 'value' },
      { name: '同比', key: 'value1' },
      { name: '环比', key: 'value2' },
    ],
    source: [
      [456789], [0.2], [-0.7],
    ]
  }
};

rocketChart.init(options);
`;
