import React, { useEffect } from 'react';
import { debounce } from 'lodash';
import CheckableTag from 'antd/lib/tag/CheckableTag';

export default function(props: any) {
  const {
    className = '',
    source,
    scrollWrap = '.navbar-layout',
    titleNames = 'h1,h2,h3,h4,h5,h6',
    navbarMode = 'menu', // menu | hash
    navbarAlign = 'left',
    onChangeItem = () => {},
    children,
  } = props;

  const selectItem = ({ scrollWrap }: any) => {
    const $scrollWrap = document.querySelector(scrollWrap);
    const $titleList = $scrollWrap?.querySelectorAll(titleNames);

    if (!$scrollWrap || !$titleList?.length) return;
    const titleList = Array.from($titleList).map((item: any) => ({
      id: item.id,
      top: item.offsetTop,
    }));
    // 滚动监听函数
    const onChange = debounce(() => {
      const offset = -40;
      const currentTop = window.parseInt($scrollWrap.scrollTop) - offset;
      // 找到集合中满足需求的项
      const item = titleList.reduce((prev, curr) =>
        curr.top >= currentTop && prev.top <= currentTop ? prev : curr,
      );
      item && onChangeItem(item.id);
    }, 60);
    $scrollWrap && $scrollWrap.addEventListener('scroll', onChange);

    return () => {
      $scrollWrap && $scrollWrap.removeEventListener('scroll', onChange);
    };
  };

  useEffect(() => {
    return selectItem({ scrollWrap });
  });

  useEffect(() => {
    const $scrollWrap = document.querySelector(scrollWrap);
    const hash = decodeURIComponent(window.location.hash);

    const timer = setTimeout(() => {
      const $anchor = hash && document.getElementById(hash.slice(1)); // 要定位锚点元素
      if (!$scrollWrap) return;

      $scrollWrap.scrollTo({
        top: $anchor?.offsetTop || 0.5,
        behavior: 'smooth',
      });
    }, 0); // 这个地方拍脑袋想的，没找到markdown渲染完的回调

    return () => clearTimeout(timer);
  }, [source]);
  return (
    <div
      className={`navbar-layout navbar-wrap-${navbarAlign} ${className} ${
        navbarMode === 'hash' ? 'hash-navbar-wrap' : ''
      }`}
      style={{ overflow: 'auto' }}
    >
      {children}
    </div>
  );
}
