import styled from 'styled-components';

const Main = styled('div')`
  padding: 0 16px 0 16px;
  .content {
    .content-detail {
      .title {
        position: relative;
        padding: 12px 0;
        h1 {
          font-weight: bold;
          font-size: 17px;
          line-height: 20px;
          text-align: center;
          color: #272755;
          margin-bottom: 0;
        }
        .log-out {
          position: absolute;
          top: 12px;
          right: 20px;
        }
      }
      .select {
        margin: 44px 0 24px;
        .placeholder {
          font-weight: normal;
          font-size: 14px;
          color: #9393aa;
        }
        .ant-row {
          .ant-col-12 {
            .ant-select {
              background: #ffffff;
              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
              border-radius: 8px;
              border: none;
              width: 100%;
              height: 52px;
              &.ant-select-enabled {
                font-weight: bold;
                color: #272755;
              }
              .ant-select-selection {
                border: none;
                width: 100%;
                height: 100%;
                .ant-select-selection__rendered {
                  line-height: 52px;
                  .ant-select-selection__placeholder {
                    font-weight: normal;
                    font-size: 14px;
                    color: #9393aa;
                  }
                }
                & .ant-select-arrow {
                  border: 1px solid #0798f2;
                  border-radius: 4px;
                  width: 16px;
                  height: 16px;
                  color: #0798f2;
                  .ant-select-arrow-icon {
                    line-height: 17px;
                  }
                }
              }
              .ant-select-selection__clear {
                & ~ span {
                  display: none;
                }
              }
            }
          }
        }
      }
      & .search {
        position: relative;
        margin: 16px 0;
        & input {
          background: #efefef;
          border-radius: 100px;
          outline: 0;
          border: none;
          width: 100%;
          height: 42px;
          padding: 12px 62px 12px 12px;
        }
        & button {
          width: 54px;
          height: 34px;
          background: #04bf55;
          border-radius: 100px;
          border: none;
          position: absolute;
          right: 4px;
          top: 4px;
        }
      }
      .list-patients {
        height: calc(100vh - 315px);
        position: relative;
        overflow: auto;
        &::-webkit-scrollbar {
          width: 5px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: darkgrey;
          border-radius: 5px;
        }
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1000;
          background-color: #fff;
          &.hidden {
            display: none;
          }
        }
        .list-patient {
          display: flex;
          align-items: center;
          margin: 12px 8px;
          padding: 12px 8px 12px;
          border-radius: 16px;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
          background: #ffffff;
          .avatar {
            width: 60px;
            height: 60px;
            img {
              width: 100%;
              height: auto;
              object-fit: cover;
            }
          }
          .info-patient {
            position: relative;
            width: 100%;
            margin-left: 12px;
            p {
              margin: 0;
            }
            .name {
              font-weight: bold;
              font-size: 14px;
              line-height: 18px;
              text-transform: uppercase;
              color: #272755;
              margin-bottom: 4px;
            }
            .hospital {
              width: fit-content;
              height: 20px;
              left: 100px;
              top: 292px;
              background: #f2cb05;
              border-radius: 2px;
              padding: 2px 8px;
              color: #000;
              font-weight: 500;
            }
            & .ant-row {
              margin-top: 8px;
              & .ant-col-12 {
                height: 100%;
                width: 100%;
                & p {
                  font-size: 13px;
                  line-height: 18px;
                  color: #9393aa;
                }
              }
              & button.ant-btn {
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
                & img {
                  margin-right: 4px;
                }
              }
            }
          }
        }
      }
    }
    .loading-list {
      text-align: center;
    }
  }
  .qr-barcode {
    @media (min-width: 501px) {
      position: fixed !important;
      width: 500px;
      height: 373px;
      top: 65px;
      left: 0;
    }
    @media (min-width: 545px) {
      left: 4vw;
    }
    @media (min-width: 768px) {
      left: 18%;
    }
    @media (min-width: 1024px) {
      left: 29vw;
    }
    .anim-box {
      position: absolute;
      background-color: #dadada63;
      top: 38px;
      left: 0;
      right: 0;
      z-index: 999999;
      width: 100%;
      height: 90vh;
      clip-path: polygon(
        0% 0%,
        0% 100%,
        15% 100%,
        15% 25%,
        85% 25%,
        85% 75%,
        0% 75%,
        18% 100%,
        100% 100%,
        100% 0%
      );
      webkit-clip-path: polygon(
        0% 0%,
        0% 100%,
        15% 100%,
        15% 25%,
        85% 25%,
        85% 75%,
        0% 75%,
        18% 100%,
        100% 100%,
        100% 0%
      );
      @media (min-width: 501px) {
        top: 0;
        height: 100%;
        webkit-clip-path: polygon(
          0% 0%,
          0% 100%,
          25% 100%,
          25% 25%,
          75% 25%,
          75% 75%,
          25% 75%,
          25% 100%,
          100% 100%,
          100% 0%
        );
        clip-path: polygon(
          0% 0%,
          0% 100%,
          25% 100%,
          25% 25%,
          75% 25%,
          75% 75%,
          25% 75%,
          25% 100%,
          100% 100%,
          100% 0%
        );
      }
      &::before {
        top: 24.5%;
        left: 14.5%;
        border-width: 2px 0 0 2px;
        @media (min-width: 501px) {
          left: 24.5%;
        }
      }
      &::after {
        top: 24.5%;
        right: 14.5%;
        border-width: 2px 2px 0 0;
        @media (min-width: 501px) {
          right: 24.5%;
        }
      }
    }

    .anim-box:before,
    .anim-box:after,
    .anim-box > :first-child:before,
    .anim-box > :first-child:after {
      position: absolute;
      width: 40px;
      height: 40px;
      border-color: rgba(255, 0, 0, 0.5);
      border-style: solid;
      content: ' ';
    }
    .anim-box > :first-child:before {
      bottom: 24.5%;
      right: 14.5%;
      border-width: 0 2px 2px 0;
      @media (min-width: 501px) {
        right: 24.5%;
      }
    }

    .anim-box > :first-child:after {
      bottom: 24.5%;
      left: 14.5%;
      border-width: 0 0 2px 2px;
      @media (min-width: 501px) {
        left: 24.5%;
      }
    }
    video {
      @media (max-width: 500px) {
        position: fixed;
        top: 38px;
        z-index: 99999;
        left: 0;
        right: 0;
        width: 100%;
      }
      @media (min-width: 501px) {
        height: 100%;
        width: 100%;
      }
    }
    span {
      cursor: pointer;
      display: inline-block;
      position: absolute;
      z-index: 9999999999999;
      @media (max-width: 500px) {
        top: 53px;
        right: 20px;
      }
      @media (min-width: 501px) {
        top: 16px;
        right: 20px;
      }
      svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }
`;

export { Main };
