import React from "react";
import styled from "styled-components";

import Icon from "./Icon";
import Label from "./Label";

export const ButtonStyled = styled.button`
  display: flex;
  gap: ${({ theme }) => `${ theme.gaps.small }rem` };
  align-items: center;
  border: none;
  color: ${ ({ theme }) => theme.colors.font };

  &:hover {
    opacity: 0.5;
  }
`;

/**
 * @typedef Props
 * @prop {Function} callback - callback on click
 * @prop {string} pic - name of icon in sprite
 * @prop {string} text - text to be displayed in button
 */
export type Props = {
  callback: Function,
  pic?: string,
  text?: string,
}

const Button: React.FC<Props> = ( props: Props ) =>
  <ButtonStyled onClick={ () => props.callback() }>
    { props.pic && <Icon name={ props.pic }/> }
    { props.text && <Label text={ props.text }/> }
  </ButtonStyled>

export default Button;