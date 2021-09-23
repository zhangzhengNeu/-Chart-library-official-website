const data = {
  target: [
    {
      key: 'date',
      name: 'date',
    },
    {
      key: '微信',
      name: '微信',
    },
    {
      key: 'QQ',
      name: 'QQ',
    },
    {
      key: '微信朋友圈',
      name: '微信朋友圈',
    },
    {
      key: '微信好友',
      name: '微信好友',
    },
    {
      key: '未知分享渠道',
      name: '未知分享渠道',
    },
    {
      key: '微信群聊',
      name: '微信群聊',
    },
  ],
  source: [
    ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    [332094, 337579, 352347, 367567, 391256, 401619, 399698],
    [139759, 138489, 143740, 173722, 151208, 158726, 159192],
    [33716, 33001, 34896, 35295, 37915, 38679, 37572],
    [3157, 2347, 2803, 4219, 3860, 4638, 5674],
    [442, 343, 323, 748, 430, 512, 689],
    [1291, 930, 1289, 3407, 1012, 1508, 1688],
  ],
};

export default `
import rocketChart from '@xmly/rocket-chart';

var options = {
  dom: document.querySelector('#container'),
  title: '堆叠',
  type: 'bar-stack',
  data: ${JSON.stringify(data)}
};

rocketChart.init(options);
`;
