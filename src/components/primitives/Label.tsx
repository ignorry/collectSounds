import React, { ReactNode } from "react";
import styled from "styled-components";

export const P = styled.p<{ secondary: boolean }>`
  font-size: ${ props => props.secondary ? ({ theme }) => `${ theme.font.secondary.size }rem` : ({ theme }) => `${ theme.font.primary.size}rem` };
  opacity: ${ props => props.secondary ? ({ theme }) => theme.font.secondary.opacity : ({ theme }) => theme.font.primary.opacity };
  white-space: pre-line;
`;

/**
 * @typedef Props
 * @prop {string | ReactNode} text - display text
 * @prop {boolean} secondary - use secondary color
 */
export type Props = {
  text: string | ReactNode,
  secondary?: boolean,
}

const Label: React.FC<Props> = ( props: Props ) => 
  <P secondary={ props.secondary } >
    { props.text }
  </P>

export default Label;