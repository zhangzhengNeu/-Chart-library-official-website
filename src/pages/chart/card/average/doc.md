### card-average
| 参数 | 说明     | 类型                                                        | 默认值 | 是否必填 |
| ---- | -------- | ----------------------------------------------------------- | ------ | -------- |
| selectable | 是否开启选中功能 | `false` \| `true` | `false`      | 否       |
| flow | 对齐方式 | `row` \| `column` | `row`      | 否       |
| align | 排列方式 | `left` \| `center` \| `right` \| `around` \| `between`  | `left` | 否       |
| verticalAlign | 垂直对齐方式 | `top` \| `center` \| `bottom` | `top`  | 否       |
| style | 外层容器样式 | `object`   | `{}`   | 否       |
| valueStyle | 数值样式 | `object` | `{}`   | 否       |
| className | 外层容器样式 | `string` | `''`      | 否       |
| formatters | 全局刷格式 | `[key: string]: Formatter | Function | string`  | `{}` | 否       |
| onSelect | 开启选中回调函数 | `function({ key: string, type: 'label' | 'value', style: object })` | `-` | 否 |

[在线示例](/rocket-chart-gallery/example/play#card-average)