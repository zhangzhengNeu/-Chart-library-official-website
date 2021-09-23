# FAQ

---

## 折线图既想要平滑曲线又想要隐藏标签？

---

支持组合使用即：`type: 'line-smooth&line-hideSymbol'`

## 设置的主题没有作用？

---

主题只有在初始化图表库的时候设置才有作用，在 setOption 里修改是没有作用的。即只能 `RocketChart.init({..., theme: 'dark', ...})`

## 图表为什么不显示？

---

你可以检查以下情况：

1. 调用 Rocket.init 的时候，DOM 容器是否有宽高。

## 图表上没有数据显示？

---

你可以检查以下情况：

1. 数据传入图表库之前，数据是否为非空。
2. 数据是否是异步加载的，参考[异步数据显示](/rocket-chart-gallery/docs/data-update)。
