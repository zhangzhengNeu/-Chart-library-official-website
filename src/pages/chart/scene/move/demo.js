export default `
import rocketChart from '@xmly/rocket-chart';
import React from 'react';

function getData() {
  const list = getRandomInt(300, 100);
  const detail = getRandomInt(600, 400);
  const play = getRandomInt(1000, 700);
  return {list, detail, play}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

var rawData = {
  "target": [{
    "key": "time",
    "name": "time"
  }, {
    "key": "list",
    "name": "列表页"
  }, {
    "key": "detail",
    "name": "详情页"
  }, {
    "key": "play",
    "name": "播放"
  }],
  "source": [{
    "time": '2020-04-08 00:00', //时间
    "list": '200', //列表页
    "detail": '500', //详情页
    "play": '800', //播放页
  }]
}

var options = {
  dom: document.querySelector('#container'),
  title: '点击量动态展示图',
  type: 'line-basic&line-smooth',
  data: rawData,
};

var chartInstance = rocketChart.init(options);
chartInstance.echart.on('showTip', function(params) {
  chartInstance.setOption({
    "customComponent": React.createElement('h1', null, 'current data: ' + rawData.source[params.dataIndex].time)
  })
});

for (let i = 1; i < 10; i++) {
  setTimeout(function() {
    rawData.source.push({
      "time": "2020-04-08 " + (i) + ":00:00",
      ...getData(),
      //编辑器不支持扩展运算符的格式，但代码没问题
    })
    chartInstance.echart && chartInstance.setOption({
      data: rawData
    });
  }, 1000 * i);
}
`;
