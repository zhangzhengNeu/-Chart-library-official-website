import data from '@pages/example/service/line/singleLine';

export default `
import rocketChart from '@xmly/rocket-chart';
import ReactDOM from 'react-dom';

function downloadImg () {
  chartInstance && chartInstance.getDataURL();
}

var options = {
  dom: document.querySelector('#container'),
  title: '工具栏',
  type: 'line-peak',
  data: ${JSON.stringify(data)}
};

var chartInstance = rocketChart.init(options);

chartInstance.setOption({
  toolBar: React.createElement(
    'div',
    null, 
    React.createElement('a', { title: '保存为图片', onClick: downloadImg }, '⬇️'),
  )
});

`;
