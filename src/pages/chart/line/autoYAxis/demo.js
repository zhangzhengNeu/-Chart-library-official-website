import chartData from '@pages/example/service/line/singleLine';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: 'Y轴自适应',
  type: 'line-autoYAxis',
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
