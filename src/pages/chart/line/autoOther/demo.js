import chartData from '@pages/example/service/line/multiple';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '长尾合并',
  type: 'line-autoOther&line-hideSymbol',
  datasetParams:{
    autoOther: {
      // 合并起始位置，默认6
      mergeStart: 4, 
      // 合并线名称，默认 '其他'
      mergeText: '其他' 
    },
    $tooltip: {
      mode: 'light',
    },
  },
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
