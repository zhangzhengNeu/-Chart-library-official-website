import chartData from '@pages/example/service/line/basic';

const data = { target: chartData.target.slice(0, 2), source: chartData.source.slice(0, 2) };

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '类型组合',
  type: 'line-peak&line-regression',
  // 组合类型参数格式请参考：/rocket-chart-gallery/docs/apis#DatasetParams
  datasetParams: {
    // line-peak的参数，更多参数请查看图表类型文档：/rocket-chart-gallery/docs/chart-type
    peak: {
      maxGap: 30,
    },
    // regression的参数，更多参数请查看图表类型文档：/rocket-chart-gallery/docs/chart-type
    regression: {
      regressionFormula: false,
    }
  },
  data: ${JSON.stringify(data)}
};

rocketChart.init(options);
`;
