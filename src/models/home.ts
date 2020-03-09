import { fetchGet } from "../utils/request";

export default {
  namespace: 'home',
  state: {
    banners: [], hot: [], products: [], invest: {}
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *newhome({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield call(fetchGet, '/home/newhome')
      console.log(res)
      yield put({ type: 'save', payload: res.data });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
