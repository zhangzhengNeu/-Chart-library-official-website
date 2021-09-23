import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import './index.less';
import { SearchOutlined } from '@ant-design/icons';

export default function() {
  const inputText = useRef(null);
  const [display, setDisplay] = useState(false);
  const [dataSet, setDataSet] = useState([{ namespace: '', title: '', content: '', href: '' }]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/rocket-chart-gallery/api/search', {
          params: {
            keyword: inputValue,
          },
        });
        setDataSet(result.data);
      } catch (error) {
        console.log('请求出错了', error);
      }
    };
    if (inputValue.trim() !== '') {
      fetchData();
    }
  }, [inputValue]);

  const displayStates = () => {
    const value = (inputText as any).current.value;
    setInputValue(value);
    if (value.trim() !== '') {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  return (
    <div className="search-container" onBlur={() => setTimeout(() => setDisplay(false), 120)}>
      <div className="searchBox">
        <input
          type="search"
          placeholder="在rocket中搜索"
          ref={inputText}
          onChange={() => displayStates()}
          data-ubt-click="27014"
          data-ubt-params={JSON.stringify({ currPage: location.pathname })}
        ></input>
        <SearchOutlined
          className="icon-search"
          onClick={() => {
            setDisplay(!display);
          }}
        />
      </div>

      <div className="dropMenu" style={{ display: display === true ? 'block' : 'none' }}>
        <div className="dropMenu-top">Documentation</div>
        {dataSet.map((item, key) => {
          const titleContent = `${item.title}`;
          const matchContent = `${item.content}`;
          const keyword = inputValue;
          const index = matchContent.indexOf(keyword);
          const matchContent2 = `...${matchContent.substring(
            index - 15,
            matchContent.length,
          )}`; /*匹配到字符串的前面的字符串 */

          let highlightInTitle = titleContent.replaceAll(
            keyword,
            `<span class = 'input-match-title' >${keyword}</span>`,
          );

          let highlightInContent = matchContent2.replaceAll(
            keyword,
            `<span class = 'input-match-content' >${keyword}</span>`,
          );

          return (
            <a href={item.href} key={key} className="dropMenu-data">
              <div className="dropMenu-data-path">
                {`${item.href}`.indexOf('apis') > -1 ? 'API文档' : '使用文档'}
              </div>
              <div className="dropMenu-data-right">
                <div
                  className="dropMenu-data-right-title"
                  dangerouslySetInnerHTML={{ __html: highlightInTitle }}
                ></div>
                <div
                  className="dropMenu-data-right-content"
                  dangerouslySetInnerHTML={{ __html: highlightInContent }}
                ></div>
              </div>
               
            </a>
          );
        })}
      </div>
    </div>
  );
}
