import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { baseTheme } from "../../lib/theme/baseTheme";

import Label from "../../components/primitives/Label";

describe( 'Label component', () => {
  it( 'display correct text', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Label text="test text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const elem = result.container.querySelector('p');

    expect( elem.textContent ).toBe( 'test text' );
    expect( window.getComputedStyle( elem ).fontSize ).toBe( `${baseTheme.font.primary.size}rem` );
    expect( +window.getComputedStyle( elem ).opacity ).toBe( baseTheme.font.primary.opacity );
  });

  it( 'display with active prop', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Label text="test text" secondary/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const elem = result.container.querySelector('p');

    expect( elem.textContent ).toBe( 'test text' );
    expect( window.getComputedStyle( elem ).fontSize ).toBe( `${baseTheme.font.secondary.size}rem` );
    expect( +window.getComputedStyle( elem ).opacity ).toBe( baseTheme.font.secondary.opacity );
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Label text="text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});