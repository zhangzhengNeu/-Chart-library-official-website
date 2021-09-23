const chartData = {
  target: [
    {
      name: '城市',
      key: 'city',
    },
    {
      name: '30天播放UV',
      key: 'number',
    },
  ],
  source: [
    [
      '北京',
      '上海',
      '天津',
      '深圳',
      '广州',
      '成都',
      '西安',
      '沈阳',
      '苏州',
      '哈尔滨',
      '郑州',
      '杭州',
      '重庆',
      '南京',
      '武汉',
      '济南',
      '温州',
      '合肥',
      '福州',
      '徐州',
    ],
    [
      148662376,
      91584784,
      65593929,
      49020476,
      49013977,
      47075742,
      46228932,
      45274352,
      44880929,
      43532772,
      38480041,
      37134373,
      35430198,
      33352845,
      29647715,
      26041402,
      20131657,
      19976558,
      15783953,
      14513008,
    ],
  ],
};

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '条形图',
  type: 'bar-reverse',
  datasetParams:{
    // 是否翻转数据顺序
    // 传入false时则按dataset默认顺序在y轴从下向上排列
    reverseData:true,
  },
  option: {
    grid: {
      right: 50
    }
  },
  data: ${JSON.stringify(chartData)},
};

rocketChart.init(options);
`;
