const data = {
  target: [
    {
      key: 'date',
      name: '日期',
    },
    {
      key: 'uv',
      name: 'uv',
    },
  ],
  source: [
    [
      '2020-06-23',
      '2020-06-24',
      '2020-06-25',
      '2020-06-26',
      '2020-06-27',
      '2020-06-28',
      '2020-06-29',
      '2020-06-30',
      '2020-07-01',
      '2020-07-02',
      '2020-07-13',
      '2020-07-14',
      '2020-07-15',
      '2020-07-16',
      '2020-07-17',
      '2020-07-18',
      '2020-07-19',
      '2020-07-20',
      '2020-07-21',
      '2020-07-22',
      '2020-07-23',
      '2020-07-24',
      '2020-07-25',
      '2020-07-26',
      '2020-07-27',
      '2020-07-28',
      '2020-07-29',
      '2020-07-30',
      '2020-07-31',
      '2020-08-01',
    ],
    [
      74,
      9,
      11,
      74,
      69,
      76,
      96,
      80,
      3,
      11,
      89,
      83,
      81,
      101,
      95,
      14,
      13,
      87,
      100,
      92,
      85,
      151,
      9,
      8,
      101,
      77,
      107,
      106,
      100,
      14,
    ],
  ],
};

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '某项目UV',
  type: 'line-hideSymbol',
  data: ${JSON.stringify(data)}
};

const echart = rocketChart.init(options);
echart.createDataMaker({
  position: ['2020-07-24', 151],
  text: '当天进行了项目分享',
  point: {
    fill: '#942893',
    stroke: '#942893'
  }
});

echart.createDataMaker({
  position: ['2020-07-19', 13],
  text: '周末',
  // bottom: true,
  // point: {
  //   fill: '#942893',
  //   stroke: '#942893'
  // }
})
`;
