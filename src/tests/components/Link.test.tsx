import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { BrowserRouter } from "react-router-dom";

import Link from "../../components/primitives/Link";

describe( 'Label component', () => {
  it( 'display picture and text', () => {
    const result = render(
      <BrowserRouter>
        <ThemeProvider theme={ getTheme( true ) } >
          <Link link="some link" pic="icon" text="text"/>
          <GlobalStyles/>
        </ThemeProvider>
      </BrowserRouter>
    );

    const pic = result.container.querySelector( 'svg' );
    const text = result.container.querySelector( 'p' );

    expect( pic ).toBeDefined();
    expect( text.textContent ).toBe( 'text' );
  });

  it( 'calls callback on click', () => {
    const callback = jest.fn();

    const result = render(
      <BrowserRouter>
        <ThemeProvider theme={ getTheme( true ) } >
          <Link link="some link" callback={callback} pic="icon" text="text"/>
          <GlobalStyles/>
        </ThemeProvider>
      </BrowserRouter>
    );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <BrowserRouter>
        <ThemeProvider theme={ getTheme( true ) } >
          <Link link="some link" pic="icon" text="text"/>
          <GlobalStyles/>
        </ThemeProvider>
      </BrowserRouter>
    );

    expect( result ).toMatchSnapshot();
  });
});