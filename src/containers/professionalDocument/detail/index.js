import React, { useEffect } from 'react';
import { MainDetail } from '../styled';
import { connect } from 'react-redux';
import { message } from 'antd';
function index(props) {
  const id = props.match.params.id;
  const {
    cacBuocTienHanh,
    quyetDinh,
    dinhNghia,
    chiDinh,
    chongChiDinh,
    nguoiThucHien,
    nguoiBenh,
    phuongTien,
    hoSoBenhAn,
    ten,
  } = props;
  useEffect(() => {
    props.loadDetail(id).catch((error) => {
      message.error(error.message.toString());
    });
  }, []);
  return (
    <MainDetail>
      <div className="content">
        <div className="title-page">Tài liệu chuyên môn</div>
        {props.id ? (
          <>
            <div className="document-name">{ten}</div>
            <div className="main-content">
              <div className="name-content">Quyết định</div>
              <div className="detail-content">{quyetDinh}</div>
              <div className="name-content">Định nghĩa</div>
              <div className="detail-content">{dinhNghia}</div>
              <div className="name-content">Chỉ định</div>
              <div className="detail-content">{chiDinh}</div>
              <div className="name-content">Chống chỉ định</div>
              <div className="detail-content">{chongChiDinh}</div>
              <div className="name-content">Người thực hiện</div>
              <div className="detail-content">{nguoiThucHien}</div>
              <div className="name-content">Người bệnh</div>
              <div className="detail-content">{nguoiBenh}</div>
              <div className="name-content">Phương tiện</div>
              <div className="detail-content">{phuongTien}</div>
              <div className="name-content">Hồ sơ bệnh án</div>
              <div className="detail-content">{hoSoBenhAn}</div>
              <div className="name-content">Các bước tiến hành</div>
              <div className="detail-content">{cacBuocTienHanh}</div>
            </div>
          </>
        ) : null}
      </div>
    </MainDetail>
  );
}
const mapStateToProps = (state) => {
  const {
    professionalDocument: {
      id,
      cacBuocTienHanh,
      quyetDinh,
      dinhNghia,
      chiDinh,
      chongChiDinh,
      nguoiThucHien,
      nguoiBenh,
      phuongTien,
      hoSoBenhAn,
      ten,
    },
  } = state;
  return {
    id,
    cacBuocTienHanh,
    quyetDinh,
    dinhNghia,
    chiDinh,
    chongChiDinh,
    nguoiThucHien,
    nguoiBenh,
    phuongTien,
    hoSoBenhAn,
    ten,
  };
};
const mapDispatchToProps = ({
  professionalDocument: { loadDetail },
}) => ({ loadDetail });
export default connect(mapStateToProps, mapDispatchToProps)(index);
