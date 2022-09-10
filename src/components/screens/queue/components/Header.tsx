import React, { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getQueueLength } from "../../../../lib/redux/getQueueLength";
import { cleanQueue } from "../../../../redux/slices/queue";

import Button from "../../../primitives/Button";
import Label from "../../../primitives/Label";
import ToggleButton from "../../../primitives/ToggleButton";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${ ({ theme }) => theme.colors.bgSecondary };
  padding: ${ ({ theme }) => `${ theme.gaps.small }rem ${ theme.gaps.small }rem`};
  z-index: ${ ({ theme }) => theme.order.header };
`;

const Collumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem` };
  margin: auto;
`;

const Fix = styled.div<{ height: number }>`
  height: ${ ({ theme }) => `${ theme.font.primary.size + theme.gaps.small*2 }rem` };
`;

const Link: React.FC = () => {
  const wrapperRef: React.MutableRefObject<undefined | HTMLDivElement> = useRef();
  const intl = useIntl();
  const dispatch = useDispatch();

  console.log( 'wrapper', [wrapperRef.current] );
  
  return (
    <>
      <Wrapper ref={ wrapperRef }>
        <Collumn>
          <Label text={`${ intl.formatMessage({ id: 'length' }) }: ${ dispatch( getQueueLength() as any ) }`} secondary/>

          <ToggleButton
            text={ intl.formatMessage({ id: 'clearQueue' }) }
            callback={ () => dispatch( cleanQueue() ) }
            active
          />
        </Collumn>
      </Wrapper>
      <Fix height={ wrapperRef.current ? wrapperRef.current.getBoundingClientRect().height : 0 }>
      </Fix>
    </>
  )
};

export default Link;