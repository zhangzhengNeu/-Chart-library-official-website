import { toDataset, toDataTable, validator } from '../index';

describe('methods', () => {
  const data = {
    target: [{key: "date", name: "日期"}, {key: "shareCount", name: "分享次数"}],
    source: [
      ["2019-09-08", "2019-09-07", "2019-09-06"],
      [6236, 5595, 5257]
    ]
  };
  it('validator', () => {
    expect(validator(data)).toBe(true);
    expect(validator({
      target: [],
      source: []
    })).toBe(false);
    expect(validator({})).toBe(false);
  });
  it('toDataset', () => {
    expect(toDataset(data)).toEqual({
      source: [
        ["日期", "2019-09-08", "2019-09-07", "2019-09-06"],
        ["分享次数", 6236, 5595, 5257]
      ]
    });
  });
  it('toDataTable', () => {
    expect(toDataTable(data)).toEqual([
      {
        date: "2019-09-08",
        shareCount: 6236
      },
      {
        date: "2019-09-07",
        shareCount: 5595
      },
      {
        date: "2019-09-06",
        shareCount: 5257
      }
    ]);
  });
});
