import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { withRouter, Link, router } from 'umi';
import './BasicHeader.less';
import logo from '@assets/rocket_logo.gif';
import _ from 'lodash';
import Search from '../../../pages/Search/index';

interface routes {
  path: string;
  title?: string;
  routes?: any;
}

interface Props {
  routes: routes[];
  location?: any;
  pathname?: string;
}

const headerRoutes: string[] = ['/docs', '/example', '/docs/apis', '/chart-usage', '/version'];

const mapStateToProps = ({ basicHeader = {} }) => ({ basicHeader });

@withRouter
@connect(mapStateToProps)
class BasicHeader extends Component<Props> {
  state = {
    isScrolled: false,
  };

  componentDidMount() {
    const homeEle = document.getElementsByClassName('p-home');
    if (!homeEle.length) {
      return;
    }
    homeEle[0].onscroll = e => {
      const func = _.throttle(e => {
        // console.log('throttle')
        this.setState({
          isScrolled: document.getElementsByClassName('p-home')[0].scrollTop > 64,
        });
      }, 25);
      func(e);
    };
  }

  _titleOnClick = () => {
    router.push('/home');
  };

  _renderHeaderLeft = () => {
    return (
      <div className="basic-header-left" onClick={this._titleOnClick}>
        <img src={logo} alt="ROCKET" style={{ width: 64, height: 64 }} />
        &nbsp;Rocket Chart&nbsp;&nbsp;
        <small style={{ fontWeight: 300, fontSize: 16 }}>v1.0</small>
      </div>
    );
  };

  _renderFrClassMenu = () => {
    const pathname = this.props.location.pathname;
    const hRoutes = this.props.routes.filter(({ path }) => headerRoutes.includes(path));
    const temp = hRoutes[0];
    hRoutes[0] = hRoutes[1];
    hRoutes[1] = hRoutes[2];
    hRoutes[2] = temp;

    const activePath =
      pathname === '/docs/apis'
        ? pathname
        : hRoutes.filter(({ path }) => pathname.indexOf(path) > -1)[0]?.path;

    const linkMenus = hRoutes.map(({ path, title }) => (
      <div className={activePath === path ? 'link active' : 'link'} key={path}>
        <Link to={path}   
         type="button"
         data-ubt-click="27013"
         data-ubt-params={
         JSON.stringify({categories: title,currPage: pathname})}>
         {title}
        </Link>
      </div>
    ));
    return <div className="basic-header-right-links">{linkMenus}</div>;
  };

  _renderHeaderRight = () => {
    return (
      <div className="basic-header-right">
        <Fragment>{this._renderFrClassMenu()}</Fragment>
      </div>
    );
  };

  render() {
    const { isScrolled } = this.state;
    const { pathname } = this.props;
    const className = 'p-' + pathname?.split('/')[1] + '-header';
    return (
      <div className={`basic-header ${isScrolled ? 'scroll' : ''} ${className}`}>
        {this._renderHeaderLeft()}
        <Search />
        {this._renderHeaderRight()}
      </div>
    );
  }
}
export default BasicHeader;
