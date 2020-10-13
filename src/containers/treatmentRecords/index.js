import React, { useState, useEffect, useMemo } from 'react';
import { Main } from './styled';
import { Select, Collapse } from 'antd';
import './style.scss';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { MemoizedInfoPatient } from './infoPatient';
import { MemoizedListTests } from './listTests';
import { MemoizedResultCDHA } from './resultCDHA';
import { MemoizedSurgery } from './surgery';
import { MemoizedMedicine } from './medicine';
import { MemoizedSupplies } from './supplies';
import { MemoizedTakeCare } from './takeCare';
import { MemoizedConsultation } from './consultation';
import { MemoizedExamination } from './examination';
import { MemoizedExaminationOutPatient } from './examinationOutPatient';
import { MemoizedSpecialExamination } from './specialExamination';

const { Option } = Select;
const { Panel } = Collapse;

function index(props) {
  const [state, _setState] = useState({});
  const history = useHistory();
  const {
    location: { state: nbInfo = {} },
  } = useMemo(() => history, [history]);
  const {
    listToDieuTri,
    listDvXetNghiem,
    listCdha,
    listPttt,
    listThuoc,
    listVatTu,
    listHsChamSoc,
    listHoiChan,
    toDieuTriLasted,
    inforKhamBenh,
    inforKhamChuyenKhoa,
    getListDvXetNghiem,
    getDichVuKham,
    getListCdhaPttt,
    searchToDieuTri,
    getToDieuTriById,
    getListDvKho,
    getListHoSoChamSoc,
    getListHoiChan,
    updateData,
  } = props;

  const setState = (_state) => {
    _setState((state) => ({
      ...state,
      ...(_state || {}),
    }));
  };

  useEffect(() => {
    const { loaiBenhAn, id } = nbInfo || {};
    if (loaiBenhAn === 20) {
      searchToDieuTri({ nbDotDieuTriId: id }).then((res) => {
        updateData({ listToDieuTri: res, toDieuTriLasted: res[0] });
        const dateSelected =
          res[0] && res[0].ngayYLenh
            ? moment(res[0].ngayYLenh)._d
            : new Date();
        setState({ defaultValueSelected: res[0] && res[0].id });
        reRenderData(dateSelected);
      });
    } else {
      getDichVuKham({
        nbDotDieuTriId: id,
        khamChuyenKhoa: false,
      });
      reRenderData();
    }
  }, []);

  const handleChangeSelected = (value, option) => {
    const { data } = option.props;
    const dateTime = data ? moment(data)._d : new Date();
    setState({
      defaultValueSelected: value,
    });
    updateData({
      toDieuTriLasted: {},
      inforKhamBenh: [],
      inforKhamChuyenKhoa: [],
      listDvXetNghiem: [],
      listCdha: [],
      listPttt: [],
      listThuoc: [],
      listVatTu: [],
      listHsChamSoc: [],
      listHoiChan: [],
    });
    reRenderData(dateTime);
    getToDieuTriById(value).catch((error) => {});
  };

  const reRenderData = (dateTime) => {
    const { id } = nbInfo || {};
    const currentTime = dateTime && dateTime.format('yyyy-MM-dd');
    const params = {
      nbDotDieuTriId: id,
      ngayThucHien: currentTime,
    };

    getDichVuKham({
      ...params,
      khamChuyenKhoa: true,
    }).catch(() => {});

    getListDvXetNghiem(params).catch(() => {});
    getListCdhaPttt({
      ...params,
      pttt: false,
    })
      .then((res) => {
        updateData({ listCdha: res });
      })
      .catch(() => {});
    getListCdhaPttt({
      ...params,
      pttt: true,
    })
      .then((res) => {
        updateData({ listPttt: res });
      })
      .catch(() => {});
    getListDvKho({
      ...params,
      loaiDichVu: 90,
    })
      .then((res) => {
        updateData({ listThuoc: res });
      })
      .catch(() => {});
    getListDvKho({
      ...params,
      loaiDichVu: 100,
    })
      .then((res) => {
        updateData({ listVatTu: res });
      })
      .catch(() => {});
    getListHoSoChamSoc(params)
      .then((res) => {
        updateData({ listHsChamSoc: res });
      })
      .catch(() => {});
    getListHoiChan(params)
      .then((res) => {
        updateData({ listHoiChan: res });
      })
      .catch(() => {});
  };

  const renderDateOption = () => {
    return listToDieuTri.map((toDieuTri, index) => {
      const { id, ngayYLenh } = toDieuTri || {};
      return (
        <Option key={id} value={id} data={ngayYLenh}>
          {ngayYLenh && moment(ngayYLenh).format('DD/MM/YYYY')}
        </Option>
      );
    });
  };

  return (
    <Main>
      <div className="content">
        <div className="content-detail">
          <div className="title">
            <h1>Hồ sơ điều trị</h1>
          </div>
          <div className="select">
            <Select
              placeholder="Chọn ngày Y lệnh điều trị"
              className="selectRoom"
              onChange={handleChangeSelected}
              disabled={nbInfo.loaiBenhAn !== 20}
              showSearch
              value={state.defaultValueSelected}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .unsignText()
                  .indexOf(input.toLowerCase().unsignText()) >= 0
              }
            >
              {renderDateOption()}
            </Select>
          </div>

          <MemoizedInfoPatient nbInfo={nbInfo} />

          <div className="service">
            <Collapse
              bordered={false}
              expandIconPosition="right"
              accordion={true}
            >
              <Panel
                header={
                  <div className="title-service">
                    <h3>Khám bệnh</h3>
                  </div>
                }
                key="1"
                className="service-detail"
              >
                {nbInfo.loaiBenhAn === 20 && (
                  <MemoizedExamination
                    toDieuTriLasted={toDieuTriLasted}
                  />
                )}
                {nbInfo.loaiBenhAn !== 20 &&
                  inforKhamBenh.length > 0 && (
                    <MemoizedExaminationOutPatient
                      inforKhamBenh={inforKhamBenh}
                    />
                  )}
              </Panel>
              {inforKhamChuyenKhoa.length > 0 && (
                <Panel
                  header={
                    <div className="title-service">
                      <h3>Khám chuyên khoa</h3>
                    </div>
                  }
                  key="2"
                  className="service-detail"
                >
                  <MemoizedSpecialExamination
                    inforKhamChuyenKhoa={inforKhamChuyenKhoa}
                  />
                </Panel>
              )}
              {listDvXetNghiem.length > 0 && (
                <Panel
                  header={
                    <div className="title-service">
                      <h3>Xét nghiệm</h3>
                    </div>
                  }
                  key="3"
                  className="service-detail"
                >
                  <MemoizedListTests
                    listDvXetNghiem={listDvXetNghiem}
                  />
                </Panel>
              )}
              {listCdha.length > 0 && (
                <Panel
                  header={
                    <div className="title-service">
                      <h3>Kết quả CĐHA và thăm dò chức năng</h3>
                    </div>
                  }
                  key="4"
                  className="service-detail"
                >
                  <MemoizedResultCDHA listCdha={listCdha} />
                </Panel>
              )}
              {listPttt.length > 0 && (
                <Panel
                  header={
                    <div className="title-service">
                      <h3>Phẫu thuật - Thủ thuật</h3>
                    </div>
                  }
                  key="5"
                  className="service-detail"
                >
                  <MemoizedSurgery listPttt={listPttt} />
                </Panel>
              )}
              {listThuoc.length > 0 && (
                <Panel
                  header={
                    <div className="title-service">
                      <h3>Thuốc</h3>
                    </div>
                  }
                  key="6"
                  className="service-detail"
                >
                  <MemoizedMedicine listThuoc={listThuoc} />
                </Panel>
              )}
              {listVatTu.length > 0 && (
                <Panel
                  header={
                    <div className="title-service">
                      <h3>Vật tư</h3>
                    </div>
                  }
                  key="7"
                  className="service-detail"
                >
                  <MemoizedSupplies listVatTu={listVatTu} />
                </Panel>
              )}
              {listHsChamSoc.length > 0 && (
                <Panel
                  header={
                    <div className="title-service">
                      <h3>Chăm sóc</h3>
                    </div>
                  }
                  key="8"
                  className="service-detail"
                >
                  <MemoizedTakeCare listHsChamSoc={listHsChamSoc} />
                </Panel>
              )}
              {listHoiChan.length > 0 && (
                <Panel
                  header={
                    <div className="title-service">
                      <h3>Hội chẩn</h3>
                    </div>
                  }
                  key="9"
                  className="service-detail"
                >
                  <MemoizedConsultation listHoiChan={listHoiChan} />
                </Panel>
              )}
            </Collapse>
          </div>
        </div>
      </div>
    </Main>
  );
}

