import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllTags } from "../../../../lib/redux/getAllTags";

import SecondaryToggle from "../../../primitives/SecondaryToggle";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem`};
`

/**
 * @typedef Props
 * @prop {Function} callback
 * @prop {string} [active] - active tag
 */
export type Props = {
  callback: Function;
  active?: string
}

const Tags: React.FC<Props> = ( props: Props ) => {
  const dispatch = useDispatch();
  const tags = dispatch( getAllTags() as any );

  return (
    <Container>
      { tags && tags.map( ( tag: any ) =>
        <SecondaryToggle text={tag} callback={() => props.callback( tag )} active={ tag === props.active }/>
      )}
    </Container>
  )
};

export default Tags;