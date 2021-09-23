import memoize from 'lodash/memoize';

import _toDataset from './_toDataset';
import _toDataTable from './_toDataTable';
import _validator from './_validator';

const toDataset = memoize(_toDataset);
const toDataTable = memoize(_toDataTable);
const validator = memoize(_validator);

/**
 * 模拟数据进行取样
 * @param {object} object
 * @param {number} start 开始位置，默认从0开始,即第一个series数据，不包括xAxis data
 * @param {number} end 结束位置
 */
const toAppointDataSet = (object, start = 0, end = object[0].length - 1) => {
  if (end <= start) return;
  const cb = Object.keys(object).map(ele => object[ele].slice(0, 1).concat(object[ele].slice(start > 1 ? start : 1, end)));
  return {
    target: cb[0],
    source: cb[1],
  };
};

export {
  toDataset,
  toDataTable,
  validator,
  toAppointDataSet,
};
