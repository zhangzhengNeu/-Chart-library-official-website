### bar-percent

显示转换率

**属性配置**

| 属性名   | 说明       | 类型   | 默认值 |
| -------- | ---------- | ------ | ------ |
| barWidth | bar 的宽度 | number | 'auto' |

使用场景：

1. 当数据较多时，可将 barWidth 设置为较小的值，以使图表展示更完美
2. 当数据较少时，可将 barWidth 设置为较大的值，以使图表展示更完美

特殊说明：

1. type 只有一个类型时的配置：

```
  "type": "bar-percent",
  "datasetParams": {
    "barWidth": 20
  },
```

2. type 组合，多余一个类型时的配置：

```
  "type": "bar-percent&bar-label",
  "datasetParams": {
    "percent": {
      "barWidth": 20
    }
  },
```

type 组合时，为了避免冲突，需要指定

备注：

1. 可组合的类型：`bar-label`, `bar-reverse`, `bar-hideAxis`，若和其他类型组合，可能会导致意料之外的结果
2. 若对显示出现遮挡或柱子粗/细不满意时，请调整容器大小。这是因数据量太大或太小原因导致。

- [在线示例](/rocket-chart-gallery/example/play#bar-percent)
- [在线示例-横向](/rocket-chart-gallery/example/play#bar-percentY)