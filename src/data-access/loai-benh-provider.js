import { client } from '@utils/client-utils';
import strings from '@strings';
import { combineUrlParams } from '@utils/common';

export default {
  search(params) {
    const { page, active, searchName, pageSize, sort } = params || {};

    let url = combineUrlParams(strings.api.loaibenh, {
      page: page || 0,
      size: pageSize || 1000,
      timKiem: searchName,
      sort: sort || 'ma',
      active: active || 'true',
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
