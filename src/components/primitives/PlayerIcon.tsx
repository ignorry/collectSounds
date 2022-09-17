import React from "react";
import styled from "styled-components";

const BASE_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "" : "/collectSounds/";

export const Svg = styled.svg<{ active: boolean }>`
  stroke: ${ props => props.active ? ({ theme }) => theme.colors.main : ({ theme }) => theme.colors.font };
  fill: ${ props => props.active ? ({ theme }) => theme.colors.main : ({ theme }) => theme.colors.font };
  width: ${ ({ theme }) => `${ theme.player.iconSize }rem` };
  height: ${ ({ theme }) => `${ theme.player.iconSize }rem` };
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

const PlayerIcon: React.FC<Props> = ( props: Props ) =>
  <Svg active={ props.active }>
    <use href={ `${ window.location.origin }${ BASE_URL || '/' }icons.svg#${ props.name }` }/>
  </Svg>;

export default PlayerIcon;