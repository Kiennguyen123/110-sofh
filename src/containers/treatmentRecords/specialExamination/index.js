import React, { memo } from 'react';

function SpecialExamination(props) {
  const { inforKhamChuyenKhoa } = props;
  return (
    <div className="content-service">
      {inforKhamChuyenKhoa.map((infor) => {
        const {
          id,
          tenDichVu,
          bacSiKham,
          phongKham,
          khoa,
          toanThan,
          hoHap,
          tuanHoan,
          taiMuiHong,
          coXuongKhop,
          rangHamMat,
          mat,
          thanTietNieu,
          tieuHoa,
          noiTietDinhDuong,
          thanKinh,
          khac,
          xyLyThuoc,
          xetNghiemCls,
          tomTatBenhAn,
          huongDieuTri,
          lyDoDenKham,
          lyDoVaoVien,
          quanTrinhBenhLy,
          cdNoiGioiThieu,
          tienSuBenh,
          diUngThuoc,
          tienSuGiaDinh,
          mach,
          nhietDo,
          huyetAp,
          nhipTho,
          canNang,
          chieuCao,
          spo2,
          nhomMau,
          chanDoanBenh,
          chanDoanKhac,
          chanDoanSoBo,
          loiDan,
        } = infor || {};
        return (
          <div className="info" key={id}>
            <h4>{tenDichVu}</h4>
            {bacSiKham && (
              <>
                <p>Bác sĩ</p>
                <span>{bacSiKham}</span>
              </>
            )}
            {phongKham && (
              <>
                <p>Phòng khám</p>
                <span>{phongKham}</span>
              </>
            )}
            {khoa && (
              <>
                <p>Khoa</p>
                <span>{khoa}</span>
              </>
            )}

            <h4>Thông tin khám</h4>
            {toanThan && (
              <>
                <p>Toàn thân</p>
                <span>{toanThan}</span>
              </>
            )}
            {hoHap && (
              <>
                <p>Hô hấp</p>
                <span>{hoHap}</span>
              </>
            )}
            {tuanHoan && (
              <>
                <p>Tuần hoàn</p>
                <span>{tuanHoan}</span>
              </>
            )}
            {taiMuiHong && (
              <>
                <p>Tai mũi Họng</p>
                <span>{taiMuiHong}</span>
              </>
            )}
            {coXuongKhop && (
              <>
                <p>Cơ xương Khớp</p>
                <span>{coXuongKhop}</span>
              </>
            )}
            {rangHamMat && (
              <>
                <p>Răng hàm mặt</p>
                <span>{rangHamMat}</span>
              </>
            )}
            {mat && (
              <>
                <p>Mắt</p>
                <span>{mat}</span>
              </>
            )}
            {thanTietNieu && (
              <>
                <p>Thận tiết niệu</p>
                <span>{thanTietNieu}</span>
              </>
            )}
            {tieuHoa && (
              <>
                <p>Tiêu hóa</p>
                <span>{tieuHoa}</span>
              </>
            )}
            {noiTietDinhDuong && (
              <>
                <p>Nội tiết dinh dưỡng</p>
                <span>{noiTietDinhDuong}</span>
              </>
            )}
            {thanKinh && (
              <>
                <p>Thần kinh</p>
                <span>{thanKinh}</span>
              </>
            )}
            {khac && (
              <>
                <p>Khác</p>
                <span>{khac}</span>
              </>
            )}
            {xyLyThuoc && (
              <>
                <p>Xử lý thuốc</p>
                <span>{xyLyThuoc}</span>
              </>
            )}
            {xetNghiemCls && (
              <>
                <p>Xét nghiệm CLS</p>
                <span>{xetNghiemCls}</span>
              </>
            )}
            {tomTatBenhAn && (
              <>
                <p>Tóm tắt bệnh án</p>
                <span>{tomTatBenhAn}</span>
              </>
            )}
            {huongDieuTri && (
              <>
                <p>Hướng điều trị</p>
                <span>{huongDieuTri}</span>
              </>
            )}

            <h4>Chi tiết khám bệnh</h4>
            {lyDoDenKham && (
              <>
                <p>Lý do đến khám</p>
                <span>{lyDoDenKham}</span>
              </>
            )}
            {lyDoVaoVien && (
              <>
                <p>Lý do vào viện</p>
                <span>{lyDoVaoVien}</span>
              </>
            )}
            {quanTrinhBenhLy && (
              <>
                <p>Quá trình bệnh lý</p>
                <span>{quanTrinhBenhLy}</span>
              </>
            )}
            {cdNoiGioiThieu && (
              <>
                <p>CĐ nơi giới thiệu</p>
                <span>{cdNoiGioiThieu}</span>
              </>
            )}
            {tienSuBenh && (
              <>
                <p>Tiền sử bệnh</p>
                <span>{tienSuBenh}</span>
              </>
            )}
            {diUngThuoc && (
              <>
                <p>Dị ứng thuốc</p>
                <span>{diUngThuoc}</span>
              </>
            )}
            {tienSuGiaDinh && (
              <>
                <p>Tiền sử gia đình</p>
                <span>{tienSuGiaDinh}</span>
              </>
            )}
            {mach && (
              <>
                <p>Mạch</p>
                <span>{mach}</span>
              </>
            )}
            {nhietDo && (
              <>
                <p>Nhiệt độ</p>
                <span>{nhietDo}</span>
              </>
            )}
            {huyetAp && (
              <>
                <p>Huyết áp</p>
                <span>{huyetAp}</span>
              </>
            )}
            {nhipTho && (
              <>
                <p>Nhịp thở</p>
                <span>{nhipTho}</span>
              </>
            )}
            {canNang && (
              <>
                <p>Cân nặng</p>
                <span>{canNang}</span>
              </>
            )}
            {chieuCao && (
              <>
                <p>Chiều cao</p>
                <span>{chieuCao}</span>
              </>
            )}
            {nhomMau && (
              <>
                <p>
                  SpO<sub>2</sub>
                </p>
                <span>{spo2}</span>
              </>
            )}
            {nhomMau && (
              <>
                <p>Nhóm máu</p>
                <span>{nhomMau}</span>
              </>
            )}

            <h4>Kết luận</h4>
            {chanDoanSoBo && (
              <>
                <p>Chẩn đoán sơ bộ</p>
                <span>{chanDoanSoBo}</span>
              </>
            )}
            {chanDoanBenh && (
              <>
                <p>Chẩn đoán bệnh</p>
                <span>{chanDoanBenh}</span>
              </>
            )}
            {chanDoanKhac && (
              <>
                <p>Chẩn đoán khác</p>
                <span>{chanDoanKhac}</span>
              </>
            )}
            {loiDan && (
              <>
                <p>Lời dẫn</p>
                <span>{loiDan}</span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export const MemoizedSpecialExamination = memo(SpecialExamination);
export default SpecialExamination;
