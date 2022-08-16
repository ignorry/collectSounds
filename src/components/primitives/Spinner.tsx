import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.svg`
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  animation: rotate 2s linear infinite;
  height: ${ ({ theme }) => `${ theme.spinnerSize }rem`};
  transformOrigin: center center;
  width: ${ ({ theme }) => `${ theme.spinnerSize }rem`};
`;

const Circle = styled.circle`
  @keyframes dash {
    0% {
      stroke-dasharray: 1,200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89,200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89,200;
      stroke-dashoffset: -124px;
    }
  }

  strokeDasharray: 1,200;
  strokeDashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  strokeLinecap: round;
  stroke: ${ ({theme}) => theme.colors.main };
`;


const Spinner: React.FC = () => (
  <Div>
    <Svg viewBox="25 25 50 50">
      <Circle cx="50" cy="50" r="20" fill="none" strokeWidth={5} strokeMiterlimit="10"/>
    </Svg>
  </Div>
);

export default Spinner;