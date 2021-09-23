import chartData from '@pages/example/service/line/area';
import theme from '@pages/example/service/theme';

const opts = new Array(chartData.source.length - 1)
  .fill({
    itemStyle: {
      color: '',
    },
    areaStyle: {
      color: '',
    },
    lineStyle: {
      color: '',
    },
  })
  .map((ele, cursor) => {
    const itm = JSON.parse(JSON.stringify(ele));
    itm.itemStyle.color = theme.color[cursor];
    itm.areaStyle.color = theme.color[cursor];
    itm.lineStyle.color = theme.color[cursor];
    return itm;
  });

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  "dom": document.querySelector("#container"),
  "title": "堆叠面积图",
  "type": "line-areaStack",
  "option": {
    "tooltip": ${JSON.stringify({
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    })},
    "series": ${JSON.stringify(opts)}
  },
  "data": ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
