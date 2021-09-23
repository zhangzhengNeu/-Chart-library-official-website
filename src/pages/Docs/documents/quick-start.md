# 快速开始

## 安装

---

通过 npm 安装

```
npm install @xmly/rocket-chart  --save
```

通过 yarn 安装

```
yarn add @xmly/rocket-chart
```

成功安装完成之后，即可使用 import 或 require 进行引用。

## 开始使用

---

现在就可以开始使用了。我们一起用 React 来画一个图表吧。

<br>
新建一个react项目或准备一个已有的react项目，这里使用create-react-app创建一个。

1. 改写 App 组件，返回一个 div 作为图表的挂载节点。
2. 按照格式定义数据源。
3. 初始化图表，传入 dom，挂载节点，type，图表类型，data，数据源。

```js
import React, { useEffect, useRef } from 'react';
import RocketChart from '@xmly/rocket-chart';
import './App.css';

const dataSource = {
  target: [
    { key: 'date', name: '日期' },
    { key: 'number', name: '启动次数' },
  ],
  source: [
    [
      '2020-03-25',
      '2020-03-26',
      '2020-03-27',
      '2020-03-28',
      '2020-03-29',
      '2020-03-30',
      '2020-03-31',
    ],
    [81, 68, 72, 72, 103, 77, 93],
  ],
};

function App() {
  const chartDom = useRef();

  useEffect(() => {
    RocketChart.init({
      dom: chartDom.current,
      type: 'line-basic',
      data: dataSource,
    });
  }, []);

  return <div ref={chartDom} style={{ height: 500, width: 600 }}></div>;
}

export default App;
```

这样就绘制好了！

![图表示例](quick_start_demo)

更多 **类型** 和 **配置** 请参考[图表示例](/rocket-chart-gallery/example)哦。
