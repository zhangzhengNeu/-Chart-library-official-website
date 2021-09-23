import chartData from '@pages/example/service/line/basic';

const data = { target: chartData.target.slice(0, 2), source: chartData.source.slice(0, 2) };

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '多项式回归',
  type: 'line-regression',
  datasetParams: {
    // 显示多项式公式，默认不显示
    regressionFormula: false,
    // 多项式的阶数，控制拟合程度，默认为 2
    regressionOrder: 3,
  },
  data: ${JSON.stringify(data)},
};

rocketChart.init(options);
`;
