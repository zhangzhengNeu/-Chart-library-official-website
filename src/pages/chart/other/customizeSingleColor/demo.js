import data from '@pages/example/service/other/sync';

export default `
import rocketChart from '@xmly/rocket-chart';
import React from 'react';

var options = {
  dom: document.querySelector('#container'),
  title: '自定义单个系列颜色',
  type: 'bar-basic',
  option: {
    customerColor: {
      // 定义详情页数据条颜色为草绿色
      '详情页': '#97B552',
    }
  },
  data: ${JSON.stringify(data)},
};

rocketChart.init(options);
`;
