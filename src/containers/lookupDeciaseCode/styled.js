import styled from 'styled-components';

const Main = styled.div`
  padding: 0 16px 0 16px;
  background: #fafafa;
  .style-title {
    padding-top: 24px;
    margin-bottom: 44px;
    text-align: center;
    h1 {
      font-family: Muli;
      font-style: normal;
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
    }
  }
  .style-inner-menu {
    height: 42px;
    position: relative;
    background: #efefef;
    border-radius: 100px;
    .style-input {
      &:focus {
        outline: none;
      }
      height: 100%;
      width: 100%;
      border: none;
      padding-left: 24px;
      border-radius: 24px;
      background: #efefef;
    }
    .style-btn-submit {
      &:focus {
        outline: none;
      }
      width: 42px;
      height: 42px;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 24px;
      border: none;
      background-color: #d7eae0;
    }
  }

  .style-menu-select {
    margin-top: 22px;
    display: flex;
    div {
      span {
        width: 64px;
        height: 54px;
      }
    }
    .stype-div-dau {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      text-align: center;
      width: 87px;
      color: white;
      height: 54px;
      background: #350d8c;
      border-radius: 6px 0px 0px 6px;
      padding-top: 14px;
    }
    .style-span-one {
      height: calc(100vh - 247px);
      overflow: auto;
      width: 100%;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 5px;
      }
      .ant-collapse {
        border: none;
      }
      .ant-collapse-header {
        padding: 0px !important;
        /* position: relative; */
        height: auto !important;
      }
      .style-inner-title {
        display: flex;
        line-height: 16px;
        .style-code {
          border-radius: 6px 0px 0px 6px;
          padding-top: 19px;
          padding-right: 19px;
          padding-left: 17px;
          height: auto;
          /* padding: 17px 6% 0px 6%; */
          font-weight: bold;
          background: #350d8c;
          text-align: center;
          color: white;
        }
        div span:nth-child(1) {
          font-size: 14px;
          font-weight: bold;
          color: #272755;
        }
        p:nth-child(2) {
          font-size: 14px !important;
          color: #9393aa !important;
        }
        .style-dich-bbenh {
          margin-right: 32px;
          line-height: 19px;
          margin-top: 11px;
          margin-left: 22px;
          margin-bottom: 11px;
        }
      }
      .style-inner-span {
        border: none;
        width: 100%;
        border-radius: 6px;
        margin-bottom: 12px;
        background: #e8ebf1;
        border-radius: 6px;
        .style-table-one {
          position: relative;
          min-height: 50px;
          .pending {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            position: absolute;
            background: #fafafa;
          }
          .table-row {
            display: flex;
            background: #ffffff;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            padding: 11px;
            margin-top: 6px;
            &--first {
              width: 76px;
              padding-right: 7px;
              font-style: normal;
              font-weight: bold;
              font-size: 16px;
              color: #e2474b;
            }
            &--last {
              font-family: Muli;
              font-style: normal;
              font-weight: bold;
              font-size: 14px;
              color: #272755;
              div {
                &:last-child {
                  font-style: normal;
                  font-weight: normal;
                  color: #9393aa;
                }
              }
            }
          }
        }
      }
      .ant-collapse-content-box {
        padding: 0;
      }
      .ant-collapse-content {
        /* position: absolute; */
        width: 100%;
        /* margin-top: 10px !important; */
        /* margin: 0 13px 0 13px; */
        left: 1px;
        width: 100%;
        background: #ffffff;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 6px;

        .ant-collapse-content-active {
          width: 100%;
        }
      }
    }
  }
`;
export { Main };
