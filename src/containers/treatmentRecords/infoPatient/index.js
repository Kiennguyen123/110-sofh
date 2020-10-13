import React, { memo } from 'react';
import { absoluteFileUrl } from '@utils/common';

function InfoPatient(props) {
  const {
    nbInfo: {
      anhDaiDien,
      loaiDoiTuong,
      tenNb,
      gioiTinh,
      tuoi,
      tinhThanhPho,
      maBenhAn,
      maHoSo,
    } = {},
  } = props;
  return (
    <div className="list-patient">
      <div className="avatar">
        <img
          src={
            anhDaiDien
              ? absoluteFileUrl(anhDaiDien)
              : require('@images/HSDT/avt.png')
          }
          alt=""
        />
      </div>
      <div className="info-patient">
        <p className="name">
          {tenNb} (
          {(gioiTinh === 1 && 'Nam') || (gioiTinh === 2 && 'Nữ')}{' '}
          {tuoi && `- ${tuoi}T`})
        </p>
        <span className="hospital">
          {loaiDoiTuong && loaiDoiTuong.ten}
        </span>
        <div className="address">
          <p className="city">{tinhThanhPho && tinhThanhPho.ten}</p>
          <p className="MHS">{maHoSo && `MHS: ${maHoSo}`}</p>
          <p className="MBA">{maBenhAn && `MBA: ${maBenhAn}`}</p>
        </div>
      </div>
    </div>
  );
}

export const MemoizedInfoPatient = memo(InfoPatient);
export default InfoPatient;
