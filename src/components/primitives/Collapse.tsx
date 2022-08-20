import React, { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { clickOutside } from "../../lib/clickOutside";

import ToggleButton from "./ToggleButton";

export const Div = styled.div<{ display: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${ props => props.display ? ({ theme }) => `${ theme.gaps.small }rem` : 0 };
  padding: ${ ({ theme }) => `${ theme.decorative.padding }px`};
  text-align: center;
`;

export const Content = styled.div<{ display: boolean }>`
  height: ${ props => props.display ? 'auto' : 0 };
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
  padding-top: ${ props => props.display ? ({ theme }) => `${ theme.gaps.small }rem` : 0 };
`;

/**
 * @typedef Props
 * @prop {string} label - display in left of active value
 * @prop {any} [children] - react prop
 * @prop {string} [icon] - name of icon to be displayed in button
 * @prop {boolean} [dontHandleOutside] - if true, will not close when clicking outside
 */
export type Props = {
  label: string,
  children?: any,
  icon?: string,
  dontHandleOutside?: boolean;
}

const Collapse: React.FC<Props> = ( props: Props ) => {
  const [ display, setDisplay ] = useState<boolean>( false );
  const containerRef: React.MutableRefObject<undefined | HTMLDivElement> = useRef();

  const toggleDisplay = () => setDisplay( ! display );

  useEffect( () => {
    if ( ! props.dontHandleOutside )
      clickOutside( containerRef.current , () => setDisplay( false ) )
  }, []);

  return (
    <Div display={ display } ref={ containerRef }>
      <ToggleButton pic={ props.icon } text={ props.label } callback={ toggleDisplay } active={ display } />

      <Content display={ display }>
        { props.children }
      </Content>
    </Div>
  );
}

export default Collapse;