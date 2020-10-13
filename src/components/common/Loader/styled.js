import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: -15px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation-fill-mode: both;
  animation: load7 1.8s infinite ease-in-out;
  color: grey;
  font-size: 5px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
  &::before,
  &::after {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    animation-fill-mode: both;
    animation: load7 1.8s infinite ease-in-out;
    content: '';
    position: absolute;
    top: 0;
  }

  &::before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &::after {
    left: 3.5em;
  }

  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;
