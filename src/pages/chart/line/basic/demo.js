import chartData from '@pages/example/service/line/singleLine';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '我页扫一扫',
  type: 'line-basic',
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
