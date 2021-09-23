import { PureComponent } from 'react';
import { message } from 'antd';
import brace from 'brace';
import AceEditor from 'react-ace';
import beautify from 'js-beautify';

import 'brace/mode/javascript';
import 'brace/theme/github';

export default class Editor extends PureComponent {
  static defaultProps = {
    changeData: () => {},
  };

  state = {
    text: '',
    originalText: '',
    init: false,
  };

  componentDidUpdate() {
    const { init } = this.state;
    if (!init) {
      const text = JSON.stringify(this.props.data);
      this.setState({ text, originalText: text, init: true });
    }
  }

  reset = () => {
    const text = this.state.originalText;
    this.setState({ text });
    this.props.changeData(text);
  };

  render() {
    const { data, changeData, type } = this.props;
    const handleBlur = e => {
      const { value } = e.target;
      const res = value
        .replace(/｛/g, '{')
        .replace(/｝/g, '}')
        .replace(/：/g, ':')
        .replace(/，/g, ',')
        .replace(/；/g, ';')
        .replace(/“/g, '"')
        .replace(/”/g, '"')
        .replace(/‘/g, '"')
        .replace(/’/g, '"');
      let data = {};
      try {
        /*eslint-disable-next-line*/
        data = eval(`(${res})`);
      } catch (err) {
        console.log('err', err);
        message.error('数据格式有误！');
      }
    };

    const tab = e => {
      const { keyCode, target } = e;
      const { selectionStart, selectionEnd, value } = target;
      if (keyCode === 9) {
        const postion = selectionStart + 4;
        target.value = `${value.substr(0, selectionStart)}    ${value.substr(selectionEnd)}`;
        target.selectionStart = postion;
        target.selectionEnd = postion;
        e.preventDefault();
      }
    };

    return (
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={text => {
          this.setState({ text });
        }}
        onBlur={() => {
          changeData(this.state.text);
        }}
        name="editor"
        fontSize={12}
        style={{ width: '85%' }}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={beautify(this.state.text, { indent_size: 2, space_in_empty_paren: true })}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    );
  }
}
