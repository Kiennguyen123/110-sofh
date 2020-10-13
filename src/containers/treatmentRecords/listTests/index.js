import React, { memo } from 'react';
import { Collapse } from 'antd';
import { NHOM_DICH_VU } from '@constants/treatmentRecords';
import Anatomy from './Anatomy';
import OtherService from './OtherService';

function ListTests(props) {
  const { listDvXetNghiem } = props;
  const renderListDichVuXetNghiem = () => {
    return listDvXetNghiem.map((dv) => {
      const { id, nhomDichVuCap2 } = dv || {};
      return (
        <div className="test function" key={id}>
          <h4>{nhomDichVuCap2 && nhomDichVuCap2.ten}</h4>
          {nhomDichVuCap2 &&
          nhomDichVuCap2.ma === NHOM_DICH_VU.GPB ? (
            <Anatomy service={dv} />
          ) : (
            <OtherService service={dv} />
          )}
        </div>
      );
    });
  };

  return (
    <div className="content-service">
      <Collapse expandIconPosition="right">
        {renderListDichVuXetNghiem()}
      </Collapse>
    </div>
  );
}

export const MemoizedListTests = memo(ListTests);
export default ListTests;
