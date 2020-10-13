import styled from 'styled-components';

const Main = styled('div')`
  font-family: Muli, sans-serif;
  padding: 0 16px 131px 16px;
  .head {
    &--title {
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
      text-align: center;
      color: #272755;
      padding: 12px 0 44px;
    }
  }
  .content {
    &--item {
      margin-bottom: 20px;
      overflow: hidden;
    }
    &--title {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #272755;
      margin-bottom: 7px;
    }
    &--box-gender {
      text-align: center;
    }
    &--name {
      padding-left: 17.19px;
    }
    &--gender {
      display: inline-block;
      width: 343px;
      height: 42px;
      background: #eae7f4;
      border-radius: 100px;
      padding: 3px;
      svg{
        margin-bottom: -4px;
      }
      .ant-radio-button-wrapper:not(:first-child)::before {
        display: none;
      }
      .ant-radio-button-wrapper {
        justify-content: center;
        align-items: center;
        display: inline-flex;
        border-radius: 100px;
        width: 166px;
        font-weight: bold;
        height: 36px;
        color: #272755;
        border: none !important;
        &:nth-child(2) {
          margin-left: 4px;
        }
        .ant-radio-button {
          background-color: transparent;
        }
        img {
          padding-bottom: 2px;
        }
      }
      .ant-radio-button-wrapper-checked {
        background: #0798f2;
        color: #ffffff;
      }
    }
  }
  .btn-action {
    margin-bottom: 40px;
    text-align: center;
    .ant-btn {
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      font-weight: bold;
      width: 313px;
      height: 48px;
      background: #0798f2;
      border-radius: 16px;
    }
  }
  .info-index {
    display: flex;
    align-items: center;
    justify-content: center;
    &--item {
      padding: 12px 16px;
      width: 342px;
      height: 140px;
      background: #350d8c;
      border-radius: 16px;
      position: relative;
    }
    &--title {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #fafafa;
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
      }
    }
    &--content {
      font-weight: bold;
      font-size: 54px;
      line-height: 68px;
      color: #fafafa;
      margin: 7px 0 17px;
    }
    &--detail {
      position: absolute;
      top: -137px;
      left: 0;
      &--main {
        font-style: italic;
        font-weight: bold;
        width: 339px;
        min-height: 124px;
        background: #ffffff;
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
        border-radius: 16px;
        padding: 12px 16px;
        position: relative;
        span {
          font-size: 24px;
          line-height: 35px;
          color: #350d8c;
        }
        div {
          font-size: 14px;
          line-height: 18px;
          color: #272755;
        }
        svg {
          position: absolute;
          bottom: -25px;
          left: 91px;
        }
      }
    }
  }
`;
export { Main };
