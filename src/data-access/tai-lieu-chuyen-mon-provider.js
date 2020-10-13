import { client } from '@utils/client-utils';
import strings from '@strings';
import { combineUrlParams } from '@utils/common';
export default {
  search(params = {}) {
    const {
      page,
      promulgateLevelSearch,
      nameSearch,
      pageSize,
    } = params;
    // let url = strings.api.professionalDocument;
    // url += `?page=${page || 0}`;
    // if (promulgateLevelSearch) {
    //   url += '&capBanHanh=' + promulgateLevelSearch;
    // }
    // if (nameSearch) {
    //   url += '&ten=' + nameSearch;
    // }
    let url = combineUrlParams(strings.api.professionalDocument, {
      page: page || 0,
      size: pageSize || 1000,
      capBanHanh: promulgateLevelSearch,
      ten: nameSearch,
    });
    return new Promise((resolve, reject) => {
      client
        .get(url, {})
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getById(id) {
    let url = combineUrlParams(
      strings.api.professionalDocument + `/${id}`,
      {},
    );
    return new Promise((resolve, reject) => {
      client
        .get(url, {})
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
