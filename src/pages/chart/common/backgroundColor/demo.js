export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  dom: document.querySelector('#container'),
  title: '背景颜色',
  type: 'bar-basic',
  datasetParams:{
    $backgroundColor:"rgb(252, 243, 207)",
  },
  data: {
    "target": [{
      "name": "城市",
      "key": "city"
    }, {
      "name": "30天播放UV top 5",
      "key": "number"
    }],
    "source": [
      ["北京", "上海", "天津", "深圳", "广州"],
      [148662376, 91584784, 65593929, 49020476, 49013977]
    ]
  }
};

rocketChart.init(options);
`;
