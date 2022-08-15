import React from "react";
import styled from "styled-components";

const Input = styled.input`
  overflow: hidden;
  -webkit-appearance: none;
  background-color: ${ ({ theme }) => theme.colors.darkBg};

  &::-webkit-slider-thumb {
    width: ${ ({ theme }) => `${ theme.rangeSize }rem`};
    -webkit-appearance: none;
    height: ${ ({ theme }) => `${ theme.rangeSize }rem`};
    cursor: pointer;
    background: ${ ({ theme }) => theme.colors.main };
    box-shadow: -5000px 0 0 5000px ${ ({ theme }) => theme.colors.main };
  }
`;

/**
 * @typedef Props
 * @prop {Function} callback - callback on change
 * @prop {number} value
 * @prop {number} max - max value
 */
export type Props = {
  callback?: Function,
  value: number,
  max?: number,
}

const Range: React.FC<Props> = ( props: Props ) =>
  <Input 
    type="range" 
    onChange={ e => props.callback( e.target.value ) } 
    value={ props.value }
    max={ props.max || 100 }
  />

export default Range;