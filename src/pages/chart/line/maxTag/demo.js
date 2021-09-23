import chartData from '@pages/example/service/line/basic';

export default `
import rocketChart from '@xmly/rocket-chart';

var options =  {
  dom: document.querySelector('#container'),
  title: '最大值标签',
  type: 'line-maxTag',
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
