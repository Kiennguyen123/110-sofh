import { client } from '@utils/client-utils';
import { combineUrlParams } from '@utils/common';
import strings from '@strings';

export default {
  search(params = {}) {
    const { tuNgay, denNgay } = params;
    let url = combineUrlParams(strings.api.nbVaoVien, {
      tuNgay,
      denNgay
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
};
