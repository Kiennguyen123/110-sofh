import React, { useState, useEffect, useRef } from 'react';
import { Main } from './styled';
import { connect } from 'react-redux';
import { message } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { ReactComponent as Search } from '@images/tudien/search.svg';

function index(props) {

  const { listData, searchName, totalElements, onLoadMore } = props
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [timeOut, setTimeOut] = useState(null);
  const refList = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
  }, []);

  const handleClick = (id) => {
    props.clickItemOnSearch({ id: id });
  }

  const handleChangeInput = (e) => {
    let keyValue = e.target.value;
    // refList.current.scrollTo(0, 0);
    // setCurrentPage(0);
    clearTimeout(timeOut);
    props.updateData({
      searchName: keyValue,
    })
    if (keyValue) {
      let data = setTimeout(() => {
        props.onSearch({ page: currentPage, size: 20, searchName: keyValue })
      }, 500)

      setTimeOut(data);
    } else {
      props.updateData({
        listData: []
      })
    }
  }

  const handleInfiniteOnLoad = () => {
    let params = {
      page: currentPage + 1,
      size: 20,
      searchName: searchName,
    };
    setLoading(true);

    if (listData.length >= totalElements) {
      setLoading(false);
      setHasMore(false);
      return;
    }

    onLoadMore(params)
      .then(() => {
        setCurrentPage(currentPage + 1);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setHasMore(false);
        message.error('Lấy danh sách bác sĩ không thành công');
      });
  }

  const handleClickWrapper = event => {
    const { target } = event;
    if (!wrapperRef.current.contains(target)) {
      props.updateData({
        listData: null,
        searchName: '',
      })
    }
  }

  return (
    <Main>
      <div className="dictionary-page" onClick={handleClickWrapper}>
        <div className="page-header">
          Tra cứu từ điển chuyên ngành
        </div>
        <div className="search-box" ref={wrapperRef}>
          <div className="search-input">
            <input
              placeholder="Ví dụ “Fluoroscopy”"
              onChange={handleChangeInput}
            />
            <div className="button-search">
              <Search />
            </div>
          </div>
          {
            < div className={listData && listData.length > 0 ? "search-result active" : "search-result"}>
              <div className="option-result" ref={refList}>
                <InfiniteScroll
                  initialLoad={false}
                  pageStart={currentPage}
                  loadMore={handleInfiniteOnLoad}
                  hasMore={!loading && hasMore}
                  useWindow={false}
                >
                  {
                    listData && listData.length && listData.map((item) => {
                      return (
                        <p key={item.id} onClick={() => handleClick(item.id)}>
                          <span>{item.tiengAnh}: </span>
                          {item.tiengViet}
                        </p>
                      )
                    })
                  }
                </InfiniteScroll>
              </div>
            </div>
          }
        </div>
        <div className="body-page">
          <div className="word-original">
            <div className="title-word">Từ tiếng Anh</div>
            <div className="word-below">{`“${props.searchName}”`}</div>
          </div>
          <div className="Viet-mean">
            <span>Nghĩa tiếng Việt</span>
            <div className="mean-inner">
              {props.tiengViet}
            </div>
          </div>
          <div className="explain-mean">
            <span>Nghĩa giải thích tiếng Việt</span>
            <div className="explain-inner">
              {props.giaiThich}
            </div>
          </div>
        </div>
      </div>
    </Main >
  );
};

export default connect(
  state => {
    const {
      specializedDictionary: {
        listData = [],
        searchName,
        tiengViet,
        giaiThich,
        totalElements,
      }
    } = state;
    return {
      listData,
      searchName,
      tiengViet,
      giaiThich,
      totalElements,
    };
  },
  ({ specializedDictionary: { onSearch, updateData, clickItemOnSearch, onLoadMore } }) => {
    return {
      onSearch,
      updateData,
      clickItemOnSearch,
      onLoadMore
    };
  }
)(index);
