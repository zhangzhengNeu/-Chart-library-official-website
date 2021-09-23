import React from 'react';
import './index.less';
import { Button } from 'antd';
import Link from 'umi/link';

export default function() {
  return (
    <div className="exception">
      <h2>404</h2>
      <div className="desc">
        抱歉，访问的页面不存在! &emsp;<Link to="/">返回首页</Link>
      </div>
    </div>
  );
}
