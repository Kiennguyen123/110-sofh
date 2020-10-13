import React, { memo } from 'react';

function TakeCare(props) {
  const { listHsChamSoc } = props;

  const renderListHsChamSoc = () => {
    if (!listHsChamSoc.length) {
      return <div>Không có kết quả</div>;
    }
    return listHsChamSoc.map((item) => {
      const { id, dienBien, thucHienYLenh, dieuDuong } = item || {};
      return (
        <div className="info" key={id}>
          {dienBien && (
            <>
              <p>Diễn biến</p>
              <span className="white-space">{dienBien}</span>
            </>
          )}
          {thucHienYLenh && (
            <>
              <p>Thực hiện Y lệnh/ Chăm sóc</p>
              <span className="white-space">{thucHienYLenh}</span>
            </>
          )}
          {dieuDuong && (
            <>
              <p>Tên điều dưỡng</p>
              <span className="white-space">{dieuDuong}</span>
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div className="content-service">{renderListHsChamSoc()}</div>
  );
}

export const MemoizedTakeCare = memo(TakeCare);
export default TakeCare;
