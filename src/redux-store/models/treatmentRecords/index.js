import toDieuTriProvider from '@data-access/to-dieu-tri-provider';
import dichVuKhamProvider from '@data-access/dich-vu-kham-provider';
import nbDvXetNghiemProvider from '@data-access/nb-dv-xet-nghiem-provider';
import nbDvCdhaPtttProvider from '@data-access/nb-dv-cdha-pttt-provider';
import nbDvKhoProvider from '@data-access/nb-dv-kho-provider';
import nbHoSoChamSocProvider from '@data-access/hs-cham-soc-provider';
import nbHoiChanProvider from '@data-access/nb-hoi-chan-provider';

export default {
  state: {
    listToDieuTri: [],
    toDieuTriLasted: {},
    inforKhamBenh: [],
    inforKhamChuyenKhoa: [],
    listDvXetNghiem: [],
    listCdha: [],
    listPttt: [],
    listThuoc: [],
    listVatTu: [],
    listHsChamSoc: [],
    listHoiChan: [],
  },
  reducers: {
    updateData(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch) => ({
    async searchToDieuTri(params) {
      const res = await toDieuTriProvider.search(params);
      const { code, message, data: listToDieuTri } = res || {};

      if (code !== 0) {
        throw new Error(message);
      }

      return listToDieuTri;
    },

    async getToDieuTriById(id) {
      const res = await toDieuTriProvider.getById(id);
      const { code, message, data: toDieuTriLasted } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }
      dispatch.treatmentRecords.updateData({ toDieuTriLasted });
    },

    async getDichVuKham(params) {
      const res = await dichVuKhamProvider.search(params);
      const { khamChuyenKhoa } = params;
      const { code, message, data } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }
      if (khamChuyenKhoa) {
        dispatch.treatmentRecords.updateData({
          inforKhamChuyenKhoa: data,
        });
      } else {
        dispatch.treatmentRecords.updateData({
          inforKhamBenh: data,
        });
      }
    },

    async getListDvXetNghiem(params) {
      const res = await nbDvXetNghiemProvider.search(params);
      const { code, message, data: listDvXetNghiem } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }

      dispatch.treatmentRecords.updateData({ listDvXetNghiem });
    },

    async getListCdhaPttt(params) {
      const res = await nbDvCdhaPtttProvider.search(params);
      const { code, message, data: listCdhaPttt } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }

      return listCdhaPttt;
    },

    async getListDvKho(params) {
      const res = await nbDvKhoProvider.search(params);
      const { code, message, data: listDvKho } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }

      return listDvKho;
    },

    async getListHoSoChamSoc(params) {
      const res = await nbHoSoChamSocProvider.search(params);
      const { code, message, data: listHsChamSoc } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }

      return listHsChamSoc;
    },

    async getListHoiChan(params) {
      const res = await nbHoiChanProvider.search(params);
      const { code, message, data: listHoiChan } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }

      return listHoiChan;
    },
  }),
};
