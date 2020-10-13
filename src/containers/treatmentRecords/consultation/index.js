import React, { memo } from 'react';

function Consultation(props) {
  const { listHoiChan } = props;

  const renderListHoiChan = () => {
    return listHoiChan.map((item) => {
      const {
        id,
        capHoiChan,
        chuTri,
        thuKy,
        tinhTrangHienTai,
        ketLuan,
        ykienBacSi,
        huongDieuTri,
        tomTatDienBien,
        chanDoanSauHoiChan,
      } = item;
      return (
        <div className="info" key={id}>
          {capHoiChan && (
            <>
              <p>Cấp hội chẩn</p>
              <span className="white-space">{capHoiChan}</span>
            </>
          )}
          {chuTri && (
            <>
              <p>Chủ trì</p>
              <span>{chuTri}</span>
            </>
          )}
          {thuKy && (
            <>
              <p>Thư ký</p>
              <span>{thuKy}</span>
            </>
          )}
          {huongDieuTri && (
            <>
              <p>Hướng điều trị</p>
              <span className="white-space">{huongDieuTri}</span>
            </>
          )}
          {tomTatDienBien && (
            <>
              <p>
                Tóm tắt quá trình diễn biến, quá trình điều trị và
                chăm sóc{' '}
              </p>
              <span className="white-space">{tomTatDienBien}</span>
            </>
          )}
          {tinhTrangHienTai && (
            <>
              <p>Tình trạng hiện tại</p>
              <span className="white-space">{tinhTrangHienTai}</span>
            </>
          )}
          {chanDoanSauHoiChan && (
            <>
              <p>Chẩn đoán sau hội chẩn</p>
              <span className="white-space">
                {chanDoanSauHoiChan}
              </span>
            </>
          )}
          {ketLuan && (
            <>
              <p>Kết luận</p>
              <span className="white-space">{ketLuan}</span>
            </>
          )}
          {ykienBacSi && (
            <>
              <p>Ý kiến bác sĩ</p>
              <span className="white-space">{ykienBacSi}</span>
            </>
          )}
        </div>
      );
    });
  };

  return <div className="content-service">{renderListHoiChan()}</div>;
}

export const MemoizedConsultation = memo(Consultation);
export default Consultation;
