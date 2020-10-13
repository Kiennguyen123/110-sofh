// import auth from './auth';
import khoaProvider from '@data-access/khoa-provider';
import phongProvider from '@data-access/phong-provider';
import nguoiBenhProvider from '@data-access/nguoi-benh-provider';

export default {
  state: {
    idDepartmentSelected: (() => {
      let auth = localStorage.getItem('auth');
      auth = JSON.parse(auth);
      return (
        (auth &&
          auth.departmentIds &&
          auth.departmentIds.length > 0 &&
          auth.departmentIds[0]) ||
        undefined
      );
    })(),
    idRoomSelected: (() => {
      let auth = localStorage.getItem('auth');
      auth = JSON.parse(auth);
      return (
        (auth &&
          auth.roomIds &&
          auth.roomIds.length > 0 &&
          auth.roomIds[0]) ||
        undefined
      );
    })(),
    departmentIds: (() => {
      let auth = localStorage.getItem('auth');
      auth = JSON.parse(auth);
      return (auth && auth.departmentIds) || [];
    })(),
    roomIds: (() => {
      let auth = localStorage.getItem('auth');
      auth = JSON.parse(auth);
      return (auth && auth.roomIds) || [];
    })(),
    isAdmin: (() => {
      let auth = localStorage.getItem('auth');
      auth = JSON.parse(auth);
      return (
        (auth &&
          auth.authorities &&
          auth.authorities.length > 0 &&
          auth.authorities.includes('ROLE_IsofhUser')) ||
        false
      );
    })(),
    listKhoa: [],
    listPhong: [],
    listNb: [],
    totalElements: 0,
  },
  reducers: {
    updateData(state, payload) {
      return { ...state, ...payload };
    },
    updateListNb(state, payload) {
      return {
        ...state,
        listNb: [...state.listNb, ...payload.listNb],
        totalElements: payload.totalElements,
      };
    },
  },
  effects: (dispatch) => ({
    async getListKhoa(params, state) {
      const {
        listPatients: { departmentIds, isAdmin },
      } = state;
      const res = await khoaProvider.search(params);
      const { code, message, data } = res || {};

      if (code !== 0) {
        throw new Error(message);
      }

      const listKhoaActive = data.filter(
        (khoa) =>
          khoa.active === true &&
          (isAdmin || departmentIds.includes(khoa.id)),
      );

      dispatch.listPatients.updateData({ listKhoa: listKhoaActive });
    },
    async getListPhong(params, state) {
      const {
        listPatients: { roomIds, isAdmin },
      } = state;
      let listPhongActive = [];
      const res = await phongProvider.search(params);
      const { code, message, data } = res || {};

      if (code !== 0) {
        throw new Error(message);
      }

      if (isAdmin || roomIds.length === 0) {
        listPhongActive = data.filter((phong) => {
          return phong.active === true;
        });
      } else {
        listPhongActive = data.filter((phong) => {
          return (
            phong.active === true &&
            (isAdmin || roomIds.includes(phong.id))
          );
        });
      }

      dispatch.listPatients.updateData({
        listPhong: listPhongActive,
      });
    },
    async getListNb(params) {
      const res = await nguoiBenhProvider.search(params);
      const { code, message, data, totalElements } = res || {};

      if (code !== 0) {
        throw new Error(message);
      }

      const listNbActive = data.filter((nb) => nb.active === true);

      dispatch.listPatients.updateData({
        listNb: listNbActive,
        totalElements,
      });
    },
    onLoadMore: async (params) => {
      const res = await nguoiBenhProvider.search(params);
      const { code, message, data: listNb, totalElements } =
        res || {};
      if (code === 0) {
        dispatch.listPatients.updateListNb({
          listNb,
          totalElements,
        });
      } else {
        throw new Error(message);
      }
    },
  }),
};
