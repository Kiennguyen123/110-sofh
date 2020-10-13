import React from 'react';
import { Row, Col, Button } from 'antd';
import { absoluteFileUrl } from '@utils/common';

function ListPatient(props) {
  const {
    nb: {
      id,
      anhDaiDien,
      tenNb,
      tuoi,
      gioiTinh,
      loaiDoiTuong,
      tinhThanhPho,
      maHoSo,
      maBenhAn,
    },
    onClick,
    onViewProfile,
  } = props;

  const handleViewProfile = (id, e) => {
    e.stopPropagation();
    onViewProfile(id);
  };

  return (
    <div className="list-patient" onClick={onClick}>
      <div className="avatar">
        <img
          src={
            anhDaiDien
              ? absoluteFileUrl(anhDaiDien)
              : require('@images/DSNB/icon-avt.svg')
          }
          alt=""
        />
      </div>
      <div className="info-patient">
        <p className="name">
          {tenNb} ({gioiTinh && (gioiTinh === 1 ? 'Nam' : 'Nữ')} -{' '}
          {tuoi}T)
        </p>
        {loaiDoiTuong && (
          <span className="hospital">{loaiDoiTuong.ten}</span>
        )}
        <Row>
          <Col span={12}>
            <p className="city">{tinhThanhPho && tinhThanhPho.ten}</p>
            <p className="MHS">{maHoSo && `MHS: ${maHoSo}`}</p>
            <p className="MBA">{maBenhAn && `MBA: ${maBenhAn}`}</p>
          </Col>
          <Col span={12}>
            <Button
              className="pdf"
              onClick={(e) => handleViewProfile(id, e)}
            >
              <img src={require('@images/DSNB/ic-pdf.svg')} alt="" />
              Bệnh án
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ListPatient;
