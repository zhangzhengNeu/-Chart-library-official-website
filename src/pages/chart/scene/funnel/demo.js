export default `
import rocketChart from '@xmly/rocket-chart';
var options = {
  dom: document.querySelector('#container'),
  title: '浏览商品转化漏斗',
  type: 'funnel-column',
  datasetParams: {
    $renderLabel: {
      suffix: '人',
    },
  },
  data: {
    "target": [{
      "name": "项目",
      "key": "item"
    }, {
      "name": "数值",
      "key": "number"
    }],
    "source": [
      ["浏览商品详情页", "收藏商品", "咨询商品", " 提交订单", " 支付订单"],
      [897, 754, 432, 233, 122]
    ]
  }
};

rocketChart.init(options);`;
