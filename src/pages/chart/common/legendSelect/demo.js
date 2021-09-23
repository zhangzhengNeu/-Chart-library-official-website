import data from '@pages/example/service/other/multiple';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '图例选择是与非',
  type: 'line-basic',
  datasetParams: {
    $legend: {
      // 图例选择是否反向选择 默认值true
     reverseSelect: false
    }
  },
  data: ${JSON.stringify(data)},
};

rocketChart.init(options);
`;
