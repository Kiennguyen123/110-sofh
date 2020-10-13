import tuDienProvider from '@data-access/tu-dien-provider';

export default {
  state: {
    listData: [],
    searchName: "Fluoroscopy",
    tiengViet: "x quang tăng sáng truyền hình\n● Chiếu x-quang\n● Máy x-quang tăng sáng truyền hình",
    giaiThich: "",
    totalElements: null,
  },

  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
    updateListData(state, payload) {
      return {
        ...state,
        listData: [...state.listData, ...payload.listData],
        totalElements: payload.totalElements,
      };
    },

  },

  effects: (dispatch) => ({

    onSearch: async (payload, state) => {
      let { page, size, searchName } = payload;
      let res = await tuDienProvider.search(page, size, searchName);
      let { code, message, data, totalElements } = res || {};

      if (code !== 0) {
        throw new Error(message);
      }

      const listSpecializedDictionary = data.filter(
        (item) => item.active === true,
      );

      dispatch.specializedDictionary.updateData({
        listData: listSpecializedDictionary,
        totalElements,
        code
      });
    },

    clickItemOnSearch: async (payload, state) => {
      let { id } = payload;
      let res = await tuDienProvider.getById(id);
      let { code, message, data } = res || {};
      if (code === 0) {
        dispatch.specializedDictionary.updateData({
          listData: [],
          searchName: data.tiengAnh,
          tiengViet: data.tiengViet,
          giaiThich: data.giaiThich,
        })
      } else {
        throw new Error(message);
      }
    },
    onLoadMore: async (params) => {
      let { page, size, searchName } = params;
      const res = await tuDienProvider.search(page, size, searchName);
      const { code, message, data: listData, totalElements } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }
      dispatch.specializedDictionary.updateListData({
        listData,
        totalElements,
      });
    },
  }),
};