# rocket-chart-gallery

## 添加图表类型

### 添加类型

1. 建立 `/src/pages/chart/{大类}/{小类}/...` 路径；

    如： 添加 `line-basic` 类型，则建立 `/src/pages/chart/line/basic/` 目录
    
2. 在上述目录下新建：

    - `demo.js`：图表示例文件，格式参考已有类型文件；
    - `doc.md`：图表类型使用文档，格式参考已有类型文件；
    <br />

3. 文件 `/src/pages/chart/{大类}/index.js` 是否存在：

    - 若不存在：执行下一步（第4步）
    - 若存在：跳到第5步；
    <br />

4. 在文件 `/src/pages/chart/index.tsx` 中的 `chartTypeList` 数组中增加大类信息：  
ps：信息在数组中的位置会影响文档及示例顺序

    ```jsx
    {
        id: 'line',
        name: '折线图',
        icon: <LineChartOutlined />,
    }
    ```

    - **id**：大类名，必填
    - **name**：类型中文名，必填
    - **icon**：大类导航图，必填
    <br />

5. 在文件 `/src/pages/chart/{大类}/index.js` 中，添加小类信息：  
    ps：信息在数组中的位置会影响文档及示例顺序

    ```js
    export default [
        ...
        {
        id: 'basic',
        name: '基本型',
        // icon: 'basic.jpeg', // 默认 {id}.jpeg， 可省略
        }
        ...
    ]
    ```

    - **id**：小类名，必填
    - **name**：类型中文名，必填
    - **icon**：类型demo图，默认为{id}.jpeg，用于在example页显示，此图片的存放路径为 `/src/assets/imgs/example/{大类}/{icon}`
  


## 更新文档索引

在本地执行：

```
npm run build-search-index
```

最新文档索引内容更新到 `/.search-index.json` 文件
