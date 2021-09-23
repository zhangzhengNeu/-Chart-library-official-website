import data from '@pages/example/service/pie/basic.json';

export default `
import rocketChart from '@xmly/rocket-chart';
import React from 'react';

var rawData = ${JSON.stringify(data)}

var options = {
  dom: document.querySelector('#container'),
  title: '自定义系列颜色',
  type: 'pie-ring',
  option: {
    color: [
      '#6882ff',
      '#7a91ff',
      '#95a7ff',
      '#b4c0ff',
      '#c3cdff',
      '#d2daff',
      '#e2e7ff',
      '#f1f4ff',
    ],
  },
  data: rawData,
};

rocketChart.init(options);
`;
