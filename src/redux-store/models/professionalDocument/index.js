import professionalDocumentProvider from '@data-access/tai-lieu-chuyen-mon-provider';
// import { message } from 'antd';
export default {
  state: {
    listDocument: [],
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    async getListDocument(params, state) {
      let page = state.professionalDocument.page || 0;
      let promulgateLevelSearch =
        state.professionalDocument.promulgateLevelSearch;
      let nameSearch = state.professionalDocument.nameSearch;
      const res = await professionalDocumentProvider.search({
        page,
        promulgateLevelSearch,
        nameSearch,
      });
      const { code, message, data } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }
      dispatch.professionalDocument.updateData({
        listDocument: data,
      });
    },
    // onSearch: (payload, state) => {
    //   return new Promise((resolve, reject) => {
    //     let page = state.professionalDocument.page || 0;
    //     let promulgateLevel =
    //       state.professionalDocument.promulgateLevel;
    //     let ten = state.professionalDocument.ten;
    //     professionalDocumentProvider
    //       .search({
    //         page,
    //         promulgateLevel,
    //         ten,
    //       })
    //       .then((res) => {
    //         if (res && res.code == 0) {
    //           dispatch.professionalDocument.updateData(res);
    //           resolve(res);
    //           return;
    //         } else {
    //           message.error('Xảy ra lỗi. Vui lòng thử lại sau!');
    //           reject();
    //         }
    //       })
    //       .catch((e) => {
    //         message.error(
    //           e && e.message
    //             ? e.message
    //             : 'Xảy ra lỗi. Vui lòng thử lại sau!',
    //         );
    //         reject(e);
    //       });
    //   });
    // },
    // onLoadDetail: (id, state) => {
    //   return new Promise((resolve, reject) => {
    //     professionalDocumentProvider
    //       .getById(id)
    //       .then((res) => {
    //         let { code, message, data } = res || {};
    //         if (res && code == 0) {
    //           dispatch.professionalDocument.updateData(data);
    //           resolve(data);
    //           return;
    //         } else {
    //           message.error('Không tìm thấy kết quả phù hợp');
    //           reject();
    //         }
    //       })
    //       .catch((e) => {
    //         message.error(
    //           e && e.message
    //             ? e.message
    //             : 'Xảy ra lỗi. Vui lòng thử lại sau!',
    //         );
    //         reject(e);
    //       });
    //   });
    // },
    async loadDetail(id) {
      const res = await professionalDocumentProvider.getById(id);
      const { code, message, data } = res || {};
      if (code !== 0) {
        throw new Error(message);
      }
      dispatch.professionalDocument.updateData(data);
    },
  }),
};
