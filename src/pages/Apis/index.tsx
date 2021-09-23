import React, { useState, useEffect } from 'react';
import Markdown from '@components/Markdown';

export default () => {
  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    import('./api.md').then(res => {
      fetch(res.default)
        .then(res => res.text())
        .then(text => {
          setMarkdown(text);
        });
    });
  }, []);

  return <Markdown source={markdown} className="api-content" />;
};
