import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { baseTheme } from "../../lib/theme/baseTheme";

import ToggleButton from "../../components/primitives/ToggleButton";

describe( 'Label component', () => {
  it( 'display picture and text', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <ToggleButton callback={() => {}} active={false} pic="icon" text="text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const pic = result.container.querySelector( 'svg' );
    const text = result.container.querySelector( 'p' );

    expect( pic ).toBeDefined();
    expect( text.textContent ).toBe( 'text' );
  });

  it( 'display with active attribute', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <ToggleButton callback={() => {}} active pic="icon" text="text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const text = result.container.querySelector( 'button' );

    expect( window.getComputedStyle( text ).color ).toBe( 'rgb(0, 250, 154)' );
  });

  it( 'calls callback on click', () => {
    const callback = jest.fn();

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <ToggleButton callback={callback} active pic="icon" text="text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <ToggleButton callback={() => {}} active/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});