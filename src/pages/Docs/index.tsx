import React, { useEffect, useState } from 'react';
import { withRouter } from 'umi';
import Markdown from '@components/Markdown';
import { getTypeDoc } from '../chart/util';
import Apis from '../Apis/index';

const reg = /(?<=\/docs\/)\D*/;
const imgUriMap = {
  support_qrcode: require('@assets/support_qrcode.png'),
  quick_start_demo: require('@assets/quick_start_demo.png'),
};

const Doc = ({ location: { pathname } }) => {
  const [markdown, setMarkdown] = useState('');
  // console.log(location.pathname)
  // if (pathname === '/docs/apis') {
  //   return <Apis />;
  // }

  useEffect(() => {
    const docName = reg.exec(pathname)[0];

    if (docName === 'chart-type') {
      getTypeDoc().then(res => setMarkdown(res));
    } else {
      import(`./documents/${docName}.md`).then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(text => setMarkdown(text));
      });
    }
  }, [pathname]);

  return (
    <Markdown
      source={markdown}
      escapeHtml={false}
      navbarMode="hash"
      navbarAlign="right"
      scrollWrap=".basic-layout-content-right"
      transformImageUri={(src: string): string => imgUriMap[src]}
    />
  );
};

export default withRouter(Doc);
