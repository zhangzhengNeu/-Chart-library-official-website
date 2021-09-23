import chartData from '@pages/example/service/table/basic';

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '基本型',
  type: 'table-basic',
  //device:'mobile',
  datasetParams:{
    // asc升序 desc降序
    // sorts:[{code: "date", order: "desc"}],
    //size:'small',
    drag:false,
    columns:{
      QQ:{
        align:'right',
        formatter:'.3decimal'
      }
    },
    pagination: {
      show: true,
      current: 1,
      pageSize: 10,
      pageSizeOptions: [10, 20],
    },
    scrollX : true,
    ellipsis : true,
    lockList : ['date'],
    summary : [],
    keepDataSource : false,
    onChange: (state, trigger) => {
      console.log(state, trigger);
    },
  },
  data: ${JSON.stringify(chartData)}
};

rocketChart.init(options);
`;
