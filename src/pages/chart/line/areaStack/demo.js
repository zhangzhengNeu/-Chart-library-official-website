import chartData from '@pages/example/service/line/area';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '堆叠面积图',
  type: 'line-areaStack',
  datasetParams:{
    /* 是否颜色渐变， 默认false */
    gradualColors:false
  },
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
