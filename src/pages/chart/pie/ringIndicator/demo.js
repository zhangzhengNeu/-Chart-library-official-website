import data from '@pages/example/service/pie/basic.json';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '环形-指标卡',
  type: 'pie-ringIndicator',
  datasetParams: {
    ringIndicator: {
      // name: '累计分享次数',
      // value: '96503630',
    },
  },
  data: ${JSON.stringify(data)}
};

rocketChart.init(options);
`;
