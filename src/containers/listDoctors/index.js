import React, { useState, useEffect, useRef } from 'react';
import { Main } from './styled';
import { Select, message } from 'antd';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { absoluteFileUrl } from '@utils/common';
import { ReactComponent as Search } from '@images/DBNV/search.svg';
const { Option } = Select;

function index(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [valueInput, setValueInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [timer, setTimer] = useState();
  const refList = useRef(null);
  const {
    idDepartmentSelected,
    idDepartment,
    totalElements,
    searchName,
    listDoctors,
    listKhoa,
    onSearch,
    updateData,
    getListKhoa,
    onLoadMore,
  } = props;

  useEffect(() => {
    updateData({
      searchName: '',
      idDepartment: idDepartmentSelected,
    });

    getListKhoa();

    onSearch({
      khoaId: idDepartmentSelected,
      pageSize: 20,
    });
  }, []);

  const handleChangeDepart = (id) => {
    setValueInput('');
    setCurrentPage(0);
    refList.current.scrollTo(0, 0);
    updateData({
      searchName: '',
      idDepartment: id,
    });
    onSearch({
      khoaId: id,
      pageSize: 20,
    }).then(() => {
      setHasMore(true);
    });
  };

  const handleChangeInput = (event) => {
    const value = event.target.value;
    const valueTrim = value.trim();

    clearTimeout(timer);
    setValueInput(value);
    setCurrentPage(0);
    refList.current.scrollTo(0, 0);

    updateData({
      searchName: valueTrim,
    });

    const time = setTimeout(() => {
      onSearch({
        searchName: valueTrim,
        khoaId: idDepartment,
        pageSize: 20,
      }).then(() => {
        setHasMore(true);
      });
    }, 600);

    setTimer(time);
  };

  const handleInfiniteOnLoad = () => {
    let params = {
      searchName,
      page: currentPage + 1,
      pageSize: 20,
      khoaId: idDepartment,
    };

    setLoading(true);

    if (listDoctors.length >= totalElements) {
      setLoading(false);
      setHasMore(false);
      return;
    }

    if (valueInput) {
      params = { ...params, searchName: valueInput };
    }

    onLoadMore(params)
      .then(() => {
        setCurrentPage(currentPage + 1);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        message.error('Lấy danh sách bác sĩ không thành công');
      });
  };

  return (
    <Main>
      <div className="content">
        <div className="content-detail">
          <div className="title">
            <h1>Danh bạ nhân viên</h1>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Tìm theo tên"
              onChange={handleChangeInput}
              value={valueInput}
            />
            <button className="qr-code" onClick={() => {}}>
              <Search />
            </button>
            <Select
              onChange={handleChangeDepart}
              value={idDepartment}
              showSearch={true}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .unsignText()
                  .indexOf(input.toLowerCase().unsignText()) >= 0
              }
              placeholder="Chọn khoa"
            >
              {listKhoa.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.ten}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="list-patients" ref={refList}>
            <InfiniteScroll
              initialLoad={false}
              pageStart={currentPage}
              loadMore={handleInfiniteOnLoad}
              hasMore={!loading && hasMore}
              useWindow={false}
            >
              {listDoctors.map((item) => {
                const {
                  id,
                  avatar,
                  ten,
                  khoa,
                  chucVu,
                  vanBang,
                  soDienThoai,
                } = item || {};
                return (
                  <div key={id} className="list-patient">
                    <div className="avatar">
                      <img
                        src={
                          avatar
                            ? absoluteFileUrl(avatar)
                            : require('@images/DSNB/icon-avt.svg')
                        }
                        alt=""
                      />
                    </div>
                    <div className="info-patient">
                      <p className="name">{ten}</p>
                      {khoa && (
                        <span className="faculty">
                          {khoa && khoa.ten}
                        </span>
                      )}
                      <div className="address">
                        {chucVu && (
                          <p className="position">
                            {chucVu && chucVu.ten}
                          </p>
                        )}
                        {vanBang && (
                          <p className="doctor">
                            {vanBang && vanBang.ten}
                          </p>
                        )}
                        {soDienThoai && (
                          <p className="phone">
                            SĐT:{' '}
                            <a href={`tel:${soDienThoai}`}>
                              {soDienThoai}
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {loading && hasMore && (
                <div className="loading-list">...</div>
              )}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </Main>
  );
}

const mapStateToProps = (state) => {
  const {
    listDoctors: {
      idDepartment,
      listDoctors = [],
      listKhoa,
      searchName,
      totalElements,
    },
    listPatients: { idDepartmentSelected },
  } = state;
  return {
    idDepartment,
    listDoctors,
    searchName,
    idDepartmentSelected,
    listKhoa,
    totalElements,
  };
};

const mapDispatchToprops = ({
  listDoctors: { onSearch, updateData, onLoadMore, getListKhoa },
}) => {
  return {
    onSearch,
    updateData,
    onLoadMore,
    getListKhoa,
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(index);
