import chartData from '@pages/example/service/bar/basic';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '数据缩放',
  type: 'bar-dataZoom',
  datasetParams: {
    // x轴缩放，默认true
    datazoomX: true,
    // y轴缩放，默认false
    datazoomY: false,
  },
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
