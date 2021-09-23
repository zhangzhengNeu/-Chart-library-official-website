import chartData from '@pages/example/service/doubleY/basic';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  "dom": document.querySelector("#container"),
  "title": "基本型",
  "type": "doubleY-basic",
  "datasetParams":{
    // 支持类型 line bar area
    seriesTypes: ['line', 'bar']
  },
  "data": ${JSON.stringify(chartData)},
};

rocketChart.init(options);
`;
