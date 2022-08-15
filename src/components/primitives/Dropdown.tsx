import React, { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { clickOutside } from "../../lib/clickOutside";

import Button from "./Button";

export const Div = styled.div<{ display: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${ props => props.display ? ({ theme }) => `${ theme.gaps.small }rem` : 0 };
  border: 1px solid ${ props => props.display ? ({ theme }) => theme.colors.main : ({ theme }) => 'rgba(0,0,0,0)' };
  border-radius: ${ ({ theme }) => `${ theme.decorative.borderRadius }px` };
  padding: ${ ({ theme }) => `${ theme.decorative.padding }px`};
  text-align: center;
`;

export const List = styled.ul<{ display: boolean }>`
  height: ${ props => props.display ? 'auto' : 0 };
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
`;

/**
 * @typedef Props
 * @prop {Function} callback - calls with string prop
 * @prop {string} activeVal - active value
 * @prop {Array<string>} values - array of possible values
 * @prop {string} label - display in left of active value
 */
export type Props = {
  callback: Function,
  activeVal: string,
  values: Array<string>,
  label?: string,
}

const Dropdown: React.FC<Props> = ( props: Props ) => {
  const [ display, setDisplay ] = useState<boolean>( false );
  const containerRef: React.MutableRefObject<undefined | HTMLDivElement> = useRef();

  const toggleDisplay = () => setDisplay( ! display );

  const items: Array<ReactNode> = props.values.filter( item => item !== props.activeVal ).map( item =>
    <li key={ item }><Button text={ item } callback={ () => { setDisplay( false ); props.callback( item ) } } secondary/></li>
  );

  useEffect( () => {
    clickOutside( containerRef.current , () => setDisplay( false ) )
  }, []);

  return (
    <Div display={ display } ref={ containerRef }>
      <Button text={ ( props.label || '' )+props.activeVal } callback={ toggleDisplay } secondary/>

      <List display={ display }>
        { items }
      </List>
    </Div>
  );
}

export default Dropdown;