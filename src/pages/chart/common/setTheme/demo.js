import data from '@pages/example/service/other/multiple';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '设置主题',
  type: 'line-peak&line-smooth',
  /* 默认default，还可以是light、retro、dark */
  theme: 'dark',   
  datasetParams: {
    timeAxis: {
      show: true,
      // 时间粒度：y/M/d/h/m/s，默认d
      grain: 'm',
    }
  },
  data: ${JSON.stringify(data)}
};

rocketChart.init(options);
`;
