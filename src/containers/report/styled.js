import styled from 'styled-components';

const Main = styled('div')`
  background: #fafafa;
  border-radius: 6px 6px 0px 0px;
  font-family: Muli;
  padding: 0 16px 88px 16px;
  .head {
    &--title {
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      text-align: center;
      color: #272755;
      padding: 12px;
    }
  }
  .content {
    &--title {
      margin: 32px -16px 12px -16px;
      padding: 15px;
      background: #e9f5fe;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      text-transform: uppercase;
      color: #0798f2;
    }
    &--time {
      margin-bottom: 20px;
      text-align: center;
      input {
        background: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
        width: 167px;
        height: 52px;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        color: #272755;
        border: none;
        &::placeholder {
          color: #272755;
        }
      }
      .ant-calendar-picker-icon {
        color: #272755;
      }
      & .ant-select {
        margin-bottom: 10px;
        background: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
        border: none;
        width: 100%;
        height: 52px;
        input {
          width: 100% !important;
        }
        & .ant-select-selection {
          border: none;
          width: 100%;
          height: 100%;
          & .ant-select-selection__rendered {
            margin: 0;
            line-height: 52px;
            .ant-select-selection__placeholder,
            .ant-select-selection-selected-value {
              padding: 4px 11px;
              font-weight: bold;
              font-size: 14px;
              color: #272755;
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
      }
    }
    &--chart{
      &--title{
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #272755;
        padding: 12px 0;
        text-transform: uppercase;
      }
    }
  }
`;
const MainChart = styled.div`
  .highcharts-figure {
    position: relative;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    .highcharts-legend,
    .highcharts-title,
    .highcharts-axis-title {
      display: none;
    }
    &--bn {
      text-align: right;
      position: absolute;
      bottom: -2px;
      right: 0;
    }
    .highcharts-axis-labels {
      text {
        fill: #999999 !important;
        font-size: 12px !important;
        line-height: 15px;
        color: #999999 !important;
      }
    }
    tspan {
      font-size: 12px;
      line-height: 15px;
      font-family: Muli, sans-serif;
    }
  }
  .highcharts-info {
    padding: 12px 0 36px;
    border-top: 1px solid #e6e6e6;
    font-size: 13px;
    line-height: 16px;
    color: #333333;
    display: flex;
    justify-content: space-evenly;
    &--vaovien,
    &--ravien {
      display: flex;
      align-items: center;
      &::before {
        display: inline-block;
        content: '';
        width: 24px;
        background: #d2d700;
        height: 24px;
        margin-right: 12px;
      }
    }
    &--ravien {
      margin-right: 29px;
      &::before {
        background: #259b54 !important;
      }
    }
  }
`;
export { Main, MainChart };
