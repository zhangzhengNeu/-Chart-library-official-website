import chartData from '@pages/example/service/line/singleLine';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '隐藏标签',
  type: 'line-hideSymbol',
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
