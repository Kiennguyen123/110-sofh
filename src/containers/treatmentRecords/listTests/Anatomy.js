import React from 'react';
import { formatFloatPoint } from '@utils/common';

function Anatomy(props) {
  const { service } = props;
  const {
    benhPham,
    viTriSinhThiet,
    phuongPhapNhuom,
    viThe,
    daiThe,
    ketQua,
    ketLuan,
  } = service || {};

  return (
    <>
      {benhPham && (
        <>
          <p>Bệnh phẩm</p>
          <span>{benhPham}</span>
        </>
      )}
      {viTriSinhThiet && (
        <>
          <p>Vị trí sinh thiết</p>
          <span>{viTriSinhThiet}</span>
        </>
      )}
      {phuongPhapNhuom && (
        <>
          <p>Phương pháp nhuộm</p>
          <span>{phuongPhapNhuom}</span>
        </>
      )}
      {viThe && (
        <>
          <p>Vi thể</p>
          <span>{viThe}</span>
        </>
      )}
      {daiThe && (
        <>
          <p>Đại thể</p>
          <span>{daiThe}</span>
        </>
      )}
      {ketQua && (
        <>
          <p>Kết quả</p>
          <span>{formatFloatPoint(ketQua, 2)}</span>
        </>
      )}
      {ketLuan && (
        <>
          <p>Kết luận</p>
          <span>{ketLuan}</span>
        </>
      )}
    </>
  );
}

export default Anatomy;
