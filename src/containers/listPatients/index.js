import React, { useState, useEffect, useRef } from 'react';
import { Main } from './styled';
import { Row, Col } from 'antd';
import { Select, Modal, message } from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PATH_NAME } from '@configs/constants/common';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import { ReactComponent as IcClose } from '@images/DSNB/icClose.svg';
import ListPatient from '@components/listPatients/ListPatient';
import Spinner from '@components/common/Spinner';
import InfiniteScroll from 'react-infinite-scroller';
import Pdf from '@components/pdf';

const { Option } = Select;

function index(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [loadingList, setloadingList] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(null);
  const [visible, setVisible] = useState(false);
  const [idNb, setIdNb] = useState(null);
  const refList = useRef(null);
  const history = useHistory();
  const {
    listKhoa,
    listPhong,
    listNb,
    isAdmin,
    departmentIds,
    idDepartmentSelected,
    idRoomSelected,
    totalElements,
    getListKhoa,
    getListPhong,
    getListNb,
    onLoadMore,
    updateData,
  } = props;

  useEffect(() => {
    const params = {
      page: 0,
    };
    const nbParams = {
      page: 0,
      pageSize: 20,
      khoaId: idDepartmentSelected,
      phongId: idRoomSelected,
    };

    getListKhoa(params).catch(() => {
      message.error('Không lấy được danh sách khoa');
    });

    getListNb(nbParams).catch(() => {
      message.error('Không lấy được danh sách người bệnh');
    });
    updateData({
      onViewBarCode: false,
    });
  }, []);

  useEffect(() => {
    const params = {
      page: 0,
      khoaId: idDepartmentSelected,
    };
    if (idDepartmentSelected) {
      getListPhong(params).catch(() => {
        message.error('Không lấy được danh sách phòng');
      });
    }
  }, [idDepartmentSelected]);

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleClickPatient = (nb) => {
    history.push(PATH_NAME.TREATMENT_RECORDS + '/' + nb.id, nb);
  };

  const handleChangeSelection = (name, value) => {
    let params = { pageSize: 20 };

    setCurrentPage(0);
    setloadingList(true);
    refList.current.scrollTo(0, 0);

    if (name === 'khoaId') {
      updateData({
        idDepartmentSelected: value,
        idRoomSelected: undefined,
      });
      params = { ...params, khoaId: value };
    }

    if (name === 'phongId') {
      updateData({
        idRoomSelected: value,
      });
      params = {
        ...params,
        khoaId: idDepartmentSelected,
        phongId: value,
      };
    }

    getListNb(params)
      .then(() => {
        setloadingList(false);
        setHasMore(true);
      })
      .catch(() => {
        setloadingList(false);
        setHasMore(true);
        message.error('Lấy danh sách người bệnh không thành công');
      });
  };

  const handleLogout = () => {
    props.onLogout();
  };

  const handleBarcode = () => {
    props.updateData({
      onViewBarCode: true,
    });
  };

  const handleInfiniteOnLoad = () => {
    let params = {
      page: currentPage + 1,
      pageSize: 20,
      khoaId: idDepartmentSelected,
      phongId: idRoomSelected,
      timKiem: inputValue.trim(),
    };
    setLoading(true);
    if (listNb.length >= totalElements) {
      setLoading(false);
      setHasMore(false);
      return;
    }

    onLoadMore(params)
      .then(() => {
        setCurrentPage(currentPage + 1);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        message.error('Lấy danh sách người bệnh không thành công');
      });
  };

  const handleSearchPatient = (e, item) => {
    const value = item === 'barcode' ? e : e.target.value;
    const valueTrim = value.trim();
    const params = {
      pageSize: 20,
      khoaId: idDepartmentSelected,
      phongId: idRoomSelected,
      timKiem: valueTrim,
    };

    refList.current.scrollTo(0, 0);
    setInputValue(value);
    clearTimeout(timer);

    if (inputValue.trim() === valueTrim) return;

    const time = setTimeout(() => {
      props.updateData({
        onViewBarCode: false,
      });
      setloadingList(true);
      getListNb(params)
        .then(() => {
          setCurrentPage(0);
          setloadingList(false);
        })
        .catch(() => {
          setloadingList(false);
        });
    }, 600);
    setTimer(time);
  };

  const handleClickBA = (id) => {
    setIdNb(id);
    setVisible(true);
  };

  const renderListKhoa = () => {
    return listKhoa.map((khoa) => {
      const { id, ten } = khoa || {};
      return (
        <Option value={id} key={id}>
          {ten}
        </Option>
      );
    });
  };

  const renderListPhong = () => {
    return listPhong.map((phong) => {
      const { id, ten } = phong || {};
      return (
        <Option value={id} key={id}>
          {ten}
        </Option>
      );
    });
  };

  const renderListNb = () => {
    return listNb.map((nb) => {
      const { id } = nb || {};
      return (
        <ListPatient
          key={id}
          onClick={() => handleClickPatient(nb)}
          onViewProfile={handleClickBA}
          nb={nb}
        />
      );
    });
  };

  return (
    <Main>
      <div className="content">
        <div className="content-detail">
          <div className="title">
            <h1>Danh sách người bệnh</h1>
            <img
              onClick={handleLogout}
              className="log-out"
              src={require('@resources/images/DSNB/ic-logout.svg')}
              alt=""
            />
          </div>
          <div className="select">
            <Row gutter={12}>
              <Col span={12}>
                <Select
                  placeholder="Chọn khoa khám bệnh"
                  onChange={(value) =>
                    handleChangeSelection('khoaId', value)
                  }
                  disabled={!isAdmin && departmentIds.length === 0}
                  dropdownClassName="dropdown-list-patients"
                  value={idDepartmentSelected}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .unsignText()
                      .indexOf(input.toLowerCase().unsignText()) >= 0
                  }
                >
                  {renderListKhoa()}
                </Select>
              </Col>
              <Col span={12}>
                <Select
                  placeholder="Chọn phòng"
                  className="selectRoom"
                  value={idRoomSelected}
                  disabled={!isAdmin && departmentIds.length === 0}
                  allowClear
                  onChange={(value) =>
                    handleChangeSelection('phongId', value)
                  }
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .unsignText()
                      .indexOf(input.toLowerCase().unsignText()) >= 0
                  }
                >
                  {renderListPhong()}
                </Select>
              </Col>
            </Row>
          </div>
          <div className="search">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleSearchPatient(e)}
              placeholder="Nhập Tên, Mã HS, Mã BA"
            ></input>
            <button
              className="qr-code"
              onClick={() => {
                handleBarcode();
              }}
            >
              <img
                src={require('@images/DSNB/ic-qr-code.svg')}
                alt=""
              />
            </button>
          </div>
          <div className="list-patients" ref={refList}>
            <div
              className={`loading ${!loadingList ? 'hidden' : ''}`}
            >
              <Spinner />
            </div>
            <InfiniteScroll
              initialLoad={false}
              pageStart={currentPage}
              loadMore={handleInfiniteOnLoad}
              hasMore={!loading && hasMore}
              useWindow={false}
            >
              {renderListNb()}
              {loading && hasMore && (
                <div className="loading-list">...</div>
              )}
            </InfiniteScroll>
          </div>
        </div>
      </div>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        zIndex={1000001}
      >
        <Pdf id={idNb} />
      </Modal>
      {props.onViewBarCode ? (
        <div className="qr-barcode">
          <div className="anim-box">
            <div></div>
          </div>
          <div className="videobox__inner">
            <BarcodeScannerComponent
              onUpdate={(err, result) => {
                if (result)
                  handleSearchPatient(result.text, 'barcode');
                else {
                }
              }}
            />
            <span
              onClick={() => {
                props.updateData({
                  onViewBarCode: false,
                });
              }}
            >
              <IcClose />
            </span>
          </div>
        </div>
      ) : null}
    </Main>
  );
}

const mapStateToProps = (state) => {
  const {
    listPatients: {
      idDepartmentSelected,
      idRoomSelected,
      departmentIds,
      isAdmin,
      listKhoa = [],
      listPhong = [],
      listNb = [],
      totalElements,
      onViewBarCode,
    },
  } = state;

  return {
    idDepartmentSelected,
    idRoomSelected,
    isAdmin,
    departmentIds,
    listKhoa,
    listPhong,
    listNb,
    totalElements,
    onViewBarCode,
  };
};

const mapDispatchToProps = ({
  listPatients: {
    getListKhoa,
    getListPhong,
    getListNb,
    onLoadMore,
    updateData,
  },
  auth: { onLogout },
}) => ({
  onLogout,
  getListKhoa,
  getListPhong,
  getListNb,
  onLoadMore,
  updateData,
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
