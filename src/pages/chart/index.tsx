import React from 'react';
import {
  LineChartOutlined,
  BarChartOutlined,
  PieChartOutlined,
  TableOutlined,
  DotChartOutlined,
  EllipsisOutlined,
  AppstoreOutlined,
  FunnelPlotOutlined,
  GlobalOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';
import RocketIcon from '@components/RocketIcon';

export const chartTypeList = [
  {
    id: 'line',
    name: '折线图',
    icon: <LineChartOutlined />,
    // docId: 'line', // 默认同id，可省略
  },
  {
    id: 'bar',
    name: '柱状图',
    icon: <BarChartOutlined />,
  },
  {
    id: 'pie',
    name: '饼图',
    icon: <PieChartOutlined />,
  },
  {
    id: 'funnel',
    name: '漏斗图',
    icon: <FunnelPlotOutlined />,
  },
  {
    id: 'card',
    name: '指标卡',
    icon: <TableOutlined />,
  },
  {
    id: 'doubleY',
    name: '双轴图',
    icon: <BarChartOutlined />,
  },
  {
    id: 'table',
    name: '表格',
    icon: <TableOutlined />,
  },
  {
    id: 'scatter',
    name: '散点图',
    icon: <DotChartOutlined />,
  },
  {
    id: 'map',
    name: '地图',
    icon: <GlobalOutlined />,
  },
  {
    id: 'wordcloud',
    name: '词云',
    icon: <RocketIcon type="icon-ciyun" />,
  },
  {
    id: 'graph',
    name: '关系图',
    icon: <RocketIcon type="icon-ciyun" />,
  },
];

export const otherList = [
  {
    id: 'common',
    name: '通用配置',
    icon: <AppstoreOutlined />,
  },
  {
    id: 'other',
    name: '其他',
    icon: <EllipsisOutlined />,
  },
];
export const exampleList = [
  {
    id: 'scene',
    name: '场景示例',
    icon: <AreaChartOutlined />,
  },
];

export const usageList = [
  {
    id: 'useage',
    name: '图表用法',
  },
  {
    id: 'whatToShow',
    name: '你想展示什么',
  },
  {
    id: 'exactNumber',
    name: '准确数值',
  },
  {
    id: 'trend',
    name: '趋势',
  },
  {
    id: 'percent',
    name: '占比',
  },
  {
    id: 'compare',
    name: '比较不同分类',
  },
  {
    id: 'relativity',
    name: '变量之间的相关性',
  },
  {
    id: 'flow',
    name: '单向流程',
  },
];

export const buttonList = {
  exactNumber: [
    {
      id: 'table-cross',
      name: '透视表',
    },
    {
      id: 'table-basic',
      name: '普通表格',
    },
    {
      id: 'card-basic',
      name: '指标卡',
    },
  ],

  trend: [
    {
      id: 'line-peak',
      name: '峰谷',
    },
    {
      id: 'line-maxTag',
      name: '最大值标签',
    },
    {
      id: 'line-autoSum',
      name: '求和',
    },
    {
      id: 'line-autoOther',
      name: '长尾合并',
    },
    {
      id: 'line-markLine',
      name: '标记线',
    },
    {
      id: 'line-regression',
      name: '多项式回归',
    },
    {
      id: 'line-dataZoom',
      name: '数据缩放',
    },
    {
      id: 'line-autoYAxis',
      name: 'Y轴自适应',
    },
    {
      id: 'line-holiday',
      name: '节假日',
    },
    {
      id: 'line-area',
      name: '面积图',
    },
    {
      id: 'line-areaStack',
      name: '堆叠面积图',
    },
  ],

  percent: [
    {
      id: 'bar-stack',
      name: '堆叠柱状图',
    },
    {
      id: 'line-areaStack',
      name: '堆叠面积图',
    },
    {
      id: 'pie-basic',
      name: '饼图',
    },
    {
      id: 'bar-label',
      name: '百分比标签柱状图',
    },
  ],

  compare: [
    {
      id: 'bar-reverse',
      name: '条形图',
    },
    {
      id: 'bar-stack',
      name: '堆叠柱状图',
    },
    {
      id: 'bar-stackPercent',
      name: '百分比堆叠柱状图',
    },
    {
      id: 'doubleY-basic',
      name: '双轴图',
    },
    {
      id: 'bar-rangeHorizon',
      name: '区间柱状图',
    },

    {
      id: 'wordcloud-basic',
      name: '词云',
    },
    {
      id: 'map-basic',
      name: '地图',
    },
  ],

  relativity: [
    {
      id: 'scatter-basic',
      name: '散点图',
    },
    {
      id: 'graph-basic',
      name: '关系图',
    },
  ],

  flow: [
    {
      id: 'funnel-basic',
      name: '漏斗图',
    },
    {
      id: 'bar-percent',
      name: '柱状图含转换率',
    },
  ],
};
