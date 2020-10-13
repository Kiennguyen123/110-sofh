import { client } from '@utils/client-utils';
import strings from '@strings';

export default {
  search(params) {
    const { page, nbDotDieuTriId, pageSize } = params || {};
    let url = strings.api.toDieuTri;
    url += `?page=${page || 0}&size=${pageSize || 1000}`;
    url += nbDotDieuTriId ? `&nbDotDieuTriId=${nbDotDieuTriId}` : '';

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
    let url = strings.api.toDieuTri;
    url += '/' + id;
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
