import React, { useEffect } from 'react';
import { Main } from './styled';
import { Select } from 'antd';
import { connect } from 'react-redux';
import dataContants from '@configs/constants/data-contants';
import { message } from 'antd';
import { ReactComponent as Search } from '@images/tai-lieu-chuyen-mon/search-icon.svg';
import { ReactComponent as Document } from '@images/tai-lieu-chuyen-mon/document.svg';
const { Option } = Select;
function index(props) {
  const { listDocument } = props;
  useEffect(() => {
    props.getListDocument().catch(() => {
      message.error('Không lấy được danh sách tài liệu chuyên môn');
    });
  }, []);
  const handleChangeInput = (event) => {
    props.updateData({
      nameSearch: event.target.value,
    });
    if (props.clearTimeOutAffterRequest) {
      try {
        clearTimeout(props.clearTimeOutAffterRequest);
      } catch (error) {}
    }
    let data = setTimeout(() => {
      props.getListDocument();
    }, 500);
    props.updateData({
      clearTimeOutAffterRequest: data,
    });
  };
  return (
    <Main>
      <div className="content">
        <div className="title-page">Tài liệu chuyên môn</div>
        <div className="search-area">
          <Select
            placeholder="Cấp ban hành"
            defaultValue=""
            showSearch
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .unsignText()
                .indexOf(input.toLowerCase().unsignText()) >= 0
            }
            onChange={(e) => {
              props.updateData({
                promulgateLevelSearch: e,
              });
              props.getListDocument();
            }}
          >
            <Option value={''}>Cấp ban hành</Option>
            {dataContants.listPromulgate &&
              dataContants.listPromulgate.length &&
              dataContants.listPromulgate.map((item, index) => {
                return (
                  <Option key={index} value={item.value}>
                    {item.name}
                  </Option>
                );
              })}
          </Select>
          <input
            placeholder="Tìm tên tài liệu"
            onChange={handleChangeInput}
          ></input>
          <div
            className="button-search"
            onClick={(e) => {
              props.getListDocument();
            }}
          >
            <Search />
          </div>
        </div>

        <div className="list-document">
          {listDocument && listDocument.length
            ? listDocument.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="document-item"
                    onClick={() => {
                      props.history.push(
                        `/chi-tiet-tai-lieu/${item.id}`,
                      );
                    }}
                  >
                    <div className="img-document">
                      <Document />
                    </div>

                    <div className="title-document">
                      <span>{item.ten}</span>
                    </div>

                    <div className="subtitle">
                      <span>Quyết định {item.quyetDinh}</span>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </Main>
  );
}
const mapStateToProps = (state) => {
  const {
    professionalDocument: {
      listDocument,
      promulgateLevelSearch,
      nameSearch,
      clearTimeOutAffterRequest,
    },
  } = state;
  return {
    listDocument,
    promulgateLevelSearch,
    nameSearch,
    clearTimeOutAffterRequest,
  };
};
const mapDispatchToProps = ({
  professionalDocument: { getListDocument, updateData },
}) => ({
  getListDocument,
  updateData,
});
export default connect(mapStateToProps, mapDispatchToProps)(index);
