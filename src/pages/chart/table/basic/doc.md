## 表格

---

### table-basic

基础表格

**属性配置**

| 参数                   | 说明                              | 类型                                    | 默认值    |
| ---------------------- | --------------------------------- | --------------------------------------- | --------- |
| onChange               | 排序、分页变化回调方法            | `Function`                              |           |
| sorts                  | 表格排序 受控                     | `array`                                 |           |
| pagination             | 分页参数 受控                     | {current,pageSize,pageSizeOptions,show} |           |
| scrollX                | 水平开启方向滚动                  | `boolean`                               | false     |
| ellipsis               | 文字自动省略                      | `boolean`                               | false     |
| drag                   | 拖拽调整列宽                      | `boolean`                               | false     |
| lockList               | 锁定列,使用后自动开启 scrollX     | `array`                                 | []        |
| summary                | 表底合计行                        | `array`                                 | []        |
| keepDataSource         | 保持数据顺序不变（仅使用排序 ui） | `boolean`                               | false     |
| size                   | 表格尺寸                          | `default` `small`                       | `default` |
| setCellProps           | 设置数值单元格属性                | `Function`                              |           |
| columns                | 数据列属性                        | `array`                                 |           |
| columns.item.align     | 对齐方式                          | `left`&vert;`center`&vert;`right`       | `left`    |
| columns.item.formatter | 格式化                            | 参考通用功能`$renderLabel.Type`         |           |

[在线示例](/rocket-chart-gallery/example/play#table-basic)
