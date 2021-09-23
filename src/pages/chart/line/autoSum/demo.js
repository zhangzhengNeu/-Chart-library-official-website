import chartData from '@pages/example/service/line/multiple';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '求和',
  type: 'line-autoSum&line-hideSymbol',
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
