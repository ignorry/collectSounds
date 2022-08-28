import React from "react";
import styled from "styled-components";
import Label from "./Label";

import SecondaryToggle from "./SecondaryToggle";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem`};
`

/**
 * @typedef Props
 * @prop {Array<string>} [tags] - active tag
 */
export type Props = {
  tags?: Array<string>
}

const TagsList: React.FC<Props> = ( props: Props ) => props.tags && props.tags.length ?
  <Container>
    <Label text='#' secondary/>
    { props.tags.map( ( tag: any ) =>
      <Label text={tag} secondary/>
    )}
  </Container> : null;

export default TagsList;