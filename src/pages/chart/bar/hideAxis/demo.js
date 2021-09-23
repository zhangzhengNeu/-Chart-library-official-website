import chartData from '@pages/example/service/bar/basic';

export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  "dom": document.querySelector("#container"),
  "title": "隐藏轴",

  // 基本：
  // "type": "bar-hideAxis",

  // 组合：+ label + 横向
  "type": "bar-hideAxis&bar-label&bar-reverse",

  "data": ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
