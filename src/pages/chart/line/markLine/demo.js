import chartData from '@pages/example/service/line/basic';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '标记线',
  type: 'line-markLine',
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
