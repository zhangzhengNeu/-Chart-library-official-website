import chartData from '@pages/example/service/line/singleLine';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '平滑',
  type: 'line-smooth',
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
