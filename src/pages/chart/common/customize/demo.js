const data = {
  target: [
    {
      name: '日期',
      key: 'date',
    },
    {
      name: '我页扫一扫',
      key: 'number',
    },
  ],
  source: [
    [
      '2020-04-24',
      '2020-04-25',
      '2020-04-26',
      '2020-04-27',
      '2020-04-28',
      '2020-04-29',
      '2020-04-30',
      '2020-05-01',
      '2020-05-02',
      '2020-05-03',
      '2020-05-04',
      '2020-05-05',
      '2020-05-06',
      '2020-05-07',
      '2020-05-08',
    ],
    [84, 95, 94, 76, 77, 77, 95, 72, 61, 125, 59, 87, 74, 76, 83],
  ],
};

export default `
import rocketChart from '@xmly/rocket-chart';
import React from 'react';

var options = {
  dom: document.querySelector('#container'),
  title: '自定义组件',
  type: 'line-basic&line-smooth',
  data: ${JSON.stringify(data)},
  customComponent: React.createElement('h1', {style:{color: '#f86442'}}, 'Hello World'),
  toolBar: '工具栏',
  footer: '这是页脚',
};

rocketChart.init(options);
`;
