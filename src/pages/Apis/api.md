## rocketChart <anchor id="rocketChart"/>

---

### init <anchor id="rocketChart-init"/>

```typescript
(
  dom:HTMLDivElement,
  type:string,
  data?:Data,
  formatters?:Formatters,
  option?:Option,
  theme?:string,
  device?:string,
  opts?: {
    devicePixelRatio?: number
    renderer?: string
    width?: number|string
    height? number|string
  },
  datasetParams:DatasetParams,
  maxSymbolCount?: number,
  title? CustomComponent：,
  toolBar? CustomComponent：,
  customComponent? CustomComponent：,
  footer? CustomComponent：
) => RocketChart;
```

创建一个`rocketChart`的实例，返回`rocketChartInstance`,不能在单个容器上初始化多个`rocketChart` 实例

参数：

- dom: 实例容器，一般是一个具有高宽的`div`元素。
- type: 图表类型，参考：[Type](#appendix-Type)
- data?: 图表数据，参考：[Data](#appendix-Data)
- formatters?: 图表数据格式化方法，[Formatters](#appendix-Formatters)
- option?: 图表配置，参考：[Option](#appendix-Option)
- theme?: `default` | `light` | `retro` | `dark` 图表主题，默认为 `default`
- device?: `desktop` | `mobile` 显示模式,默认根据浏览器自动判断，可通过设置覆盖
- opts?: 附加参数,参考[echart opts](https://www.echartsjs.com/zh/api.html#echarts.init)
- datasetParams?: [业务图表参数](#appendix-DatasetParams)
- maxSymbolCount?: `symbol`最大数量 默认 400
- title?: 标题组件
- toolBar?: 工具栏组件
- customComponent?: 自定义组件
- footer?: 底部组件

---

### getInstanceByDom <anchor id="rocketChart-getInstanceByDom"/>

```typescript
(dom: HTMLDivElement) => RocketChart;
```

根据`dom`节点获取图表实例

---

### echart <anchor id="rocketChart-echart"/>

全局`echart`对象

---

## rocketChartInstance <anchor id="rocketChartInstance"/>

`rocketChart`图表实例

---

### setOption <anchor id="rocketChartInstance-setOption"/>

```typescript
(
  option?:Option,
  notMerge?:boolean,
  lazyUpdate?:boolean,
  type?:string,
  data?:Data,
  datasetParams?:DatasetParams,
  title? CustomComponent：,
  toolBar? CustomComponent：,
  customComponent? CustomComponent：,
  footer? CustomComponent：
)=>void
```

图表数据、配置更新接口，默认会合并当前图表状态值

参数：

- option?： 图表配置，参考：[Option](#appendix-Option)
- notMerge?：是否与之前配置合并，默认为 false
- lazyUpdate?：是否不立即更新图表，默认为 false，即立即更新
- type?:图表类型，参考：[Type](#appendix-Type)
- data?:图表数据，参考：[Data](#appendix-Data)
- datasetParams?:[业务图表参数](#appendix-DatasetParams)
- title?: 标题组件
- toolBar?: 工具栏组件
- customComponent?: 自定义组件
- footer?: 底部组件

---

### getOption <anchor id="rocketChartInstance-getOption"/>

```typescript
() => EchartOptions;
```

获取当前图表 `option`,包括图表当前配置项、状态、类型等。

---

### getWidth <anchor id="rocketChartInstance-getWidth"/>

```typescript
() => number;
```

获取实例容器宽度。

---

### getHeight <anchor id="rocketChartInstance-getHeight"/>

```typescript
() => number;
```

获取实例容器高度。

---

### resize <anchor id="rocketChartInstance-resize"/>

```typescript
(opts:{width?:number|string,height?:number|string})=>void
```

改变图表尺寸，在容器大小发生改变时需要手动调用。

---

### getDom <anchor id="rocketChartInstance-getDom"/>

```typescript
() => HTMLDivElement;
```

获取实例容器 dom。

---

### getDataURL <anchor id="rocketChartInstance-getDataURL"/>

导出完成图表图片，包含用户自定义组件。

---

### dispose <anchor id="rocketChartInstance-dispose"/>

销毁图表实例。

---

### isDisposed <anchor id="rocketChartInstance-isDisposed"/>

```typescript
() => boolean;
```

返回当前图表是否销毁。

---

### clear <anchor id="rocketChartInstance-clear"/>

清空当前实例，会移除实例中所有的组件和图表。

---

## 附录 <anchor id="appendix"/>

### Type <anchor id="appendix-Type"/>

图表类型，支持以`&`符号连接

```js
{
  type:'line-basic' | 'line-basic&line-doubleY',
}
```

可通过 [图表类型](/rocket-chart-gallery/docs/chart-type) 页面查看支持类型

---

### Option <anchor id="appendix-Option"/>

```typescript
interface Option extends EChartOption {
  customerColor?: { [key: string]: string };
  table?: TableProps;
}
```

- `EChartOption`:图表的配置，具体见[echart 配置项手册](https://www.echartsjs.com/zh/option.html)
- `table`: 表格相关配置 [链接](https://ali-react-table.js.org/?path=/docs/%E5%9F%BA%E7%A1%80%E8%A1%A8%E6%A0%BC-%E6%96%87%E6%A1%A3--page)
- `customerColor`:根据数据名指定图形颜色，见 [example](/rocket-chart-gallery/example/play#other-customizeSingleColor)

```javascript
{
  customerColor: {
    shareCount: '#ccc';
  }
}
```

---

### DatasetParams <anchor id="appendix-DatasetParams"/>

图表配置参数，调整图表展示效果  
配置参数分为`通用功能`和`类型图表`两类  
`通用功能参数`：以平铺格式传入  
`类型图表参数`：单个图表类型的情况下支撑平铺或类型名对象的方式传入，组合图表类型的情况下需要以类型名对象的方式传入

```js
// 1.单个图表,以 line-regression 类型为例
// 1.1平铺格式
{
  type:"line-regression",
  datasetParams:{
    $legend: {
      placement: 'right',
    }, //通用参数
    regressionFormula:false,//line-regression 显示公式
    regressionOrder:2, //line-regression 多项式阶数
  }
}
// or
// 1.2对象格式
{
  type:"line-regression",
  datasetParams:{
    $legend: {
      placement: 'right',
    }, //通用参数
    regression:{
      regressionFormula:false,//line-regression 显示公式
      regressionOrder:2, //line-regression 多项式阶数
    }
  }
}
// 2.组合图表,以 line-label&line-regression 类型为例
{
  type:"line-label&line-regression",
  datasetParams:{
    $legend: {
      placement: 'right',
    }, //通用参数
    label:{
      showAllLabel:true //line-label 是否显示所有标签
    },
    regression:{
      regressionFormula:false,//line-regression 显示公式
      regressionOrder:2, //line-regression 多项式阶数
    }
  }
}
```

参考：[通用功能配置列表](/rocket-chart-gallery/docs/common) 、[类型图表配置列表](/rocket-chart-gallery/docs/chart-type)

---

### Data <anchor id="appendix-Data"/>

图表渲染数据,包含描述数据的`target`字段，以及数据源`source`  
`target`：定义维度信息，第一行应用于类目，其他项应用于数据项  
`target.key`：可选，数据唯一标识
`target.name`：数据的名称

`source`：原始数据

支持格式：

```js
// 1.source为二维表
data = {
  target: [{ key: 'date', name: '日期' }, { key: 'shareCount', name: '分享次数' }],
  source: [['2019-09-08', '2019-09-07', '2019-09-06'], [6236, 5595, 5257]],
};
// 2.source为对象数组，需要target中需要key
data = {
  target: [{ key: 'date', name: '日期' }, { key: 'shareCount', name: '分享次数' }],
  source: [
    { date: '2019-09-08', shareCount: 6236 },
    { date: '2019-09-07', shareCount: 5595 },
    { date: '2019-09-06', shareCount: 5257 },
  ],
};
// 3.source为对象
data = {
  target: [],
  source: {
    nodes: [{ name: '浏览', value: 1 }, { name: '点击', value: 2 }, { name: '点击2', value: 3 }],
    links: [
      { source: '浏览', target: '点击', value: 236 },
      { source: '浏览', target: '点击2', value: 6000 },
    ],
  },
};
```

---

### Formatters <anchor id="appendix-Formatters"/>

可选,数据格式化参数，对`Data`中指定进行格式化

```javascript
//通过 Data.target 中的key指定对应数据处理函数
{
  分享次数: value => value + 1;
}
```

### CustomComponent <anchor id="appendix-CustomComponent" />

用户组件
支持类型为 `ReactElement` | `VueInstance` | `HTMLElement` | `string`
