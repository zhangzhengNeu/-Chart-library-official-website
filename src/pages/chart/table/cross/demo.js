import chartData from '@pages/example/service/table/cross';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '透视表',
  type: 'table-cross',
  //device:'mobile',
  datasetParams:{
    //indicatorSide:'left',
    //size:'small',
    columns:{
      valueA:{
        align:'right',
        formatter:'.3decimal'
      },
    },
    leftCodes: ['subs','shop'],
    topCodes: ['season','month'],
    indicators: [{code:'valueA'},{code:'valueB'}],
    statistics: {
      show: true,
      //position: 'start' | 'end',
      //text: ['总计', '小计'],
    },
    setCellProps:(value, code, record)=>{
      if(value > 4000){
        return { style: { background: '#61a0e6',color:'#fff' } }
      }
      return {}
    }
  },
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
