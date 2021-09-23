# 数据管理

---

示例：

```js
var option = {
  data: {
    target: [
      { key: 'date', name: '日期' },
      { key: 'show', name: '浏览' },
      { key: 'click', name: '点击' },
    ],
    source: [
      ['2019-09-08', '2019-09-07', '2019-09-06'],
      [6236, 5595, 5257],
      [623, 559, 525],
    ],
  },
};
```

## 数据参数

---

### target

---

类型： `Object[]`  
说明： 定义维度信息，第一行应用于类目，其他项应用于数据项

示例：

```js
[
  { key: 'date', name: '日期' },
  { key: 'show', name: '浏览' },
  { key: 'click', name: '点击' },
];
```

#### target.key

类型： `string`  
说明： 唯一标识

#### target.name

类型： `string`  
说明： 数据名称

### source

---

类型： `Array[]` | `Object[]`  
说明： 原始数据

二维表，如果 [target](#target) 看做表头的话，下列每一行为表头对应的数据，如：

```js
[
  ['2019-09-08', '2019-09-07', '2019-09-06'],
  [6236, 5595, 5257],
  [623, 559, 525],
];
```

可以是对象数组 `Object[]`，此时，会根据 [target](#target) 里定义的 `key` 提取数据

对象数据表示：

```js
[
  { date: '2019-09-08', show: 6236, click: 623 },
  { date: '2019-09-07', show: 5595, click: 559 },
  { date: '2019-09-06', show: 5257, click: 525 },
];
```

还可以是：

```js
var option = {
  target: [],
  source: {
    nodes: [
      { name: '浏览', value: 1 },
      { name: '点击', value: 2 },
      { name: '点击2', value: 3 },
    ],
    links: [
      { source: '浏览', target: '点击', value: 236 },
      { source: '浏览', target: '点击2', value: 6000 },
    ],
  },
};
```
