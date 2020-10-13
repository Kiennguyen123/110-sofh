import styled from 'styled-components';

export const Wrapper = styled('footer')`
  z-index: 999999;
  display: flex;
  width: 100%;
  height: 88px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.2);
  justify-content: space-evenly;
  align-items: center;
  .footer--item {
    text-align: center;
    cursor: pointer;
    &.active {
      pointer-events: none;
      background: rgba(7, 152, 242, 0.1);
      border-radius: 16px;
      padding: 4px 11.6px;
      div {
        color: #0798f2;
      }
      svg {
        fill: #0798f2;
      }
    }
    div {
      margin-top: 2px;
      font-size: 14px;
      line-height: 18px;
      color: #9393aa;
    }
    svg {
      vertical-align: middle;
    }
  }
`;
