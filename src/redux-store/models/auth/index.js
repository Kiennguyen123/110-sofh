import userProvider from '@data-access/user-provider';
import { message } from 'antd';
import { HOST_AUTH } from '@utils/client-utils';
// import listPatients from '../listPatients';

export default {
  state: {
    auth: (() => {
      try {
        let auth = localStorage.getItem('auth');
        auth = JSON.parse(auth);
        return auth;
      } catch (error) {}
      return null;
    })(),
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    onLogin: ({ code, redirectURI }) => {
      return new Promise((resolve, reject) => {
        if (!redirectURI || !code) {
          message.error('Thông tin đăng nhập không chính xác');
          reject();
          return;
        }
        userProvider
          .login(redirectURI, code)
          .then((res) => {
            switch (res.status) {
              case 200:
                const authen = res.data;
                const idDepartmentSelected =
                  authen &&
                  authen.departmentIds &&
                  authen.departmentIds[0];
                const idRoomSelected =
                  authen && authen.roomIds && authen.roomIds[0];
                const isAdmin =
                  (authen &&
                    authen.authorities &&
                    authen.authorities.length > 0 &&
                    authen.authorities.includes('ROLE_IsofhUser')) ||
                  false;
                const departmentIds = authen && authen.departmentIds;
                const roomIds = authen && authen.roomIds;

                localStorage.setItem('auth', JSON.stringify(authen));
                dispatch.auth.updateData({
                  auth: authen,
                });
                dispatch.listPatients.updateData({
                  idDepartmentSelected,
                  idRoomSelected,
                  isAdmin,
                  departmentIds,
                  roomIds,
                });
                message.success('Đăng nhập thành công');
                resolve(res.data);
                return;
              default:
                message.error(
                  res.message || 'Đăng nhập không thành công',
                );
                reject('Đăng nhập không thành công');
            }
          })
          .catch((e) => {
            reject(e);
            console.log(e);
          });
      });
    },
    onLogout: () => {
      localStorage.removeItem('auth');
      dispatch.auth.updateData({
        auth: null,
      });
      let redirect = `${HOST_AUTH}/auth/logout?redirect_uri=${window.location.origin}`;
      window.location.href = redirect;
    },
  }),
};
