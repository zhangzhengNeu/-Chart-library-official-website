import React, { PureComponent, Fragment } from 'react';
import { Menu } from 'antd';
import withRouter from 'umi/withRouter'; //eslint-disable-line
import { Link } from 'umi';
import RocketIcon from '@components/RocketIcon';

interface Props {
  menus: any[];
  theme?: 'light' | 'dark';
  collapsed?: boolean;
  mode?: 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline';
  pathname?: string;
}

class SiderMenu extends PureComponent<Props> {
  _generateMenus = (data: any[]) =>
    data.map(({ id, icon, name }) => {
      return (
        <Menu.Item key={id}>
          <Fragment>
            <Link to={id}>
              {icon && <RocketIcon type={icon} />}
              {name}
            </Link>
          </Fragment>
        </Menu.Item>
      );
    });

  render() {
    const { theme, menus, collapsed, mode, pathname } = this.props;
    const menuTree = menus?.reduce((total, menu) => {
      if (menu.path) {
        return [
          ...total,
          {
            id: menu.path,
            icon: menu.icon,
            name: menu.title,
          },
        ];
      }
      return total;
    }, []);
    return (
      <Menu
        mode={mode}
        theme={theme}
        selectedKeys={menus ? [pathname] : []}
        collapsed={collapsed.toString()}
        defaultSelectedKeys={menuTree[0].id}
      >
        {this._generateMenus(menuTree)}
      </Menu>
    );
  }
}

export default withRouter(SiderMenu);
