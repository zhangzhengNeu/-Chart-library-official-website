import * as React from 'react';
import { Row, Col } from 'antd';
import logo from '../../assets/rocket_logo.gif';
import img_banner from '../../assets/homeImg/rocketIndex_banner.png';
import img_shigong from '../../assets/homeImg/rocketindex_shigong.png';
import img_github from '../../assets/homeImg/github.png';
import rocket_chart from '../../assets/homeImg/rocket_chart.png';
import pipeline from '../../assets/homeImg/pipeline.png';
import maker from '../../assets/homeImg/maker.png';
import pigeon from '../../assets/homeImg/pigeon.png';
import Search from '../Search/index';
import './index.less';

const showItems = [
  {
    img: rocket_chart,
    title: 'RocketChart 图表库',
    left: '/rocket-chart-gallery/example',
    right: '/rocket-chart-gallery/docs/quick-start',
    words: '面向中后台，开箱即用、配置简单、类型组合、内置丰富的图表展示场景',
  },
  {
    img: pipeline,
    title: 'RocketPipeline 图表魔方',
    left: 'http://static2.test.ximalaya.com/yx/cube/last/dist/index.html#/',
    right: 'http://static2.test.ximalaya.com/yx/cube/last/dist/index.html#/data',
    words: '快速制作图表工具',
  },
  {
    img: maker,
    title: 'RocketMaker 图表标注',
    left: 'http://static2.test.ximalaya.com/yx/marker/last/dist/index.html',
    right: 'http://static2.test.ximalaya.com/yx/marker/last/dist/index.html',
    words: '快速制作图表工具',
  },
  {
    img: pigeon,
    title: 'RocketMaker 图表报告服务',
    words: '快速制作图表工具',
  },
];

const lineList = [
  {
    title: 'DAG 流程图',
    url: 'http://static2.test.ximalaya.com/yx/diagram/last/web/index.html',
  },
  {
    title: 'meerkat 中后台统一框架',
    url: 'http://test.ximalaya.com/meerkat-docs/#/',
  },
];

export default function() {
  return (
    <div className="index-container">
      <header className="header">
        <img className="img_logo" src={logo} />
        <span className="header-title">Rocket</span>
        <Search />
        <a href="http://gitlab.ximalaya.com/rocket-f2e">
          <img className="img_github" src={img_github} />
        </a>
      </header>
      <div className="banner-wrapper">
        <img className="img_banner" src={img_banner}></img>
        <div className="banner">
          <h1 className="banner-title">Rocket 是一套可视化实践方案</h1>
          <p className="banner-description">我是很简的简介</p>
        </div>
        <div className="banner-wrapper-backColor"></div>
      </div>

      <div className="contBox">
        <h2>产品</h2>
        <Row gutter={80}>
          {showItems.map(({ img, title, words, left, right }) => {
            return (
              <Col span={8} key={title}>
                <div className="wrapper">
                  <div className="products-item">
                    <a href={left}>
                      <img src={img} alt={title} />
                    </a>
                    <div className="products-item-title">{title}</div>
                    <div className="products-item-p">{words}</div>
                    <div className="products-item-link">
                      <ul>
                        <li>
                          <span className="li-left">
                            <a href={left}>图表示例</a>
                          </span>
                        </li>
                        <li>
                          <a href={right} className="li-right">
                            快速开始
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <img className="img_shigong" src={img_shigong}></img>
      </div>
      <footer>
        <h6>其他产品</h6>
        <Row>
          {lineList.map(({ title, url }) => {
            return (
              <Col span={6} key={title}>
                <a href={url} className="link" target="_blank">
                  {title}
                </a>
              </Col>
            );
          })}
        </Row>
      </footer>
    </div>
  );
}
