import chartData from '@pages/example/service/bar/rangeHorizon';

export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  "dom": document.querySelector("#container"),
  "title": "区间柱状图",
  // 只可和这些类型组合：bar-reverse，bar-label，bar-hideAxis
  "type": "bar-range&bar-reverse",
  "data": ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
