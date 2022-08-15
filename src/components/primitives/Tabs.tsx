import React, { ReactNode, useState } from "react";
import styled from "styled-components";

import ToggleButton from "./ToggleButton";

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  padding: ${ ({ theme }) => `${ theme.gaps.small }rem` };
  background: ${ ({ theme }) => theme.colors.bgSecondary };
`;

export const Content = styled.div<{ active: boolean }>`
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  display: ${ props => props.active ? 'block' : 'none' };
`;

/**
 * @typedef Tab
 * @prop {any} content
 * @prop {string} label - to be displayed in button
 */
export type Tab = {
  content: any;
  label: string;
}

export type Props = {
  tabs: Array<Tab>;
}

const Tabs: React.FC<Props> = ( props: Props ) => {
  const [choosen, setChoosen] = useState<number>( 0 );

  const buttons: Array<ReactNode> = props.tabs.map( ( tab, index ) =>
    <ToggleButton
      callback={ () => setChoosen( index ) }
      active={ index === choosen }
      text={tab.label}
    />
  );

  const contents: Array<ReactNode> = props.tabs.map( ( tab, index ) =>
    <Content active={ index === choosen }>
      { tab.content }
    </Content>
  );

  return (
    <div>
      <Nav>
        { buttons }
      </Nav>

      { contents }
    </div>
  )
};

export default Tabs;