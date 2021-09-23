import data from '@pages/example/service/pie/basic.json';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '隐藏标签',
  type: 'pie-hideSymbol',
  data: ${JSON.stringify(data)}
};

rocketChart.init(options);
`;
