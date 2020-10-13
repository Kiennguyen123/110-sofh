import React, { memo } from 'react';
import { formatFloatPoint } from '@utils/common';

function Medicine(props) {
  const { listThuoc } = props;

  const renderListThuoc = () => {
    return listThuoc.map((item) => {
      const { id, ten, cachDung, soLuong, donVi } = item || {};
      return (
        <tr key={id}>
          <td>
            <p className="name">{ten}</p>
            <p className="note">{cachDung}</p>
          </td>
          <td style={{ textAlign: 'center' }}>
            {formatFloatPoint(soLuong)}
          </td>
          <td style={{ textAlign: 'center' }}>{donVi}</td>
        </tr>
      );
    });
  };

  return (
    <div className="content-service">
      <div className="test function">
        <table className="t01">
          <thead>
            <tr>
              <th
                style={{
                  width: '60%',
                  textAlign: 'center',
                }}
              >
                Tên thuốc
              </th>
              <th
                style={{
                  width: '20%',
                  textAlign: 'center',
                }}
              >
                SL
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
          <tbody>{renderListThuoc()}</tbody>
        </table>
      </div>
    </div>
  );
}

export const MemoizedMedicine = memo(Medicine);
export default Medicine;
