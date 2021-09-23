import chartData from '@pages/example/service/line/area';
import { toAppointDataSet } from '@utils/transfer/index';

const echartsData = toAppointDataSet(chartData, 2, 3);

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '面积图',
  type: 'line-area',
  datasetParams:{
    /* 是否颜色渐变， 默认false */
    gradualColors:false
  },
  data: ${JSON.stringify(echartsData)},
};

rocketChart.init(options);
`;
