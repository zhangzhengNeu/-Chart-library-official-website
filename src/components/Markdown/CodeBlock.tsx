import React, { useEffect } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  jsx,
  javascript,
  tsx,
  typescript,
} from 'react-syntax-highlighter/dist/esm/languages/prism';

const CodeBlock = ({ value, language }) => {
  useEffect(() => {
    SyntaxHighlighter.registerLanguage('jsx', jsx);
    SyntaxHighlighter.registerLanguage('javascript', javascript);
    SyntaxHighlighter.registerLanguage('tsx', tsx);
    SyntaxHighlighter.registerLanguage('typescript', typescript);
  }, []);

  return (
    <SyntaxHighlighter className="code-block" language={language} style={style}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
