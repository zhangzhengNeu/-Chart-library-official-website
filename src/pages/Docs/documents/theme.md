# 颜色与主题

---

## 内置主题

---

Rocket Chart 内置 4 个主题，分别为：default、light、retro、dark。

默认主题为 default，用户可以在初始化图表的时候配置 theme 参数

```js
import rocketChart from '@xmly/rocket-chart';

rocketChart.init({
  dom: document.querySelector('#container'),
  title: '基本型',
  type: 'line-basic&line-areaStack',
  theme: 'dark', // 默认为default
  data: [],
});
```

可在 [主题示例](/rocket-chart-gallery/example/play#common-setTheme) 中编辑查看各个主题的效果。

<!-- ## 注册主题

---

> 没有内置在图表库中的主题，需要自己加载，这些主题可以在 [echarts 的主题编辑器](https://www.echartsjs.com/theme-builder/) 里访问到。也可以使用这个主题编辑器，自己编辑主题。 -->

## 自定义系列颜色

---

可以设置一组颜色，系列会从中选择颜色，[查看示例](/rocket-chart-gallery/example/play#other-customizeColor)

```js
import rocketChart from '@xmly/rocket-chart';

rocketChart.init({
  dom: document.querySelector('#container'),
  title: '自定义系列颜色',
  type: 'pie-ring',
  option: {
    color: [
      '#6882ff',
      '#778eff',
      '#869bff',
      '#95a7ff',
      '#a4b4ff',
      '#b4c0ff',
      '#c3cdff',
      '#d2daff',
      '#e2e7ff',
      '#f1f4ff',
    ],
  },
  data: [],
});
```
