import chartData from '@pages/example/service/funnel/basic';

export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  "dom": document.querySelector("#container"),
  "title": "显示转换率",
  // 基本
  // "type": "bar-percent",

  // 组合：+ label + 隐藏轴 + 横向
  "type": "bar-percent&bar-label&bar-hideAxis&bar-reverse",

  // 自定义bar宽度
  "datasetParams": {
    "percent": {
      "barWidth": 25
    } 
  },

  "data": ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
