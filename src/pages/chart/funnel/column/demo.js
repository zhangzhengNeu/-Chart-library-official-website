import chartData from '@pages/example/service/funnel/column';

export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  dom: document.querySelector('#container'),
  title: '柱型',
  type: 'funnel-column',
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
