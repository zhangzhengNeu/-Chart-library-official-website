import data from '@pages/example/service/pie/basic.json';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '基本型',
  type: 'pie-basic',
  data: ${JSON.stringify(data)}
};

rocketChart.init(options);
`;
