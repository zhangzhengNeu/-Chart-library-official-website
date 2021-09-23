import React, { useState, Fragment } from 'react';
import * as ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import Navbar from '../Navbar';
import NavbarLayout from '../NavbarLayout';

interface NavbarType {
  id: string;
  level: string;
  name: string;
}

export default ({
  className,
  source,
  imgUriMap,
  showNavbar = true,
  scrollWrap,
  navbarAlign = 'left',
  navbarMode = 'menu',
  ...others
}: any) => {
  let titleList: Array<NavbarType> = [];

  let [activeItem, setActiveItem] = useState('');

  const Head = ({ level, children }: any) => {
    const [titleDom, ...otherDom] = children || [];
    const title = titleDom?.props?.value || '';
    let id = title;

    otherDom?.some((item: any, index: number) => {
      const arr = item.props?.value?.match(/^\<anchor id=\"([\S]+)\"/) || [];
      if (arr[1]) {
        id = arr[1];
        otherDom.splice(index, 1);
        return true;
      }
      return false;
    });

    id = id.trim();

    titleList.push({ level, id, name: title });

    return React.createElement(
      `h${level}`,
      { id },
      <Fragment>
        <a href={`#${id}`}>{title}</a>
        {otherDom}
      </Fragment>,
    );
  };

  return (
    <NavbarLayout
      className={`markdown-wrap ${className}`}
      scrollWrap={scrollWrap}
      source={source}
      navbarAlign={navbarAlign}
      navbarMode={navbarMode}
      onChangeItem={setActiveItem}
    >
      <ReactMarkdown
        className="markdown"
        source={source}
        escapeHtml={false}
        transformImageUri={(src: string): string => imgUriMap[src]}
        renderers={{
          heading: Head,
          code: CodeBlock,
        }}
        {...others}
      />
      {showNavbar && <Navbar listData={titleList} activeItem={activeItem} />}
    </NavbarLayout>
  );
};
