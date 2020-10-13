import listDoctorProvider from '@data-access/nguoi-dung-provider';
import khoaProvider from '@data-access/khoa-provider';

export default {
  state: {
    idDepartment: null,
    listDoctors: [],
    listKhoa: [],
    totalElements: null,
    searchName: '',
  },

  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
    updateListDoctor(state, payload) {
      return {
        ...state,
        listDoctors: [...state.listDoctors, ...payload.listDoctors],
        totalElements: payload.totalElements,
      };
    },
  },

  effects: (dispatch) => ({
    onSearch: async (payload) => {
      let res = await listDoctorProvider.search(payload);
      let { code, message, data, totalElements } = res || {};

      if (code !== 0) {
        throw new Error(message);
      }

      const listDoctorsActive = data.filter(
        (item) => item.active === true,
      );
      dispatch.listDoctors.updateData({
        listDoctors: listDoctorsActive,
        totalElements,
      });
    },
    async getListKhoa(params) {
      const res = await khoaProvider.search(params);
      const { code, message, data } = res || {};

      if (code !== 0) {
        throw new Error(message);
      }

      const listKhoaActive = data.filter(
        (khoa) => khoa.active === true,
      );

      dispatch.listDoctors.updateData({ listKhoa: listKhoaActive });
    },
    onLoadMore: async (params) => {
      const res = await listDoctorProvider.search(params);
      const { code, message, data: listDoctors, totalElements } =
        res || {};

      if (code !== 0) {
        throw new Error(message);
      }
      dispatch.listDoctors.updateListDoctor({
        listDoctors,
        totalElements,
      });
    },
  }),
};
