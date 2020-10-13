import styled from 'styled-components';
const Main = styled('div')`
  font-family: Muli, sans-serif;
  background: #fafafa;
  border-radius: 6px 6px 0px 0px;
  padding-bottom: 88px;
  height: 100vh;
  .dictionary-page {
    margin: 0px 16px;
    height: 100vh;
    .page-header {
      padding-top: 32px;
      padding-bottom: 12px;
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      text-align: center;
      color: #272755;
    }
    .search-box {
      position: relative;
      margin-top: 32px;
      .search-input {
        position: relative;
        & input {
          height: 42px;
          width: 100%;
          border: none;
          padding: 5px 15px;
          background: #efefef;
          border-radius: 100px;
        }
        &: focus {
          border: none;
        }
        .button-search {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 4px;
          height: 34px;
          width: 34px;
          background: #d8eae0;
          border-radius: 50%;
          svg {
            margin: 9px;
          }
        }
      }
      .search-result {
        position: absolute;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        right: 0;
        left: 0;
        top: 46px;
        display: none;
        &.active{
          display: block;
        }
        .option-result {
          height: 393px;
          overflow: auto;
          padding: 10px;
          margin: 10px;
          font-size: 15px;
          line-height: 19px;
          color: #272755;
          .loading-list{
            display: block;
            align-item: center;
          }
          .name-result {
            font-weight: bold;
          }
          span {
            font-weight: bold;
          }
        }
      }
    }
    .body-page {
      .word-original {
        font-weight: bold;
        margin-left: 16px;
        margin-top: 20px;
        .title-word {
          font-size: 14px;
          line-height: 18px;
          color: #272755;
        }
        .word-below {
          margin-top: 8px;
          font-style: italic;
          font-size: 16px;
          line-height: 20px;
          color: #04bf55;
        }
      }
      .Viet-mean {
        margin-top: 17px;
        background: #350d8c;
        border-radius: 16px;
        font-weight: bold;
        color: #fafafa;
        padding: 16px;
        min-height: 150px;
        span {
          font-size: 14px;
          line-height: 18px;
        }
        .mean-inner {
          margin-top: 16px;
          font-size: 18px;
          line-height: 23px;
        }
      }
      .explain-mean {
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        color: #272755;
        font-size: 14px;
        line-height: 18px;
        margin-top: 8px;
        padding: 16px;
        min-height: 150px;
        span {
          font-weight: bold;
        }
        .explain-inner {
          margin-top: 16px;
          font-weight: normal;
        }
      }
    }
  }
`;
export { Main };
