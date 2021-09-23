import React from 'react';
import { Layout } from 'antd';
// @ts-ignore
import { matchRoutes } from 'react-router-config';
import Redirect from 'umi/redirect';
import BasicHeader from './BasicLayout/BasicHeader/BasicHeader';
import BasicContent from './BasicLayout/BasicContent/BasicContent';
import RocketIndex from '../pages/RocketIndex/index';
import './index.less';

const { Header } = Layout;

interface routes {
  path: string;
  title?: string;
}

interface route {
  routes: routes[];
}

export interface BasicLayoutProps extends React.Props<any> {
  history?: History;
  location?: any;
  dispatch?: any;
  token?: string;
  locationPathname?: string;
  localSessionToken?: string;
  route?: route;
}

// 基础页面框架布局
class BasicLayout extends React.PureComponent<BasicLayoutProps, {}> {
  constructor(props: Readonly<BasicLayoutProps>) {
    super(props);
    this.state = {};
  }

  _renderHeader = () => {
    const {
      route: { routes },
      location: { pathname },
    } = this.props;
    if (pathname == '/') {
      return null;
    }
    return (
      <Header className="basic-layout-header">
        <BasicHeader routes={routes} pathname={pathname} />
      </Header>
    );
  };

  _renderContent = () => {
    const {
      children,
      route: { routes },
      location: { pathname },
    } = this.props;

    const match: any[] = matchRoutes(routes, pathname);
    if (!match.find(m => m.match.isExact)) {
      return <Redirect to="/404" />;
    }
    if (pathname == '/') {
      return <RocketIndex />;
    }
    return <BasicContent match={match} component={children} pathname={pathname} />;
  };

  render() {
    return (
      <div className="basic-layout">
        <Layout style={{ height: '100%' }}>
          {this._renderHeader()}
          {this._renderContent()}
        </Layout>
      </div>
    );
  }
}

export default BasicLayout;
