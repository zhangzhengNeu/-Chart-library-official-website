import React, { useEffect, useState } from 'react';
import { withRouter } from 'umi';
import { connect } from 'dva';
import Navbar from '../../components/Navbar';
import NavbarLayout from '../../components/NavbarLayout';
import './index.less';

function TypeGallery({ data = [], parent = '' }) {
  return (
    <ul className="list">
      {data.map((i: any) => (
        <li key={i.id}>
          <a
            href={`/rocket-chart-gallery/example/play#${parent}-${i.id}`}
            target="_black"
            type="button"
            data-ubt-click="26969"
            data-ubt-params={JSON.stringify({
              chartType: parent + '-' + i.id,
              currPage: 'example',
            })}
          >
            <h4>{i.name || i.title}</h4>
            <div className="img">
              <img
                src={require(`@assets/imgs/example/${parent}/${i.icon || i.id + '.jpeg'}`)}
                alt={i.name}
              />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

function List({ listData = [], chartDemoMap = {} }) {
  return (
    <div className="content">
      {listData.map(({ id, name }: any) => {
        return (
          <div key={id} className="list-item">
            <h3 id={id}>
              {name} <span>{id}</span>
            </h3>
            <TypeGallery data={chartDemoMap[id] || []} parent={id} />
          </div>
        );
      })}
    </div>
  );
}

// main
function Index(props: any) {
  const { chartDemoMenuList, chartDemoMap } = props;
  let [activeItem, setActiveItem] = useState('line');
  return (
    <NavbarLayout className="example-wrap" titleNames="h3" onChangeItem={setActiveItem}>
      <Navbar listData={chartDemoMenuList} activeItem={activeItem} suffixKey="id" />
      <List listData={chartDemoMenuList} chartDemoMap={chartDemoMap} />
    </NavbarLayout>
  );
}

export default connect(({ chartType = {} }) => ({ ...chartType }))(withRouter(Index));
