import { chartDemoMenuList, demoMap, getChartDemo } from '../pages/chart/util';

export default {
  namespace: 'chartType',
  state: {
    loading: true,
    chartDemoMenuList: chartDemoMenuList,
    chartDemoMap: demoMap,
    chartDemoCode: '',
  },

  effects: {
    *checkLoading({ payload }, { put, select }) {
      const { key } = payload;
      const template = yield select(state => state.template);
      if (template[key]) return;
      yield put({
        type: 'setLoading',
        payload: { key },
      });
    },
    *getChartDemo({ payload }, { call, put }) {
      const resp = yield call(getChartDemo, payload);
      yield put({
        type: 'save',
        payload: { chartDemoCode: resp },
      });
    },
  },
  reducers: {
    setLoading(state, { payload = {} }) {
      return { ...state, [payload.key]: true };
    },
    cancelLoading(state, { payload = {} }) {
      return { ...state, [payload.key]: false };
    },
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    saveTypeMap(state, { payload }) {
      return { ...state, chartDemoMap: { ...state.chartDemoMap, ...payload } };
    },
  },
};
