# 通用功能

---

通用功能不依赖与图表类型，如

```js
const option = {
  datasetParams: {
    $legend: {
      placement: 'right',
    },
  },
};
```

## 类型组合

---

多个类型一起使用，如

```js
{
  type: 'line-peak&line-regression';
}
```

[在线示例](/rocket-chart-gallery/example/play#common-multiple)

## datasetParams

---

配置在 `datasetParams` 下的通用功能，以`$`开头

### $backgroundColor

类型： `string`  
默认值： 随主题颜色
描述：配置图表背景色

[在线示例](/rocket-chart-gallery/example/play#common-timeAxis)

---

### $legend

类型：`boolean`  
默认值：见下表  
描述：图例配置

| 属性名        | 说明                                                                                                                               | 类型                 | 默认值 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| reverseSelect | 是否反向选择                                                                                                                       | `boolean`            | true   |
| placement     | 位置 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | `string`             | bottom |
| width         | 宽度： 当 placement 为 left\* \| right\* 生效                                                                                      | `number` \| `string` | auto   |

在线示例：[选择](/rocket-chart-gallery/example/play#common-legendSelect)
[位置](/rocket-chart-gallery/example/play#common-legendPosition)

---

### $timeAxis

类型：`object`  
默认：见下表  
描述：时间轴格式化，对于类目轴为时间的图表，进行时间格式化

| 属性名 | 说明                                 | 类型      | 默认值 |
| ------ | ------------------------------------ | --------- | ------ |
| show   | 是否显示格式化的时间                 | `boolean` | false  |
| grain  | 时间粒度：y \| M \| d \| h \| m \| s | `string`  | d      |

[在线示例](/rocket-chart-gallery/example/play#common-timeAxis)

---

### $renderLabel

类型：`object` | `object[]`  
默认值：见下表  
描述：格式化范围：数据轴(axis)、数据点标签(series) 和 提示信息(tooltip)  
<small><u>注：与双轴图一起使用时，scope只支持axis</u></small>

| 属性名    | 说明       | 类型                                      | 默认值 |
| --------- | ---------- | ----------------------------------------- | ------ |
| scope     | 使用范围   | [$renderLabel.Scope](#$renderLabel.Scope) | ''     |
| type      | 类型       | [$renderLabel.Type](#$renderLabel.Type)   | number |
| prefix    | 前缀       | `string`                                  |        |
| suffix    | 后缀       | `string`                                  |        |
| formatter | 格式化方法 | `function`                                |        |

#### $renderLabel.Type

| 值        | 说明                                                                       |
| --------- | -------------------------------------------------------------------------- |
| 'integer' | 数据整数使用千分位展示                                                     |
| 'number'  | 使用千分位展示 `.{n}number` 为最多保留n位小数, 其中0 < n < 10              |
| 'decimal' | 默认保留两位小数, `.{n}decimal` 为保留n位小数, 其中0 < n < 10              |
| 'percent' | 百分比展示，默认保留两位小数，`.{n}percent` 为保留n位小数, 其中0 <= n < 10 |
| 'string'  | 字符串展示                                                                 |
| 'abbr'    | 缩略形式，如：100000 => 10万，100000000 => 1亿                             |

#### $renderLabel.Scope

| 值        | 说明                                                     |
| --------- | -------------------------------------------------------- |
| 'axis'    | 数值轴标签格式化                                         |
| 'series'  | 数据点标签格式化                                         |
| 'tooltip' | 提示信息格式化                                           |
| 'all'     | 已上三项选全部格式化，即等于 axis + series + tooltip |
| ''        | 根据$renderLabel.type值优化显示                          |

`''` 根据`$renderLabel.type` 值优化显示说明：
- `$renderLabel.type=abbr`，仅axis。
- 非abbr，等于all。

[在线示例](/rocket-chart-gallery/example/play#common-labelFormat)

---

### 标注功能

补充点的含义

[在线示例](/rocket-chart-gallery/example/play#common-mark)

---
