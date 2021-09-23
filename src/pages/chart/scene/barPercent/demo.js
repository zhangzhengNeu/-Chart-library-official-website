export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  dom: document.querySelector('#container'),
  title: ' APP 活跃用户年龄分布',
  type: 'bar-label&bar-reverse',
  datasetParams: {
    /* 是否显示标签， 默认true */
    showLabel: true,
    /* 是否显示百分比， 默认false */
    label:{
      showPercentage: true,
    },
    reverse:{
      reverseData: false,
    }
  },
  data: {
    "target": [{
      "name": "年龄",
      "key": "city"
    }, {
      "name": "活跃人数",
      "key": "number"
    }],
    "source": [
      ["未知", "17 岁以下", "18-24 岁", "25-29 岁", "30-39 岁","40-49 岁","50 岁以上"],
      [654, 984, 4400, 5300, 6200, 3300, 1500]
    ]
  }
};

rocketChart.init(options);
`;
