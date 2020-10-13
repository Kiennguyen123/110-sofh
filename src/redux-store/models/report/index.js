import dischargedProvider from '@data-access/nb-ra-vien-provider';
import hospitalizeProvider from '@data-access/nb-vao-vien-provider';

export default {
  state: {
    tuNgay: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
    denNgay: new Date(),
  },

  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },

  effects: (dispatch) => ({
    async getDischarged(params) {
      const res = await dischargedProvider.search(params);
      const { code, message, data } = res || {};

      if (code !== 0) {
        throw new Error(message);
      }
      let dataCheck = data.filter(item => item.khoa !== "Khoa Khám bệnh")
      const listDischargedKhoa = dataCheck.map((item) => item.khoa);
      const listDischargedSoLuong = dataCheck.map((item) => item.soLuong);
      dispatch.report.updateData({
        listDischargedKhoa,
        listDischargedSoLuong,
      });
    },
    async getHospitalize(params) {
      const res = await hospitalizeProvider.search(params);
      const { code, message, data } = res || {};
      
      if (code !== 0) {
        throw new Error(message);
      }
      let dataCheck = data.filter(item => item.khoa !== "Khoa Khám bệnh")
      const listHospitalizeKhoa = dataCheck.map((item) => item.khoa);
      const listHospitalizeSoLuong = dataCheck.map((item) => item.soLuong);
      const listHospitalizeSoLuongCho = dataCheck.map(
        (item) => item.soLuongChoNhapVien,
      );
      dispatch.report.updateData({
        listHospitalizeKhoa,
        listHospitalizeSoLuong,
        listHospitalizeSoLuongCho,
      });
    },
  }),
};
