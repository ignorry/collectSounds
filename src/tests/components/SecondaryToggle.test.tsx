import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";

import SecondaryToggle from "../../components/primitives/SecondaryToggle";

describe( 'Label component', () => {
  it( 'display picture and text', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <SecondaryToggle callback={() => {}} active={false} text="text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const text = result.container.querySelector( 'p' );

    expect( text.textContent ).toBe( 'text' );
  });

  it( 'display with active attribute', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <SecondaryToggle callback={() => {}} active text="text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const text = result.container.querySelector( 'button' );

    expect( window.getComputedStyle( text ).background ).toBe( 'rgb(0, 250, 154)' );
  });

  it( 'calls callback on click', () => {
    const callback = jest.fn();

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <SecondaryToggle callback={callback} active text="text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <SecondaryToggle callback={() => {}} active text="text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});