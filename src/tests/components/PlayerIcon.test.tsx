import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";

import PlayerIcon from "../../components/primitives/PlayerIcon";

describe( 'PlayerIcon componenet', () => {
  it( 'renders icon', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <PlayerIcon name="icon"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const elem = result.container.querySelector('use');

    expect( elem.getAttribute( 'href' ) ).toBe( `${ window.location.origin }/icons.svg#icon` );
  });

  it( 'renders icon with active param', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <PlayerIcon name="icon" active={true}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const elem = result.container.querySelector('use');

    expect( elem.getAttribute( 'href' ) ).toBe( `${ window.location.origin }/icons.svg#icon` );
  });

  it( 'matches to snapshot', () => {
    const result = render(
    <ThemeProvider theme={ getTheme( true ) } >
      <PlayerIcon name="icon"/>
      <GlobalStyles/>
    </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  })
});