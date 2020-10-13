import styled from 'styled-components';

const Main = styled('div')`
  .external-link {
    text-decoration: underline;
  }
  & .content {
    & .content-detail {
      padding-bottom: 90px;
      & .title {
        margin: 12px 0;
        & h1 {
          font-weight: bold;
          font-size: 17px;
          line-height: 20px;
          text-align: center;
          color: #272755;
          margin-bottom: 0;
        }
      }
      & .select {
        margin: 44px 16px 16px;
        .selectRoom {
          .ant-select-selection {
            .ant-select-selection__rendered {
              .ant-select-selection__placeholder {
                font-weight: normal !important;
                color: #9393aa !important;
              }
            }
          }
          .ant-select-selection-selected-value {
            font-weight: bold;
            font-size: 15px;
            color: rgb(39, 39, 85);
          }
          .ant-select-dropdown-menu-item {
            display: flex !important;
            align-items: center;
            width: 100%;
            & img {
              margin-right: 5px;
            }
          }
        }
        .ant-select {
          background: #ffffff;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          border: none;
          width: 100%;
          height: 52px;
          &.ant-select-disabled {
            span {
              color: rgba(0, 0, 0, 0.25) !important;
              border: 1px solid rgba(0, 0, 0, 0.25) !important;
            }
          }
          .ant-select-selection {
            border: none;
            width: 100%;
            height: 100%;
            .ant-select-selection__rendered {
              line-height: 52px;
              .ant-select-selection__placeholder {
                font-weight: bold;
                font-size: 14px;
                color: #272755;
              }
            }
            .ant-select-arrow {
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
        }
      }
      & .list-patient {
        position: relative;
        background: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
        border-radius: 16px;
        margin: 12px 16px;
        & .avatar {
          position: absolute;
          top: 16px;
          left: 12px;
          & img {
            max-width: 60px;
          }
        }
        & .info-patient {
          position: relative;
          padding: 12px 0 12px 84px;
          & p {
            margin: 0;
            font-size: 13px;
          }
          & .name {
            font-weight: bold;
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
            color: #272755;
            margin-bottom: 4px;
          }
          & .hospital {
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
          & .address {
            margin-top: 8px;
          }
        }
      }
      .service {
        margin: 8px 16px;
        .service-detail {
          background: #350d8c;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
          position: relative;
          border-radius: 17px;
          margin-bottom: 12px;
          .ant-collapse-arrow {
            padding: 3px;
            background: #ffffff;
            border: 2px solid #ffffff;
            border-radius: 4px;
            svg {
              width: 11px;
              height: 11px;
              fill: #350d8c;
            }
          }
          .ant-collapse-content {
            > .ant-collapse-content-box {
              padding: 0;
            }
          }
          .title-service {
            h3 {
              font-size: 15px;
              color: #ffffff;
              margin: 0;
            }
          }
          .content-service {
            background: #fff;
            padding: 16px 12px;
            border-radius: 0 0 16px 16px;
            .ant-collapse-item {
              margin-bottom: 8px;
              background-color: #fafafa;
            }
            .info {
              margin-bottom: 14px;
              h4 {
                font-weight: bold;
                font-size: 16px;
                line-height: 20px;
                text-transform: uppercase;
                color: #04bf55;
                margin-bottom: 8px;
              }
              p {
                font-weight: bold;
                font-size: 14px;
                line-height: 18px;
                color: #272755;
                margin-bottom: 8px;
              }
              span {
                font-weight: normal;
                font-size: 14px;
                line-height: 18px;
                color: #9393aa;
                margin-bottom: 8px;
                display: block;
                white-space: pre-line;
              }
              .image {
                margin-bottom: 16px;
                img {
                  width: 25%;
                  display: inline-block;
                  padding: 5px;
                }
              }
            }
            .medical-examination {
              & h4 {
                font-weight: bold;
                font-size: 16px;
                line-height: 20px;
                text-transform: uppercase;
                color: #04bf55;
              }
              p {
                font-weight: bold;
                font-size: 14px;
                line-height: 18px;
                color: #272755;
                margin-bottom: 8px;
              }
              span {
                font-weight: normal;
                font-size: 14px;
                line-height: 18px;
                color: #9393aa;
                margin-bottom: 8px;
                display: block;
                white-space: pre-line;
              }
            }
            .function {
              h4 {
                font-weight: bold;
                font-size: 16px;
                line-height: 20px;
                text-transform: uppercase;
                color: #04bf55;
              }
              p {
                font-weight: bold;
                font-size: 14px;
                line-height: 18px;
                color: #272755;
                margin-bottom: 8px;
              }
              span {
                font-weight: normal;
                font-size: 14px;
                line-height: 18px;
                color: #9393aa;
                margin-bottom: 8px;
                display: block;
              }
              .t01 {
                width: 100%;
                border-radius: 16px;
                overflow: hidden;
                th {
                  background-color: #e2deeb;
                  color: #350d8c;
                  padding: 7px;
                  text-align: left;
                }
                td {
                  padding: 7px;
                  text-align: left;
                  p {
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 18px;
                    color: #272755;
                    margin: 0;
                  }
                  .name {
                  }
                  .note {
                    font-weight: normal;
                  }
                  .quantity {
                    font-weight: 500;
                  }
                }
                tr:nth-child(odd) {
                  background: #fff;
                  color: #272755;
                }
                tr:nth-child(even) {
                  background: #f5f5f5;
                  border-radius: 6px;
                  color: #272755;
                }
                .result {
                  text-align: center;
                  color: #000000;
                  &.bold-text {
                    font-weight: bold;
                    color: #2585c1;
                  }
                }
              }
            }
            .test {
              margin-bottom: 16px;
              &:last-child {
                margin-bottom: 0;
              }
              h4 {
                padding: 0;
              }
              p {
                font-size: 14px;
                line-height: 18px;
                color: #272755;
              }
            }

            .ant-collapse {
              background-color: #fff;
              border: none;
              .ant-collapse-item {
                background-color: #fff;
                border: none;
                &:last-child {
                  margin-bottom: 0;
                }
              }
              .ant-collapse-header {
                margin: 0 -12px 0;
                text-transform: uppercase;
                font-size: 16px;
                font-weight: bold;
                background: #e6f9ee;
                color: #04bf55;
              }
              .ant-collapse-content {
                margin-top: 8px;
                border: 0;
                .ant-collapse-content-box {
                  padding: 0 0 20px 0;
                  &:last-child {
                    padding: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { Main };
