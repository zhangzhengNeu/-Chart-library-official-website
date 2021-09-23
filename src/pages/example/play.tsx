import React, { useState, useEffect } from 'react';
import { withRouter } from 'umi';
import { connect } from 'dva';
import { Tooltip, Select, Spin, Modal, Radio } from 'antd';
import { PlayCircleOutlined, VerticalAlignBottomOutlined,MobileOutlined, DesktopOutlined } from '@ant-design/icons';
import { debounce} from 'lodash';

import rocketChart from '@xmly/rocket-chart';
import wordcloud from '@xmly/rocket-chart-wordcloud';
rocketChart.registerType && rocketChart.registerType(wordcloud);

// 编辑器及语言及主题
import AceEditor from 'react-ace';
import 'brace/theme/github';
import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';

// @ts-ignore
import beautify from 'js-beautify';

import './play.less';

const { Option } = Select;

// type 数据项定义
interface ITypeItem {
  id: string;
  name: string;
  content?: ITypeItem[];
  [index: string]: any;
}

// 示例代码导出 string
interface IModule {
  default: string;
}

// 编辑器参数值定义
interface IEditorParams {
  editorVal: string;
  setEditorVal: React.Dispatch<React.SetStateAction<string>>;
}

// @ts-ignore
// 实例全局化，方便执行代码时调用
window.rocketChart = rocketChart;
window.React = React;

// 是否可更改图表容器的标志
let resizeLineIsDown = false;

// 存在以下情况，需要重定向
function checkRouter(str: string, chartDemoMap: any) {
  const type = { type: 'line', subType: 'basic' };
  str = str.replace('#', '');

  // 无参数
  if (!str) {
    return type;
  }

  const res = str.split('-');
  const currentTypeItem = chartDemoMap[res[0]];
  // 类型在大类中
  if (currentTypeItem) {
    type.type = res[0];
    const subTypeItem = currentTypeItem.find((item: ITypeItem) => item.id === res[1]);
    // 在小类中
    if (subTypeItem) {
      type.subType = res[1];
    } else {
      type.subType = currentTypeItem[0].id;
    }
  }
  return type;
}

