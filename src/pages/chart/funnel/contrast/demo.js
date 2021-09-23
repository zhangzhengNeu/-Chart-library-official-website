import chartData from '@pages/example/service/funnel/contrast';

export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  dom: document.querySelector('#container'),
  title: '对比型',
  type: 'funnel-contrast',
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
