export default `
import rocketChart from '@xmly/rocket-chart';

function exit() {
  document.exitFullscreen();
}

function fullScreen() {
  if(document.fullscreenElement){
    document.exitFullscreen();
  } else {
    const b = document.querySelector('.chart');
    b.requestFullscreen();
    b.onfullscreenchange = ()=>chartInstance.resize();
  }
}
var rawData = {
  "target": [{
    "name": "分类",
    "key": "category"
  }, {
    "name": "喜爱值分布",
    "key": "number"
  }],
  "source": [
    ["音乐", "有声", "二次元", "娱乐", "情感"],
    [48662376, 81584784,91584784, 65593929, 49020476]
  ]
};

var options = {
  dom: document.querySelector('#container'),
  title: '全屏显示喜爱值分布',
  type: 'bar-reverse&bar-label',
  data: rawData,
};

var chartInstance = rocketChart.init(options);
chartInstance.setOption({
  toolBar:React.createElement(
    'div',
    null,
    React.createElement('a', {
      title: '保存为图片',
      onClick: fullScreen
    }, '全屏 🔲 ')
  )
});
`;
