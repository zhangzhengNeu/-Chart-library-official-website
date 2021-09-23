import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import SiderMenu from './Menu';
import './Sider.less';

interface  Props {
  menus: any[],
  theme?: 'light' | 'dark',
  collapsed?: boolean,
  pathname?: string,
}

class Sider extends PureComponent<Props> {
    render() {
        const {
            menus,
            theme,
            collapsed,
            pathname,
          } = this.props;
        return (
            <Layout.Sider
                width={256}
                theme={theme}
                breakpoint="lg"
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={50}
                className='sider'>
                <SiderMenu
                    className='menus'
                    menus={menus}
                    theme={theme}
                    collapsed={collapsed}
                    pathname={pathname}
                    mode="inline"
                    />
                </Layout.Sider>
        )
    }
}

export default Sider;
