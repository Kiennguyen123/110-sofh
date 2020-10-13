import { client } from '@utils/client-utils';
import strings from '@strings';
import { combineUrlParams } from '@utils/common';

export default {
  search(params) {
    const { page, pageSize, active, searchName, loaiBenhId, ma } =
      params || {};

    let url = combineUrlParams(strings.api.mabenh, {
      page: page || 0,
      size: pageSize || 1000,
      timKiem: searchName,
      loaiBenhId,
      active: active || 'true',
      sort: ma || 'ma',
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
