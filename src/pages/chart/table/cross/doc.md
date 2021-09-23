### table-cross

透视表格

**属性配置**

| 参数           | 说明               | 类型              | 默认值                                                 |
| -------------- | ------------------ | ----------------- | ------------------------------------------------------ |
| leftCodes      | 左侧维度           | `array`           | []                                                     |
| topCodes       | 顶部维度           | `array`           | []                                                     |
| indicators     | 展示指标           | `array`           | []                                                     |
| indicatorSide  | 指标位置           | `left` `top`      | `top`                                                  |
| ellipsis       | 文字自动省略       | `boolean`         | false                                                  |
| size           | 表格尺寸           | `default` `small` | `default`                                              |
| setCellProps   | 设置数值单元格属性 | `Function`        |                                                        |
| statistics     | 表格统计           | `object`          | `{show:false,position:'start',text: ['总计', '小计']}` |
| leftStatistics | 左侧表格统计       | `object`          | 默认取`statistics`                                     |
| topStatistics  | 顶部表格统计       | `object`          | 默认取 `statistics`                                    |
| columns        | 同 table-basic     | `array`           |                                                        |

[在线示例](/rocket-chart-gallery/example/play#table-cross)
