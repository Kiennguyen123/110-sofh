import React, { memo } from 'react';

function Surgery(props) {
  const { listPttt } = props;

  const renderListPttt = () => {
    return listPttt.map((item) => {
      const {
        id,
        tenDichVu,
        cachThucPt,
        phuongPhapPt,
        chanDoanSauPtChiTiet,
        chanDoanSauPt,
        nhanXet,
        ketLuan,
      } = item || {};
      return (
        <div className="info" key={id}>
          <h4>{tenDichVu}</h4>
          {cachThucPt && (
            <>
              <p>Cách thức phẫu thuật</p>
              <span>{cachThucPt}</span>
            </>
          )}
          {phuongPhapPt && (
            <>
              <p>Phương pháp phẫu thuật</p>
              <span>{phuongPhapPt}</span>
            </>
          )}
          {chanDoanSauPt && (
            <>
              <p>Chẩn đoán sau phẫu thuật</p>
              <span>{chanDoanSauPt}</span>
            </>
          )}
          {chanDoanSauPtChiTiet && (
            <>
              <p>Chẩn đoán sau phẫu thuật chi tiết</p>
              <span>{chanDoanSauPtChiTiet}</span>
            </>
          )}
          {nhanXet && (
            <>
              <p>Nhận xét</p>
              <span>{nhanXet}</span>
            </>
          )}
          {ketLuan && (
            <>
              <p>Kết luận</p>
              <span>{ketLuan}</span>
            </>
          )}
        </div>
      );
    });
  };

  return <div className="content-service">{renderListPttt()}</div>;
}

export const MemoizedSurgery = memo(Surgery);
export default Surgery;
