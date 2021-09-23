import React from 'react';
import { Link } from 'umi';
import './index.less';

interface MenuItem {
  id: string;
  name: string;
  level: any;
  icon: any;
  suffix: string;
}

export default (props: any) => {
  const {
    listData = [],
    activeItem,
    suffixKey = 'suffix',
    routeMode = 'hash',
    className = '',
  } = props;
  return (
    <div className={'navbar ' + className}>
      {listData &&
        listData.map(({ level = 0, id, name, icon, [suffixKey]: suffix }: MenuItem) => {
          const activeClassName = activeItem === id ? 'is-active' : '';
          return (
            <div key={id} className={`navbar-item navbar-${level} ${activeClassName}`}>
              {routeMode === 'history' ? (
                <Link to={id}>
                  {icon || ''}
                  {name}
                  {suffix ? <span className="navbar-item-suffix">{suffix}</span> : ''}
                </Link>
              ) : (
                <a href={`#${id}`}>
                  {icon || ''}
                  {name}
                  {suffix ? <span className="navbar-item-suffix">{suffix}</span> : ''}
                </a>
              )}
            </div>
          );
        })}
    </div>
  );
};
