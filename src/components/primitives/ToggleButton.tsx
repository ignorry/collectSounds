import React from "react";
import styled from "styled-components";

import Icon from "./Icon";
import Label from "./Label";

const ButtonStyled = styled.button<{ active: boolean }>`
  display: flex;
  gap: ${({ theme }) => `${ theme.gaps.small }rem` };
  align-items: center;
  border: none;
  color: ${ props => props.active ? ({ theme }) => theme.colors.main : ({ theme }) => theme.colors.font };
`;

/**
 * @typedef Props
 * @prop {Function} callback - callback on click
 * @prop {boolean} secondary - use secondary label
 * @prop {boolean} active - is button active
 * @prop {string} pic - name of icon in sprite
 * @prop {string} text - text to be displayed in button
 */
export type Props = {
  callback: Function,
  secondary?: boolean,
  active: boolean,
  pic?: string,
  text?: string,
}

const ToggleButton: React.FC<Props> = ( props: Props ) =>
  <ButtonStyled onClick={ () => props.callback() } active={ props.active }>
    { props.pic && <Icon name={ props.pic } active={ props.active } /> }
    { props.text && <Label text={ props.text } secondary={ props.secondary }/> }
  </ButtonStyled>

export default ToggleButton;