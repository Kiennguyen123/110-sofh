import loaiBenhProvider from '@data-access/loai-benh-provider';
import maBenhProvider from '@data-access/mabenh-provider';

export default {
  state: {
    listDeciaseCode: [],
    listMaBenh: [],
    totalElements: null,
    searchName: '',
  },

  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
    updateListDeciaseCode(state, payload) {
      return {
        ...state,
        listDeciaseCode: [
          ...state.listDeciaseCode,
          ...payload.listDeciaseCode,
        ],
        totalElements: payload.totalElements,
      };
    },
  },

  effects: (dispatch) => ({
    onSearch: async (payload) => {
      let res = await loaiBenhProvider.search(payload);
      let { code, message, data: listDeciaseCode, totalElements } =
        res || {};
      if (code === 0) {
        dispatch.lookupDeciaseCode.updateData({
          listDeciaseCode,
          totalElements,
        });
      } else {
        throw new Error(message);
      }
    },
    onLoadMore: async (payload) => {
      let res = await loaiBenhProvider.search(payload);
      let { code, message, data: listDeciaseCode, totalElements } =
        res || {};
      if (code === 0) {
        dispatch.lookupDeciaseCode.updateListDeciaseCode({
          listDeciaseCode,
          totalElements,
        });
      } else {
        throw new Error(message);
      }
    },
    getListMaBenh: async (payload) => {
      let res = await maBenhProvider.search(payload);
      let { code, message, data } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }
      dispatch.lookupDeciaseCode.updateData({
        listMaBenh: data,
      });
    },
  }),
};