// 示例展示区
const CardList = ({ type, subType, listData }: any) => {
  // type 变换后，重新判断
  useEffect(() => {
    document.getElementById(`${type}-${subType}`)?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  }, [type,subType]);
  return (
    <div className="cards-wrap">
      <div className="cards" id="cards">
        {listData.map((item: any) => {
          const id = `${type}-${item.id}`;
          const className = 'card ' + (subType === item.id && 'current');
          return (
            <Tooltip key={id} placement="bottom" title={item.name}>
              <a id={id} key={id} href={'#' + id} className={className}  
                type="button"
                data-ubt-click="26969"
                data-ubt-params={JSON.stringify({ chartType: id, currPage: 'example/play' })}>
                <img
                  src={require(`@assets/imgs/example/${type}/${item.icon || item.id + '.jpeg'}`)}
                  alt={item.name}
                />
              </a>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

// 编辑器
const Editor = ({ editorVal, setEditorVal }: IEditorParams) => {
  const editorChange = debounce((text: string) => {
    setEditorVal(text);
  }, 700);

  return (
    <AceEditor
      mode="javascript"
      theme="github"
      onChange={editorChange}
      name="editor"
      fontSize={12}
      style={{ width: '100%', height: '100%' }}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      value={editorVal}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

// 示例演示区，包含图表和编辑器
const PlayGround = ({ editorVal, setEditorVal }: IEditorParams) => {
  // 处理代码与示例演示区域宽度变化
  const resizeLineMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    resizeLineIsDown = true;
  };
  const [device, setdevice] = useState('pc');
  useEffect(() => {
    const setSplitPosition = (scale: number) => {
      // 更改图表容器 width
      const t = 100 * Math.min(0.9, Math.max(0.1, scale));
      (document.querySelector('.chart') as HTMLElement)!.style.width = t + '%';

      // 图表实例 resize
      const chartInstance = rocketChart.getInstanceByDom(
        document.querySelector('#container') as HTMLDivElement,
      );
      chartInstance && chartInstance.resize();
    };

    const windowMousemove = (e: MouseEvent) => {
      resizeLineIsDown && setSplitPosition(e.clientX / window.innerWidth);
    };
    const windowMouseup = (e: Event) => {
      resizeLineIsDown = false;
    };
    window.addEventListener('mousemove', windowMousemove);
    window.addEventListener('mouseup', windowMouseup);

    return () => {
      window.removeEventListener('mousemove', windowMousemove);
      window.addEventListener('mouseup', windowMouseup);
    };
  });

  const exeCode = () => {
    // 销毁图表实例，重新渲染图表
    const chartInstance = rocketChart.getInstanceByDom(
      document.querySelector('#container') as HTMLDivElement,
    );
    chartInstance && chartInstance.dispose();
    // 执行代码
    try {
      const reg = /(import.+from.+\;)/g;
      if (!editorVal.includes("import rocketChart from '@xmly/rocket-chart'")) {
        return;
      }
      if (device == 'mobile') {
        if (editorVal.includes('rocketChart.init(options);')) {
          if (editorVal.includes('var options = {')) {
            eval(
              editorVal
                .replace(reg, '')
                .replace('var options = {', "var options = {device : 'mobile',"),
            );
          } else if (editorVal.includes('const options = {')) {
            eval(
              editorVal
                .replace(reg, '')
                .replace('const options = {', "const options = {device : 'mobile',"),
            );
          }
        }
      }

      // 不用eval的方案，用 script，存在问题，代码报错，会影响页面显示
      // let scriptEl:HTMLScriptElement | null;
      // scriptEl = document.querySelector('#chart_script');
      // if (!scriptEl) {
      //   scriptEl = document.createElement('script');
      //   scriptEl.id = 'chart_script';
      //   scriptEl.innerHTML = editorVal.replace(reg, '');
      //   document.body.insertAdjacentElement('beforeend', scriptEl)
      // } else {
      //   scriptEl.innerHTML = editorVal.replace(reg, '');
      // }

      eval(editorVal.replace(reg, ''));
    } catch (error) {
      console.error(error, 'exe code error');
    }
  };

  // 执行代码，渲染图表
  useEffect(() => {
    exeCode();
  }, [editorVal, device]);

  // 下载图片
  const downloadImage = () => {
    Modal.confirm({
      width: 900,
      icon: '',
      content: (
        <div className="chartImage-wrap">
          {/* 首页图片尺寸 600 * 450 */}
          <div id="chartImage" style={{ width: 800, height: 450, padding: 12 }} />
        </div>
      ),
      okText: '下载（尺寸 800*450)',
      onOk() {
        const chartInstance = rocketChart.getInstanceByDom(
          document.querySelector('#chartImage') as HTMLDivElement,
        );
        chartInstance && chartInstance.getDataURL();
      },
      cancelText: '取消',
    });

    requestAnimationFrame(() => {
      const reg = /(import.+from.+\;)/g;
      try {
        eval(editorVal.replace(reg, '').replace('#container', '#chartImage'));
      } catch (error) {
        console.log('无图片下载');
      }
    });
  };

  return (
    <div className="play-ground">
      <div className="chart">
        <div id="container" className={device == 'mobile' ? 'style-mobile' : 'style-pc'}></div>
      </div>
      <div className="resize-line" onMouseDown={resizeLineMouseDown}></div>
      <div className="editor">
        <div className="toolbar">
          <Radio.Group defaultValue="pc">
            <Tooltip title="切换至电脑视图">
              <Radio.Button
                value="pc"
                className="radio-button"
                onClick={() => {
                  setdevice('pc');
                }}
              >
                <DesktopOutlined />
              </Radio.Button>
            </Tooltip>

            <Tooltip title="切换至移动端视图">
              <Radio.Button
                value="mo"
                className="radio-button"
                onClick={() => {
                  setdevice('mobile');
                }}
              >
                <MobileOutlined />
              </Radio.Button>
            </Tooltip>
          </Radio.Group>
          <div className="common-button">
            {editorVal && (
              <Tooltip title="下载图片">
                <VerticalAlignBottomOutlined onClick={() => downloadImage()} />
              </Tooltip>
            )}
            {editorVal && (
              <Tooltip title="执行代码">
                <PlayCircleOutlined onClick={() => exeCode()} />
              </Tooltip>
            )}
          </div>
        </div>

        <div className="code">
          <Editor editorVal={editorVal} setEditorVal={setEditorVal} />
        </div>
      </div>
    </div>
  );
};

// main 入口
function Index(props: any) {
  const { location, chartDemoMenuList, chartDemoMap, chartDemoCode } = props;

  if (!Object.keys(chartDemoMap).length) {
    return '';
  }

  const { type, subType } = checkRouter(location.hash, chartDemoMap);
  const typeInfo = chartDemoMenuList.find(i => i.id === type) || {};

  // 切换类型，更改 hash
  const typeChange = (val: string) => {
    const subType = chartDemoMap[val] && chartDemoMap[val][0] && chartDemoMap[val][0].id;
    window.location.hash = `#${val}-${subType || 'basic'}`;
  };

  return (
    <div className="play-grounds-wrap">
      <div className="header">
        <h1 className="title">
          演示 - <span>{typeInfo.name}</span>
        </h1>
        <label>
          选择类型：
          <Select defaultValue={typeInfo.id} style={{ width: 120 }} onChange={typeChange}>
            {chartDemoMenuList.map((item: ITypeItem) => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </label>
      </div>

      <CardList type={type} subType={subType} listData={chartDemoMap[type] || []} />
      <PlayGroundWrap
        dispatch={props.dispatch}
        type={type}
        subType={subType}
        chartDemoCode={chartDemoCode}
      />
    </div>
  );
}

const PlayGroundWrap = (props: any) => {
  const { type, subType, chartDemoCode } = props;
  const [editorVal, setEditorVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // 获取 示例 代码
  useEffect(() => {
    setIsLoading(true);
    props.dispatch({ type: 'chartType/getChartDemo', payload: { type, subType } });
    setIsLoading(false);
  }, [type, subType, props]);

  // 获取 示例 代码
  useEffect(() => {
    setEditorVal(
      chartDemoCode?.status === 'error'
        ? chartDemoCode.msg
        : beautify(chartDemoCode, { indent_size: 2, space_in_empty_paren: true }),
    );
  }, [chartDemoCode]);

  return (
    <>
      {isLoading && <Spin tip="Loading..." className="loading" />}
      {!isLoading && <PlayGround editorVal={editorVal} setEditorVal={setEditorVal} />}
    </>
  );
};

export default connect(model => ({ ...model.chartType }))(withRouter(Index));
