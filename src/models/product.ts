import { fetchGet } from "../utils/request";

export default {
  namespace: 'product',
  state: {
    selling: { list: [] },
    productItem: {}
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *list({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield call(fetchGet, '/product/list')
      console.log(res)
      yield put({ type: 'save', payload: res.data });
    },
    *detail({ payload }, { call, put }) {  // eslint-disable-line
      let url = `/product/detail?pid=${payload}`
      const res = yield call(fetchGet, url)
      console.log(payload)
      yield put({ type: 'saveDetail', payload: res.data });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    saveDetail(state, action) {
      return {
        ...state, productItem: action.payload
      }
    }
  },

};
