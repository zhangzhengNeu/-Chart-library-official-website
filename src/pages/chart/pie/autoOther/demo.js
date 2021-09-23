import data from '@pages/example/service/pie/basic.json';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '长尾合并',
  type: 'pie-autoOther',
  datasetParams: {
    // 合并起始位置，默认6
    mergeStart: 4,
    // 合并线名称，默认 '其他'
    mergeText: '其他',
  },
  data: ${JSON.stringify(data)}
};

rocketChart.init(options);
`;
