const data = {
  target: [
    {
      name: '日期',
      key: 'date',
    },
    {
      name: '值',
      key: 'value',
    },
  ],
};

const d = [
  { __all__: 601111, time: 1592924280000 },
  { __all__: 621114, time: 1592924340000 },
  { __all__: 621116, time: 1592924400000 },
  { __all__: 621112, time: 1592924460000 },
  { __all__: 621112, time: 1592924520000 },
  { __all__: 611119, time: 1592924580000 },
  { __all__: 601116, time: 1592924640000 },
  { __all__: 611112, time: 1592924700000 },
  { __all__: 611115, time: 1592924760000 },
  { __all__: 601113, time: 1592924820000 },
  { __all__: 621113, time: 1592924880000 },
  { __all__: 601112, time: 1592924940000 },
  { __all__: 571119, time: 1592925000000 },
  { __all__: 561117, time: 1592925060000 },
  { __all__: 601113, time: 1592925120000 },
  { __all__: 61111, time: 1592925180000 },
  { __all__: 581117, time: 1592925240000 },
  { __all__: 721117, time: 1592925300000 },
  { __all__: 591112, time: 1592925360000 },
  { __all__: 601116, time: 1592925420000 },
  { __all__: 601115, time: 1592925480000 },
  { __all__: 571113, time: 1592925540000 },
  { __all__: 611114, time: 1592925600000 },
];

data.source = [d.map(i => i.time), d.map(i => i.__all__)];

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '标签格式化',
  type: 'line-peak',
  datasetParams: {
    $renderLabel: {
      /* 默认 'number'，其他参数请参考使用文档 */
      type: 'abbr',
      // scope: 'series', 
      // prefix: '￥',
      // suffix: '元',
      // formatter: (value, formattedData, index) => {
      //   return value / 1000 + 'k';
      // },
    },
  },
  formatters: {
    date: (value) => {
      return rocketChart.echarts.format.formatTime('yyyy-M-d hh:mm', value)
    }
  },
  data: ${JSON.stringify(data)}
};

rocketChart.init(options);
`;
