import React from "react";
import styled from "styled-components";

export const P = styled.p<{ secondary: boolean }>`
  font-size: ${ props => props.secondary ? ({ theme }) => `${ theme.font.secondary.size }rem` : ({ theme }) => `${ theme.font.primary.size}rem` };
  opacity: ${ props => props.secondary ? ({ theme }) => theme.font.secondary.opacity : ({ theme }) => theme.font.primary.opacity };
`;

/**
 * @typedef Props
 * @prop {string} text - display text
 * @prop {boolean} secondary - use secondary color
 */
export type Props = {
  text: string,
  secondary?: boolean,
}

const Label: React.FC<Props> = ( props: Props ) => 
  <P secondary={ props.secondary } >
    { props.text }
  </P>

export default Label;