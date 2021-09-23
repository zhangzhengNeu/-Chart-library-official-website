import React, { useState, useEffect } from 'react';
import Markdown from '@components/Markdown';
import './index.less';

const Version = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('./version.md').then(res => {
      fetch(res.default)
        .then(res => res.text())
        .then(text => setMarkdown(text));
    });
  }, []);

  return <Markdown className="version-content" source={markdown} navbarMode="hash" />;
};

export default Version;
