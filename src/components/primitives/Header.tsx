import React from "react";
import styled from "styled-components";

import Back from "./Back";

const Wrapper = styled.div`
  background: ${ ({ theme }) => theme.colors.bgSecondary };
  padding: ${ ({ theme }) => `${ theme.gaps.small }rem ${ theme.gaps.small }rem`};
`;

const Collumn = styled.div`
  width: ${ ({ theme }) => `${ theme.contentWidth }rem` };
  margin: auto;
`;

/**
 * @typedef Props
 * @prop {Function} [callback] - click callback
 */
export type Props = {
  callback?: Function,
}

const Link: React.FC<Props> = ( props: Props ) => (
  <Wrapper>
    <Collumn>
      <Back
        callback={ props.callback }
      />
    </Collumn>
  </Wrapper>
);

export default Link;