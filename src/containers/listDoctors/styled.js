import styled from 'styled-components';

const Main = styled('div')`
  .content {
    .content-detail {
      padding: 0 16px;
      .title {
        padding: 12px 0;
        h1 {
          font-weight: bold;
          font-size: 17px;
          line-height: 20px;
          text-align: center;
          color: #272755;
          margin-bottom: 0;
        }
      }
      .search {
        position: relative;
        margin: 44px 0 16px;
        input {
          background: #efefef;
          border-radius: 50px;
          border: none;
          width: 100%;
          height: 42px;
          padding: 12px 62px 12px 188px;
          &:focus {
            outline: 0;
          }
        }
        button {
          width: 34px;
          height: 34px;
          background: #d8eae0;
          border-radius: 100px;
          border: none;
          position: absolute;
          right: 4px;
          top: 4px;
          img {
            display: block;
            margin: auto;
          }
        }
        .ant-select {
          background: #ffffff;
          border-radius: 50px;
          border: none;
          width: 180px;
          height: 34px;
          position: absolute;
          top: 4px;
          left: 4px;
          .ant-select-selection {
            border: none;
            width: 100%;
            height: 100%;
            border-radius: 50px;
            .ant-select-selection__rendered {
              .ant-select-selection__placeholder {
                font-weight: 500;
                font-size: 14px;
                color: #272755;
              }
              .ant-select-selection-selected-value {
                font-weight: 500;
                font-size: 14px;
                color: #272755;
              }
            }
            .ant-select-arrow {
              border: 1px solid #0798f2;
              border-radius: 4px;
              width: 14px;
              height: 14px;
              color: #0798f2;
              transform: translateY(-2px);
              .ant-select-arrow-icon {
                line-height: 14px;
                font-size: 10px;
              }
            }
          }
        }
      }
      .list-patients {
        height: calc(100vh - 221px);
        overflow: auto;
        &::-webkit-scrollbar {
          width: 5px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: darkgrey;
          border-radius: 5px;
        }
        .list-patient {
          display: flex;
          margin-bottom: 8px;
          background: #ffffff;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
          border-radius: 16px;
          padding: 12px 16px;
          .avatar {
            margin-right: 12px;
            width: 60px;
            height: 60px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .info-patient {
            p {
              margin: 0;
              color: #9393aa;
              font-size: 14px;
              font-weight: 400;
              a {
                color: #9393aa;
              }
            }
            .name {
              font-weight: bold;
              font-size: 14px;
              line-height: 18px;
              text-transform: uppercase;
              color: #272755;
              margin-bottom: 4px;
            }
            .faculty {
              width: fit-content;
              height: 20px;
              left: 100px;
              top: 292px;
              background: #04bf55;
              border-radius: 2px;
              padding: 2px 8px;
              font-weight: 500;
              color: #000;
              font-size: 13px;
            }
            .address {
              margin-top: 8px;
            }
            .ant-row {
              margin-top: 8px;
              .ant-col-12 {
                height: 100%;
                width: 100%;
                p {
                  font-size: 13px;
                  line-height: 18px;
                  color: #9393aa;
                }
              }
              button.ant-btn {
                padding: 6px 12px;
                height: 32px;
                background: #0798f2;
                border-radius: 50px;
                color: #fff;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                position: absolute;
                bottom: 0;
                right: 12px;
                display: flex;
                align-items: center;
                img {
                  margin-right: 4px;
                }
              }
            }
          }
        }
      }
    }
    .footer {
      position: fixed;
      bottom: 0;
      z-index: 9999 !important;
      background: #fff;
      width: 100%;
      box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: space-evenly;
      height: 88px;
      align-items: center;
      .footer-item {
        text-align: center;
        padding: 6px 10px;
        border-radius: 16px;
        & div {
          font-size: 14px;
          line-height: 18px;
          color: #9393aa;
        }
      }
      .footer-item.active {
        background: rgba(7, 152, 242, 0.1);
        div {
          color: #0798f2;
          font-weight: 500;
        }
      }
    }
  }
  & .ant-select-search--inline {
    display: none !important;
  }
`;

export { Main };
