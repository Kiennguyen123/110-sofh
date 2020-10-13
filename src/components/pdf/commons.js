import { client } from '@utils/client-utils';
export default {
  getPdf({ id }) {
    return new Promise((resolve, reject) => {
      // let url = clientUtils.serverApi;
      client
        .get(
          `/api/bac-si/v1/nb-dot-dieu-tri/${id}/benh-an-vao-vien`,
          {},
        )
        .then((s) => {
          resolve(s);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