const mapStateToProps = (state) => {
  let {
    treatmentRecords: {
      listToDieuTri = [],
      toDieuTriLasted = {},
      inforKhamBenh = [],
      inforKhamChuyenKhoa = [],
      listDvXetNghiem = [],
      listCdha = [],
      listPttt = [],
      listThuoc = [],
      listVatTu = [],
      listHsChamSoc = [],
      listHoiChan = [],
    },
  } = state;
  return {
    listToDieuTri,
    listDvXetNghiem,
    inforKhamBenh,
    inforKhamChuyenKhoa,
    listCdha,
    listPttt,
    listThuoc,
    listVatTu,
    listHsChamSoc,
    listHoiChan,
    toDieuTriLasted,
  };
};

const mapDispatchToProps = ({
  treatmentRecords: {
    searchToDieuTri,
    getToDieuTriById,
    getDichVuKham,
    getListDvXetNghiem,
    getListCdhaPttt,
    getListDvKho,
    getListHoSoChamSoc,
    getListHoiChan,
    updateData,
  },
}) => ({
  searchToDieuTri,
  getToDieuTriById,
  getDichVuKham,
  getListDvXetNghiem,
  getListCdhaPttt,
  getListDvKho,
  getListHoSoChamSoc,
  getListHoiChan,
  updateData,
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
