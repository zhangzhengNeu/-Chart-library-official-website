import chartData from '@pages/example/service/map/basic';

export default `
import rocketChart from '@xmly/rocket-chart';

// <!--引入高德地图JSAPI -->
// <script src="//webapi.amap.com/maps?v=2.0&key=您申请的key值"></script>
// 参考 https://lbs.amap.com/api/webservice/guide/create-project/get-key

// data.source[0] 以城市编码标识位置 如新疆为650000，150000为内蒙古

var options = {
  dom: document.querySelector('#container'),
  title: '数据',
  type: 'map-basic',
  datasetParams:{
    mapType:'100000', //地图adcode 默认100000 既中国地图
    areaColor:'#eee',  //地图区域的颜色,默认#eee
    borderColor:'#fff' //描边颜色,默认#fff
  },
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
