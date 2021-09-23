import data from '@pages/example/service/other/lengedPosition';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '图例位置',
  type: 'line-basic',
  datasetParams: {
    $legend: {
      // 可选值 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      placement: 'right',
      // 当placement为left* | right*生效 number|string
      width: 'auto'
    }
  },
  data: ${JSON.stringify(data)},
};

rocketChart.init(options);
`;
