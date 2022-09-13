import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ToggleButton from "../../../primitives/ToggleButton";

const NODE_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const BASE_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "" : "/collectSounds/";

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: bold;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  background: ${ ({ theme }) => theme.colors.bgSecondary };

  @media ${ ({ theme }) => theme.media.small } {
    flex-direction: row;
    justify-content: space-around;
    padding: ${ ({ theme }) => `${ theme.gaps.small }rem` };
  }
`;

const Navigation: React.FC = () => {
  const [route, setRoute] = useState<string>( 'search' );
  const navigate = useNavigate();

  useEffect( () => {
    if ( NODE_DEV )
      setRoute( window.location.pathname.split( '/' )[1] );
    else
      setRoute( window.location.pathname.split( '/' )[2] );
  }, [window.location.pathname]);

  return (
    <Nav>
      <ToggleButton
        callback={ () => navigate( `${ BASE_URL || '/' }search` ) }
        active={ route === '' || route === 'search' }
        pic="search"
      />
      <ToggleButton
        callback={ () => navigate( `${ BASE_URL || '/' }saved` ) }
        active={ route === 'saved' }
        pic="favorite"
      />
      <ToggleButton
        callback={ () => navigate( `${ BASE_URL || '/' }queue` ) }
        active={ route === 'queue' }
        pic="queue"
      />
      <ToggleButton
        callback={ () => navigate( `${ BASE_URL || '/' }settings` ) }
        active={ route === 'settings' }
        pic="settings"
      />
    </Nav>
  )
};

export default Navigation;