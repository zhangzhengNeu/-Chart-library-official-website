import chartData from '@pages/example/service/scatter/basic';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '基本型',
  type: 'scatter-basic',
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
