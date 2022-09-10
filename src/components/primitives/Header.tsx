import React, { useRef } from "react";
import styled from "styled-components";

import Back from "./Back";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${ ({ theme }) => theme.colors.bgSecondary };
  padding: ${ ({ theme }) => `${ theme.gaps.small }rem ${ theme.gaps.small }rem`};
  z-index: ${ ({ theme }) => theme.order.header };
`;

const Collumn = styled.div`
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem` };
  margin: auto;
`;

const Fix = styled.div<{ height: number }>`
  height: ${ props => `${ props.height }px` };
`;

/**
 * @typedef Props
 * @prop {Function} [callback] - click callback
 */
export type Props = {
  callback?: Function,
}

const Link: React.FC<Props> = ( props: Props ) => {
  const wrapperRef: React.MutableRefObject<undefined | HTMLDivElement> = useRef();
  
  return (
    <>
      <Wrapper ref={ wrapperRef }>
        <Collumn>
          <Back
            callback={ props.callback }
          />
        </Collumn>
      </Wrapper>
      <Fix height={ wrapperRef.current ? wrapperRef.current.getBoundingClientRect().height : 0 }>
      </Fix>
    </>
  )
};

export default Link;