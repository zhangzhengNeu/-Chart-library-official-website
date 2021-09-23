import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from '@components/Navbar';
import './BasicContent.less';

interface Props {
  match?: any;
  component?: any;
  pathname?: string;
}

const { Content } = Layout;

const menus = (match: any) => {
  if (match.length > 1) {
    return match[0].route.routes
      .filter((r: any) => r.path || r.title)
      .map((r: any) => ({ id: r.path, name: r.title }));
  }
  return [];
};

class BasicContent extends Component<Props> {
  render() {
    const { match, component, pathname } = this.props;
    const className = 'p-' + pathname?.split('/')[1];
    return match.length > 1 ? (
      <Content className={'basic-layout-content ' + className}>
        <Navbar
          activeItem={pathname}
          listData={menus(match)}
          className="layout-menu"
          routeMode="history"
          idKey="path"
          nameKey="title"
        />
        <div className="basic-layout-content-right">{component}</div>
        {/* <Sider
          menus={match[0].route.routes}
          theme="light"
          collapsed={false}
          pathname={pathname}
        ></Sider> */}
        {/* <div className="hash-navbar"> */}
      </Content>
    ) : (
      <Content className={'basic-layout-content ' + className}>{component}</Content>
    );
  }
}

export default BasicContent;
