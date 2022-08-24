import React, { ReactNode } from "react";
import styled from "styled-components";

import PlayerIcon from "./PlayerIcon";

export const ButtonStyled = styled.button`
  display: flex;
  gap: ${({ theme }) => `${ theme.gaps.small }rem` };
  align-items: center;
  border: none;
  color: ${ ({ theme }) => theme.colors.font };
`;

/**
 * @typedef Props
 * @prop {Function} callback - callback on click
 * @prop {boolean} [active] - use active icon
 * @prop {string} [pic] - name of icon in sprite
 */
export type Props = {
  callback: Function,
  active?: boolean;
  pic?: string,
}

const PlayerButton: React.FC<Props> = ( props: Props ) =>
  <ButtonStyled onClick={ () => props.callback() }>
    { props.pic && <PlayerIcon name={ props.pic } active={ props.active }/> }
  </ButtonStyled>

export default PlayerButton;