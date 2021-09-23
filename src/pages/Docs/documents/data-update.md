# 更新和异步数据显示

---

## 异步数据显示

---

[入门示例](/rocket-chart-gallery/docs/quick-start)中的数据是在初始化时直接填入的，但是很多时候可能数据需要异步加载后再填入。

所有数据的更新都通过 setOption 实现，你只需要将获取的最新数据，通过 setOption 填入数据和配置项就行。

```js
import React, { useEffect, useRef } from 'react';
import RocketChart from '@xmly/rocket-chart';

function App(props) {
  const chartDom = useRef();
  const chart = useRef();

  useEffect(() => {
    // 初始化rocket实例
    const rocketChart = RocketChart.init({
      dom: chartDom.current,
      type: 'line-basic',
    });
    chart.current = rocketChart;
  }, []);

  // 数据源改变时，更新图表数据
  useEffect(() => {
    if (chart.current) {
      chart.current.setOption({ data: props.data });
    }
  }, [props.data]);

  return <div ref={chartDom} style={{ height: 500, width: 600 }}></div>;
}

export default App;
```

## 更新

---

通过 setOption 填入数据。
