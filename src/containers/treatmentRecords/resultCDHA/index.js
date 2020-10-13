import React, { memo } from 'react';

function ResultCDHA(props) {
  const { listCdha } = props;
  const renderListCdha = () => {
    return listCdha.map((item) => {
      const {
        id,
        tenDichVu,
        ketLuan,
        ketQua,
        deNghi,
        ketQuaUrl,
        ketQuaHtml,
      } = item || {};
      return (
        <div className="info" key={id}>
          <div>
            <h4>{tenDichVu}</h4>
            {ketQua && (
              <>
                <p>Mô tả</p>
                <span>{ketQua}</span>
              </>
            )}
            {ketLuan && (
              <>
                <p>Kết luận</p>
                <span>{ketLuan}</span>
              </>
            )}
            {deNghi && (
              <>
                <p>Đề nghị</p>
                <span>{deNghi}</span>
              </>
            )}
          </div>
          {ketQuaUrl && (
            <a
              className="external-link"
              target="_blank"
              href={ketQuaUrl}
            >
              Xem hình ảnh
            </a>
          )}
        </div>
      );
    });
  };

  return <div className="content-service">{renderListCdha()}</div>;
}

export const MemoizedResultCDHA = memo(ResultCDHA);
export default ResultCDHA;
