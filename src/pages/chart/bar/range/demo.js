import chartData from '@pages/example/service/bar/range';

export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  "dom": document.querySelector("#container"),
  "title": "区间柱状图",
  // 只可和这些类型组合：bar-reverse，bar-label，bar-hideAxis，bar-stack
  "type": "bar-range&bar-label&bar-stack",
  "data": ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
