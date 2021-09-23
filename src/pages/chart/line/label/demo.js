import chartData from '@pages/example/service/line/singleLine';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '标签',
  type: 'line-label',
  datasetParams: {
    /* 是否显示标签，为 false 时只显示圆点， 默认true */
    // showLabel: false,
    /* 是否显示所有标签， 默认false */
    showAllLabel: true,
  },
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
