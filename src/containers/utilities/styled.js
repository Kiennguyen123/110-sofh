import styled from 'styled-components';

const Main = styled('div')`
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
    .extensions {
      margin-top: 36px;
      margin-top: 23px;
      &--collection {
        background: #f4f4f5;
        border-radius: 16px;
        padding: 10px 0px;
        display: flex;
        flex-wrap: wrap;
        padding-right: 12px;
        @media (max-width: 1920px) {
          justify-content: space-evenly;
          padding-top: 21px;
        }
        @media (max-width: 715px) {
          width: 459px;
          margin: auto;
        }
        @media (max-width: 488px) {
          width: 348px;
          margin: auto;
        }
      }
    }
  }
`;
const Extensions = styled('div')`
  background: ${(props) =>
    props.background ? props.background : '#dcefe5'};
  border-radius: 16px;
  margin-left: 12px;
  margin-bottom: 12px;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => (props.color ? props.color : '#04bf55')};
  font-weight: bold;

  width: 100px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100px;
  div {
    margin: 8px 0;
  }

  & + & + & + & + & div {
    margin-top: 16px;
  }
  & + & + & + & + & + & div {
    margin: 8px 0;
  }
`;
export { Main, Extensions };
