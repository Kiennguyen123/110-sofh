import React from 'react';
import { formatFloatPoint, checkResultTest } from '@utils/common';

function OtherService(props) {
  const { service } = props;
  const {
    tenDichVu,
    ketQua,
    giaTriBinhThuong,
    donVi,
    nbDvXetNghiemChiSoChiTiet,
  } = service || {};

  return (
    <>
      <table className="t01">
        <thead>
          <tr>
            <th
              style={{
                width: '45%',
                textAlign: 'center',
              }}
            >
              Tên xét nghiệm
            </th>
            <th
              style={{
                width: '15%',
                textAlign: 'center',
              }}
            >
              KQ
            </th>
            <th
              style={{
                width: '20%',
                textAlign: 'center',
              }}
            >
              Giá trị BT
            </th>
            <th
              style={{
                width: '20%',
                textAlign: 'center',
              }}
            >
              Đơn vị
            </th>
          </tr>
        </thead>
        <tbody>
          {nbDvXetNghiemChiSoChiTiet.length > 0 ? (
            <>
              <tr>
                <td colSpan="4" style={{ fontWeight: 'bold' }}>
                  {tenDichVu}
                </td>
              </tr>
              {nbDvXetNghiemChiSoChiTiet.map((xn) => {
                const {
                  id,
                  tenChiSo,
                  ketQua,
                  giaTriBinhThuong,
                  donVi,
                } = xn || {};
                return (
                  <tr key={id}>
                    <td>{tenChiSo}</td>
                    <td
                      className={`result ${
                        checkResultTest(ketQua, giaTriBinhThuong)
                          ? 'bold-text'
                          : ''
                      }`}
                    >
                      {formatFloatPoint(ketQua, 2)}
                    </td>
                    <td
                      style={{
                        textAlign: 'center',
                        color: '#9393AA',
                      }}
                    >
                      {giaTriBinhThuong}
                    </td>
                    <td
                      style={{
                        textAlign: 'center',
                        color: '#9393AA',
                      }}
                    >
                      {donVi}
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <tr>
              <td>{tenDichVu}</td>
              <td
                className={`result ${
                  checkResultTest(ketQua, giaTriBinhThuong)
                    ? 'bold-text'
                    : ''
                }`}
              >
                {formatFloatPoint(ketQua, 2)}
              </td>
              <td style={{ textAlign: 'center', color: '#9393AA' }}>
                {giaTriBinhThuong}
              </td>
              <td style={{ textAlign: 'center', color: '#9393AA' }}>
                {donVi}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default OtherService;
