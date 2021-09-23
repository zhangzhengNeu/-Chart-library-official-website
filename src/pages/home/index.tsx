import * as React from 'react';
import { Button, Row, Col } from 'antd';
import { router } from 'umi';
import logoUnicorn from '../../assets/home/unicorn_logo.png';
import logoAPM from '../../assets/home/logo_apm.png';
import logoMagic from '../../assets/home/logo_magic.png';
import logoXql from '../../assets/home/logo_xql.png';
import logoDroplet from '../../assets/home/logo_droplet.png';
import './index.less';

const galleries = [
  {
    img: logoUnicorn,
    title: 'UNICORN',
    url: 'http://cms.9nali.com/xunicorn',
  },
  {
    img: logoAPM,
    title: 'APM',
    url: 'http://cms.9nali.com/mermaid-apm-glass/',
  },
  {
    img: logoMagic,
    title: '魔镜',
    url: 'http://cms.9nali.com/magic-mirror',
  },
  {
    img: logoXql,
    title: 'XQL',
    url: 'http://xql.9nali.com/index',
  },
  {
    img: logoDroplet,
    title: '机器学习平台',
    url: 'http://ops.ximalaya.com/droplet/offline',
  },
  {
    img: null,
    title: '标注后台',
    url: '#',
  },
];

const lineList = [
  {
    title: 'DAG 流程图',
    url: 'http://static2.test.ximalaya.com/yx/diagram/last/web/index.html',
  },
  {
    title: 'RocketPipeline 图表魔方',
    url: 'http://static2.test.ximalaya.com/yx/cube/last/dist/index.html',
  },
  {
    title: 'meerkat 中后台统一框架',
    url: 'http://test.ximalaya.com/meerkat-docs/#/',
  },
  // { title: 'dance UI组件库', url: 'http://192.168.88.33:3001/prop' },
];

const exampleList = [1, 2, 3, 4, 5, '6.gif', 7, 8, 9];

const Companies = () => (
  <div className="supporter">
    <h1 className="supporter-title">感谢信赖</h1>
    <Row gutter={8} className="supporter-gallery">
      {galleries.map(({ img, title, url }) => {
        return (
          <Col span={6} key={title + url}>
            <a className="product" href={url} target="_blank">
              <img src={img} alt={title} style={{ height: '100%' }} />
            </a>
          </Col>
        );
      })}
    </Row>
  </div>
);

export default function() {
  return (
    <div className="home-container">
      <div className="banner">
        <h1 className="banner-title">Rocket Chart 可视化组件库</h1>
        <p className="banner-description">
          {/*<span><img src="http://s1.xmcdn.com/yx/ximalaya-web-static/last/dist/images/logo_a8388cb.png" width="100" /></span>*/}
          面向中后台，开箱即用、配置简单、类型组合
        </p>
        <p className="banner-description">内置丰富的图表展示场景</p>
        <div className="banner-buttons">
          <Button
            onClick={() => router.push('/example')}
            type="primary"
            size="large"
            data-ubt-click="27004"
            data-ubt-params={JSON.stringify({
              currPage: 'home',
            })}
            style={{
              marginRight: 30,
              width: 120,
              borderRadius: 4,
            }}
          >
            图表示例
          </Button>
          <Button
            onClick={() => router.push('/docs')}
            size="large"
            data-ubt-click="27012"
            data-ubt-params={JSON.stringify({
              currPage: 'home',
            })}
            style={{
              width: 120,
              // boxShadow: '0px 2px 4px 0px rgba(104,130,255,1)',
              borderRadius: 4,
              // border: '1px solid rgba(104,130,255,1)',
              color: '#6882FF',
            }}
          >
            开始使用
          </Button>
        </div>
      </div>
      <div className="cont-box">
        <h2>精选示例</h2>
        <Row gutter={24}>
          {exampleList.map(item => {
            return (
              <Col span={8} key={item}>
                <div className="example-item">
                  <img
                    src={require(`@assets/home/example${
                      typeof item === 'number' ? item + '.jpeg' : item
                    }`)}
                    alt={item + ''}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <Companies />
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
