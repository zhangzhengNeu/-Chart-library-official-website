import chartData from '@pages/example/service/other/sync';

export default `
import rocketChart from '@xmly/rocket-chart';
import React from 'react';

var rawData = ${JSON.stringify(chartData)}

var options = {
  dom: document.querySelector('#container'),
  title: '自定义组件-同步',
  type: 'line-basic&line-smooth',
  data: rawData,
  customComponent: React.createElement('h1', null, 'Hello World'),
  toolBar: '工具栏',
  footer: '这是页脚',
};

var chartInstance = rocketChart.init(options);
chartInstance.echart.on('showTip', function (params) {
  chartInstance.setOption({
    "customComponent": React.createElement('h1', null, 'current data: '+rawData.source[0][params.dataIndex])
  })
});
`;
