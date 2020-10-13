import { client } from '@utils/client-utils';
import strings from '@strings';
import qs from 'qs';

export default {
  login(redirectURI, code) {
    let object = {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectURI,
      client_id: 'isofh',
      client_secret: 'isofh',
    };

    return new Promise((resolve, reject) => {
      client
        .post(strings.api.user.login, qs.stringify(object), {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
