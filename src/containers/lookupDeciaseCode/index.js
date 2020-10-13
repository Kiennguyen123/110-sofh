import React, { useState, useEffect, useRef } from 'react';
import { Main } from './styled';
import { Collapse, message } from 'antd';
import images from '@resources/file-image';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from '@components/common/Loader';

const { Panel } = Collapse;
function index(props) {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [startPage, setStartPage] = useState(0);
  const [idSelected, setIdSelected] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [timer, setTimer] = useState(null);
  const [valueInput, setValueInput] = useState('');
  const refList = useRef(null);
  const {
    listDeciaseCode,
    listMaBenh,
    searchName,
    totalElements,
    onSearch,
    getListMaBenh,
    onLoadMore,
    updateData,
  } = props;

  useEffect(() => {
    onSearch({
      page: 0,
      pageSize: 20,
    });
  }, []);

  const handleChangePanel = (id) => {
    if (!id || +id === idSelected) return;
    updateData({ listMaBenh: [] });
    setIdSelected(+id);
    setIsPending(true);
    getListMaBenh({ loaiBenhId: +id }).finally(() => {
      setIsPending(false);
    });
  };

  const handleInfiniteOnLoad = () => {
    let params = {
      page: startPage + 1,
      pageSize: 20,
      searchName,
    };

    setLoading(true);
    if (listDeciaseCode.length >= totalElements) {
      // message.warning('Infinite List loaded all');
      setLoading(false);
      setHasMore(false);
      return;
    }
    if (valueInput) {
      params = { ...params, searchName: valueInput };
    }
    onLoadMore(params)
      .then(() => {
        setStartPage(startPage + 1);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        message.warning('Tìm kiếm thất bại!');
      });
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    const valueTrim = value.trim();

    refList.current.scrollTo(0, 0);
    setValueInput(value);
    setStartPage(0);
    updateData({
      searchName: valueInput,
    });
    clearTimeout(timer);

    const time = setTimeout(() => {
      onSearch({ pageSize: 20, searchName: valueTrim }).then(() => {
        setHasMore(true);
      });
    }, 600);

    setTimer(time);
  };
  return (
    <Main>
      <div className="style-title">
        <h1>Tra cứu Mã bệnh</h1>
      </div>
      <div className="style-inner-menu">
        <input
          className="style-input"
          value={valueInput}
          placeholder="Tìm kiếm theo Mã ICD, tên bệnh"
          onChange={handleSearch}
        />
        <button className="style-btn-submit">
          <img src={images.tracuumabenh.icon_btn} alt="" />
        </button>
      </div>
      <div className="style-menu-select">
        <div className="style-span-one" ref={refList}>
          <InfiniteScroll
            initialLoad={false}
            pageStart={startPage}
            loadMore={handleInfiniteOnLoad}
            hasMore={!loading && hasMore}
            useWindow={false}
          >
            <Collapse
              expandIconPosition="right"
              accordion={true}
              onChange={handleChangePanel}
            >
              {listDeciaseCode.map((item) => {
                const { id, ma, ten, tenTiengAnh } = item;
                return (
                  <Panel
                    key={id}
                    header={
                      <div className="style-inner-title">
                        <span className="style-code">{ma}</span>
                        <div className="style-dich-bbenh">
                          <span>{ten}</span> <br></br>
                          <p>{tenTiengAnh}</p>
                        </div>
                      </div>
                    }
                    className="style-inner-span"
                  >
                    <div className="ant-collapse-content-box">
                      <div className="style-table-one">
                        {isPending && (
                          <div className="pending">
                            <Loader />
                          </div>
                        )}
                        {id === idSelected &&
                          listMaBenh.map((item) => {
                            const { id, ten, ma, tenTiengAnh } =
                              item || {};
                            return (
                              <div className="table-row" key={id}>
                                <div className="table-row--first">
                                  {ma}
                                </div>
                                <div className="table-row--last">
                                  <div>{ten}</div>
                                  <div>{tenTiengAnh}</div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </Panel>
                );
              })}
            </Collapse>
            {loading && hasMore && (
              <div className="demo-loading-container">...</div>
            )}
          </InfiniteScroll>
        </div>
      </div>
    </Main>
  );
}

export default connect(
  (state) => {
    return {
      auth: state.auth.auth,
      listDeciaseCode: state.lookupDeciaseCode.listDeciaseCode,
      totalElements: state.lookupDeciaseCode.totalElements,
      listMaBenh: state.lookupDeciaseCode.listMaBenh,
    };
  },
  ({
    lookupDeciaseCode: {
      onSearch,
      onLoadMore,
      getListMaBenh,
      updateData,
    },
  }) => {
    return {
      onSearch,
      onLoadMore,
      getListMaBenh,
      updateData,
    };
  },
)(index);
