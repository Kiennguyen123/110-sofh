import React, { memo } from 'react';
import { formatFloatPoint } from '@utils/common';

function Examination(props) {
  const { toDieuTriLasted } = props;
  const {
    bacSiDieuTri,
    dienBien,
    benhChinh,
    benhKemTheo,
    tienSuBenh,
    benhSu,
    kham,
    mach,
    huyetAp,
    chieuCao,
    canNang,
    bmi,
    bsa,
    creatinin,
    nhipTho,
    nhietDo,
    spo2,
    nuocTieuMl,
    nuocTieuGio,
    glasgow,
    clearance,
    bodyweight,
  } = toDieuTriLasted || {};
  return (
    <div className="content-service">
      {(bacSiDieuTri || benhChinh || benhKemTheo) && (
        <div className="info">
          <h4>Thông tin</h4>
          {bacSiDieuTri && (
            <>
              <p>Bác sĩ điều trị</p>
              <span>{bacSiDieuTri && bacSiDieuTri.ten}</span>
            </>
          )}
          {benhChinh && (
            <>
              <p>CĐ bệnh chính</p>
              <span>{benhChinh} </span>
            </>
          )}
          {benhKemTheo && (
            <>
              <p>CĐ kèm theo</p>
              <span>{benhKemTheo}</span>
            </>
          )}
          {dienBien && (
            <>
              <p>CĐ kèm theo</p>
              <span>{dienBien}</span>
            </>
          )}
        </div>
      )}
      {(tienSuBenh || benhSu || kham) && (
        <div className="medical-examination">
          <h4>Khám bệnh</h4>
          {tienSuBenh && (
            <>
              <p>Tiền sử bệnh</p>
              <span>{tienSuBenh}</span>
            </>
          )}
          {benhSu && (
            <>
              <p>Bệnh sử</p>
              <span>{benhSu}</span>
            </>
          )}
          {kham && (
            <>
              <p>Khám</p>
              <span>{kham}</span>
            </>
          )}
        </div>
      )}
      <div className="function">
        <h4>Theo dõi chức năng sống</h4>
        <table className="t01">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Chỉ số</th>
              <th>Đơn vị</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mạch</td>
              <td>{mach}</td>
              <td>Lần/Phút</td>
            </tr>
            <tr>
              <td>Nhiệt độ</td>
              <td>{nhietDo}</td>
              <td>
                <sup>0</sup>C
              </td>
            </tr>
            <tr>
              <td>Huyết áp</td>
              <td>{huyetAp}</td>
              <td>mmHg</td>
            </tr>
            <tr>
              <td>Nhịp thở</td>
              <td>{nhipTho}</td>
              <td></td>
            </tr>
            <tr>
              <td>
                SpO<sub>2</sub>
              </td>
              <td>{formatFloatPoint(spo2, 2)}</td>
              <td></td>
            </tr>
            <tr>
              <td>Chiều cao</td>
              <td>{formatFloatPoint(chieuCao, 2)}</td>
              <td>cm</td>
            </tr>
            <tr>
              <td>Cân nặng</td>
              <td>{formatFloatPoint(canNang, 2)}</td>
              <td>Kg</td>
            </tr>
            <tr>
              <td>BMI</td>
              <td>{formatFloatPoint(bmi, 2)}</td>
              <td></td>
            </tr>
            <tr>
              <td>Nước tiểu</td>
              <td>{formatFloatPoint(nuocTieuMl, 2)}</td>
              <td>ml</td>
            </tr>
            <tr>
              <td>Nước tiểu</td>
              <td>{formatFloatPoint(nuocTieuGio, 2)}</td>
              <td>giờ</td>
            </tr>
            <tr>
              <td>Glasgow</td>
              <td>{formatFloatPoint(glasgow, 2)}</td>
              <td></td>
            </tr>
            <tr>
              <td>Clearance</td>
              <td>{formatFloatPoint(clearance, 2)}</td>
              <td></td>
            </tr>
            <tr>
              <td>Creatinin</td>
              <td>{formatFloatPoint(creatinin, 2)}</td>
              <td></td>
            </tr>
            <tr>
              <td>BodyWeight</td>
              <td>{formatFloatPoint(bodyweight, 2)}</td>
              <td></td>
            </tr>
            <tr>
              <td>BSA</td>
              <td>{formatFloatPoint(bsa, 2)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const MemoizedExamination = memo(Examination);
export default Examination;
