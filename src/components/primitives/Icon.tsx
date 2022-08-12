import React from "react";
import styled from "styled-components";

export const Svg = styled.svg<{ active: boolean }>`
  stroke: ${ props => props.active ? ({ theme }) => theme.colors.main : ({ theme }) => theme.colors.font };
  fill: ${ props => props.active ? ({ theme }) => theme.colors.main : ({ theme }) => theme.colors.font };
  width: ${ ({ theme }) => `${ theme.iconSize }rem` };
  height: ${ ({ theme }) => `${ theme.iconSize }rem` };
`;

/**
 * @typedef Props
 * @prop {string} name - name of icon in sprite
 * @prop {boolean} active - use secondary color
 */
export type Props = {
  name: string,
  active?: boolean,
}

const Icon: React.FC<Props> = ( props: Props ) =>
  <Svg active={ props.active }>
    <use href={ `icons.svg#${ props.name }` }/>
  </Svg>;

export default Icon;