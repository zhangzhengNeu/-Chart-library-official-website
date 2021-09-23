import chartData from '@pages/example/service/bar/basic';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '标签',
  type: 'bar-label',
  datasetParams: {
      /* 是否显示标签， 默认true */
      showLabel: true,
      /* 是否显示百分比， 默认false */
      showPercentage: false,
  },
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
