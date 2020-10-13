import strings from '@strings';
import { client } from '@utils/client-utils';

export default {
  search(page, size, searchName) {
    let url = strings.api.tuDien;
    url += `?page=${page || 0}&size=${size || 1000}`;
    if (searchName) url += "&tiengAnh=" + searchName;
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
    let url = strings.api.tuDien + "/" + id;
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
  }
};
