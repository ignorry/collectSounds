import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";

import Icon from "../../components/primitives/Icon";

describe( 'Icon componenet', () => {
  it( 'renders icon', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Icon name="icon"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const elem = result.container.querySelector('use');

    expect( elem.getAttribute( 'href' ) ).toBe( `${ window.location.origin }/collectSounds/icons.svg#icon` );
  });

  it( 'renders icon with active param', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Icon name="icon" active={true}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const elem = result.container.querySelector('use');

    expect( elem.getAttribute( 'href' ) ).toBe( `${ window.location.origin }/collectSounds/icons.svg#icon` );
  });

  it( 'matches to snapshot', () => {
    const result = render(
    <ThemeProvider theme={ getTheme( true ) } >
      <Icon name="icon"/>
      <GlobalStyles/>
    </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  })
});