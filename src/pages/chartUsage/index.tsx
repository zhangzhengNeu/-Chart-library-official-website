import React, { useState, useEffect } from 'react';
import * as ReactMarkdown from 'react-markdown';
import Navbar from '../../components/Navbar';
import NavbarLayout from '../../components/NavbarLayout';
import './index.less';
import { usageList } from '../chart';
import { buttonList } from '../chart';
import showUse from '@assets/showUse.png';

export default () => {
  let [activeItem, setActiveItem] = useState('useage');
  const [src, setSrc] = useState('');
  const [type, setType] = useState('bar');
  const [subType, setSubType] = useState('percent');
  const [markdown, setMarkdown] = useState('');

  async function getPages({ type, subType }: { type: string; subType: string }) {
    const demo = await import(`@assets/imgs/example/${type}/${subType}.jpeg`);
    return demo;
  }
  async function getMarkDown({ type, subType }: { type: string; subType: string }) {
    const md = await import(`./charts/${type}/${subType}.md`).then(res => {
      fetch(res.default)
        .then(res => res.text())
        .then(text => setMarkdown(text));
    });
  }

  useEffect(() => {
    getPages({ type: type, subType: subType }).then(res => {
      if (type && subType) {
        setSrc(res.default);
      }
    });
    getMarkDown({ type: type, subType: subType });
  }, [type, subType]);

  const hover = (id: string) => {
    setType(id && id.split('-')[0]);
    setSubType(id && id.split('-')[1]);
  };

  function TypeGallery({ data = [] }) {
    return (
      <div className="buttons">
        <ul className="list">
          {data.map((i: any) => (
            <li key={i.id}>
              <a
                href={`/rocket-chart-gallery/example/play#${i.id}`}
                onMouseOver={() => {
                  hover(`${i.id}`);
                }}
                target="_blank"
                type="button"
                data-ubt-click="26969"
                data-ubt-params={JSON.stringify({ chartType: i.id, currPage: 'chartUsage' })}
              >
                <h4>{i.name}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function List({ listData = [], buttonList = {} }) {
    return (
      <div className="content">
        {listData.map(({ id, name }: any) => {
          return (
            <div key={id} className="list-item">
              <h3 id={id}>{name}</h3>
              <TypeGallery data={buttonList[id] || []} />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <NavbarLayout
      className={`usage-content`}
      scrollWrap={'.navbar-layout'}
      onChangeItem={setActiveItem}
      navbarAlign={'left'}
      navbarMode={'menu'}
      titleNames=".mindMap h2, .mindMap h3, .content h3"
    >
      <Navbar listData={usageList} activeItem={activeItem} />

      <div className="mindMap">
        <h2 id="useage">图表用法</h2>
        <p>
          此页旨在帮您选择最合适的图表类型。<br></br>
          首先您要考虑想展示数据的什么特征，之后可通过思维导图大致选择您需要的图表类型，最后在图表预览区选择您喜欢的图表吧~
        </p>
        <h3 id="whatToShow">你想展示什么</h3>
        <img src={showUse}></img>
      </div>
      <div className="wrapper">
        <List listData={usageList.slice(2)} buttonList={buttonList} />
        <div className="showBox">
          <img src={src} alt="" />
          <div className="md">
            <ReactMarkdown className="markdown" source={markdown} />
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};
