import { client } from '@utils/client-utils';
import strings from '@strings';
import { combineUrlParams } from '@utils/common';

export default {
  search(params = {}) {
    const { page, pageSize } = params;
    let url = combineUrlParams(strings.api.khoa, {
      page: page || 0,
      size: pageSize || 1000,
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
