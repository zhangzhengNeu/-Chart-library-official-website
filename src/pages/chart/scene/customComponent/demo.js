export default `
import rocketChart from '@xmly/rocket-chart';

function downloadImg() {
  chartInstance && chartInstance.getDataURL();
}

var rawData = {
  "target": [{
    "key": "time",
    "name": "time"
  }, {
    "key": "list",
    "name": "专辑"
  }, {
    "key": "detail",
    "name": "声音"
  }, {
    "key": "play",
    "name": "直播"
  }],
  "source": [
    ["2020-04-08 04:00:00", "2020-04-08 05:00:00", "2020-04-08 06:00:00", "2020-04-08 07:00:00", "2020-04-08 08:00:00", "2020-04-08 09:00:00", "2020-04-08 10:00:00", "2020-04-08 11:00:00", "2020-04-08 12:00:00", "2020-04-08 13:00:00", "2020-04-08 14:00:00"],
    [124, 546, 530, 509, 626, 540, 787, 590, 808, 324, 266],
    [637, 662, 549, 689, 483, 697, 281, 481, 682, 310, 848],
    [450, 210, 108, 88, 240, 69, 125, 210, 65, 98, 146]
  ]
}
var options = {
  dom: document.querySelector('#container'),
  title: '平台付费的趋势对比',
  type: 'line-maxTag&line-smooth',
  customComponent: React.createElement('h1', {
    style: {
      color: '#f86442'
    }
  }, rawData.source[0][0]+'至'+rawData.source[0].slice(-1)),

  datasetParams: {
    $renderLabel: {
      type: 'abbr',
      scope: 'series', 
      prefix: '$',
    },
    $tooltip: {
      mode: 'light',
      tips: 'Tips: 这里是提示文案',
      formatter: (value, index) => {
        return '$' + value;
      },
    },
  },
  data: rawData,
};


var chartInstance = rocketChart.init(options);
chartInstance.echart.on('showTip', function(params) {
  chartInstance.setOption({
    "customComponent": React.createElement('h1', {
    style: {
      color: '#f86442'
    }
  }, rawData.source[0][params.dataIndex]+' 专辑: ' + rawData.source[1][params.dataIndex]  +" 声音: " + rawData.source[2][params.dataIndex]+" 直播: " + rawData.source[3][params.dataIndex] )
  })
});
chartInstance.setOption({
  toolBar: React.createElement(
    'div',
    null,
    React.createElement('a', {
      title: '保存为图片',
      onClick: downloadImg,
    }, '⬇️'),
  ),
});`;
