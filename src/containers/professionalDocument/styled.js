import styled from 'styled-components';

const Main = styled('div')`
  font-family: Muli, sans-serif;
  background: #fafafa;
  border-radius: 6px 6px 0px 0px;
  min-height: 100vh;
  padding-bottom: 88px;
  .content {
    margin: 0px 16px;
    .title-page {
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      text-align: center;
      color: #272755;
      padding-top: 32px;
    }
    .search-area {
      margin-top: 32px;
      position: relative;
      height: 42px;
      background: #efefef;
      border-radius: 100px;
      display: flex;
      & .ant-select {
        border: none;
        width: 41%;
        margin: 4px;

        & .ant-select-selection {
          border: none;
          border-radius: 100px;
          & .ant-select-selection__rendered {
            .ant-select-search--inline {
              .ant-select-search__field__wrap {
                .ant-select-search__field {
                  margin: 0;
                  width: 100%;
                  height: 100%;
                  font-size: 100%;
                  line-height: 1;
                  background: transparent;
                  border-width: 0;
                  border-radius: 4px;
                  outline: 0;
                }
              }
            }
          }
          & .ant-select-arrow {
            border: 1px solid #0798f2;
            border-radius: 4px;
            width: 16px;
            height: 16px;
            color: #0798f2;
            top: 43%;
            right: 8px;
            .ant-select-arrow-icon {
              line-height: 17px;
            }
          }
        }
      }
      input {
        padding: 4px 43px 4px 0;
        height: 100%;
        width: 59%;
        background: #efefef;
        border: none;
        border-radius: 0 100px 100px 0;
      }
      input:focus {
        outline: none;
      }
      .button-search {
        position: absolute;
        top: 4px;
        right: 4px;
        height: 34px;
        width: 34px;
        background: #d8eae0;
        border-radius: 50%;
        padding: 10px;
      }
    }

    .list-document {
      margin-top: 24px;
      .document-item {
        min-height: 84px;
        margin-top: 8px;
        background: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
        border-radius: 16px;
        padding-right: 8px;
        .img-document {
          float: left;
          display: inline-table;
          background: #e6e6e6;
          border-radius: 8px;
          padding: 8px 13px;
          margin: 12px;
        }
        .title-document {
          font-weight: bold;
          font-size: 14px;
          line-height: 18px;
          color: #272755;
          padding-top: 16px;
          text-transform: uppercase;
        }
        .subtitle {
          color: #9393aa;
          font-weight: normal;
          font-size: 13px;
          line-height: 18px;
          padding-top: 8px;
        }
      }
    }
  }
`;
const MainDetail = styled('div')`
  min-height: 100vh;
  font-family: Muli, sans-serif;
  background: #fafafa;
  border-radius: 6px 6px 0px 0px;
  padding-bottom: 88px;
  .content {
    margin: 0px 16px;
    .title-page {
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      text-align: center;
      color: #272755;
      padding-top: 32px;
      padding-bottom: 12px;
    }
    .document-name {
      position: relative;
      padding-top: 32px;
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      text-align: center;
      text-transform: uppercase;
      color: #04bf55;
      &::after {
        content: '';
        width: 100px;
        background: #9393aa;
        height: 1px;
        display: inline-block;
        position: absolute;
        bottom: -14px;
        left: 36%;
      }
    }
    .main-content {
      margin-top: 28px;
      padding-left: 12px;
      .name-content {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        color: #272755;
      }
      .detail-content {
        white-space: pre-line;
        padding-bottom: 12px;
        padding-top: 8px;
      }
    }
  }
`;
export { Main, MainDetail };
