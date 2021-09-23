import data from '@pages/example/service/other/multiple';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '提示设置',
  type: 'line-peak',
  datasetParams: {
    $tooltip: {
      mode: 'light',
      // tips: 'Tips: 这里是提示文案',
      // formatter: (value, index) => {
      //   return '$' + value;
      // },
    }
  },
  data: ${JSON.stringify(data)}
};

rocketChart.init(options);
`;
