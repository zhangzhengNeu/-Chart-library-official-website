import chartData from '@pages/example/service/funnel/basic';

export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  "dom": document.querySelector("#container"),
  "title": "显示转换率",
  "type": "bar-percent",

  // 自定义bar宽度
  // "datasetParams": {
  //   "barWidth": 25
  // },
  
  "data": ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
