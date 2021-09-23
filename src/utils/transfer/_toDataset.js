/**
 *
 * input
 * {
  target: [{key: "date", name: "日期"}, {key: "shareCount", name: "分享次数"}],
  source: [
	["2019-09-08", "2019-09-07", "2019-09-06"],
	[6236, 5595, 5257]
  ]
}
 *
 * output
 * {
  source: [
	["日期", "2019-09-08", "2019-09-07", "2019-09-06"],
	["分享次数", 6236, 5595, 5257]
  ]
}
 *
 */
export default (data) => {
  const { target, source } = data;
  const row_0 = target.map(item => item.name);
  const output = source.map((row, i) => [].concat(row_0[i], row));
  return {
    source: output
  };
}
