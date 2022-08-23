import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ToggleButton from "../../../primitives/ToggleButton";

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: bold;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  padding: ${ ({ theme }) => `${ theme.gaps.small }rem` };
  background: ${ ({ theme }) => theme.colors.bgSecondary };

  @media ${ ({ theme }) => theme.media.small } {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Navigation: React.FC = () => {
  const [route, setRoute] = useState<string>( 'search' );
  const navigate = useNavigate();

  useEffect( () => {
    setRoute( window.location.pathname.split( '/' )[1] );
  }, [window.location.pathname]);

  return (
    <Nav>
      <ToggleButton
        callback={ () => navigate( '/search' ) }
        active={ route === '' || route === 'search' }
        pic="search"
      />
      <ToggleButton
        callback={ () => navigate( '/saved' ) }
        active={ route === 'saved' }
        pic="favorite"
      />
      <ToggleButton
        callback={ () => navigate( '/queue' ) }
        active={ route === 'queue' }
        pic="queue"
      />
      <ToggleButton
        callback={ () => navigate( '/settings' ) }
        active={ route === 'settings' }
        pic="settings"
      />
    </Nav>
  )
};

export default Navigation;