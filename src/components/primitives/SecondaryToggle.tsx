import React, { ReactNode } from "react";
import styled from "styled-components";

import Label from "./Label";

const ButtonStyled = styled.button<{ active: boolean }>`
  border: none;
  color: ${ props => props.active ? ({ theme }) => 'black' : ({ theme }) => theme.colors.font };
  background: ${ props => props.active ? ({ theme }) => theme.colors.main : 'rgba(0,0,0,0)' };
  padding: ${ ({ theme }) => `${ theme.decorative.padding }px` };
  border-radius: ${ ({ theme }) => `${ theme.decorative.borderRadius }px` };
`;

/**
 * @typedef Props
 * @prop {Function} callback - callback on click
 * @prop {boolean} active - is button active
 * @prop {string|ReactNode} text - text to be displayed in button
 */
export type Props = {
  callback: Function,
  active: boolean,
  text: string | ReactNode,
}

const ToggleButton: React.FC<Props> = ( props: Props ) =>
  <ButtonStyled onClick={ () => props.callback() } active={ props.active }>
    <Label text={ props.text } secondary/>
  </ButtonStyled>

export default ToggleButton;