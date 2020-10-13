import React, { memo } from 'react';
import { formatFloatPoint } from '@utils/common';

function Supplies(props) {
  const { listVatTu } = props;

  const renderListVatTu = () => {
    return listVatTu.map((item) => {
      const { id, ten, soLuong, donVi } = item || {};
      return (
        <tr key={id}>
          <td>
            <p>{ten}</p>
          </td>
          <td style={{ textAlign: 'center' }}>
            <p className="quantity">{formatFloatPoint(soLuong)}</p>
          </td>
          <td style={{ textAlign: 'center' }}>{donVi}</td>
        </tr>
      );
    });
  };

  return (
    <div className="content-service">
      <div className="function">
        <table className="t01">
          <thead>
            <tr>
              <th
                style={{
                  width: '60%',
                  textAlign: 'center',
                }}
              >
                Tên vật tư
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
          <tbody>{renderListVatTu()}</tbody>
        </table>
      </div>
    </div>
  );
}

export const MemoizedSupplies = memo(Supplies);
export default Supplies;
