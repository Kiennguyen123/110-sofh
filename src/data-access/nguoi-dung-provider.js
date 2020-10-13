import strings from '@strings';
import { client } from '@utils/client-utils';
import { combineUrlParams } from '@utils/common';

export default {
  search({ page, pageSize, searchName, khoaId }) {
    let url = combineUrlParams(strings.api.nguoiDung, {
      page: page || 0,
      size: pageSize || 1000,
      ten: searchName,
      khoaId,
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
