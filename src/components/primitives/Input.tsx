import React from "react";
import styled from "styled-components";

const InputStyled = styled.input<{ }>`
  height: ${ ({ theme }) => `${ theme.iconSize }rem` };
  line-height: ${ ({ theme }) => `${ theme.iconSize }rem` };
  font-size: ${ ({ theme }) => `${ theme.font.secondary.size }rem` };
  color: ${ ({ theme }) => theme.colors.font };
  background: ${ ({ theme }) => theme.colors.darkBg };
  border: 1px solid ${ ({ theme }) => theme.colors.darkBg };
  border-radius: ${ ({ theme }) => `${ theme.decorative.borderRadius }px` };
  padding: ${ ({ theme }) => `${ theme.decorative.padding }px`};

  &:focus {
    border: 1px solid ${ ({ theme }) => theme.colors.main };
  }

  &::placeholder { /* WebKit, Blink, Edge */
    font-size: ${ ({ theme }) => `${ theme.font.secondary.size }rem` };
    opacity: ${ ({ theme }) => theme.font.secondary.opacity };
  }
`;

/**
 * @typedef Props
 * @prop {Function} callback - callback on input
 * @prop {string} value
 */
export type Props = {
  callback: Function,
  value: string,
  placeholder?: string,
}

const Input: React.FC<Props> = ( props: Props ) =>
  <InputStyled onChange={ e => props.callback(e.target.value) } value={ props.value } placeholder={ props.placeholder }/>

export default Input;