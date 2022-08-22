import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { BrowserRouter } from "react-router-dom";

import Header from "../../components/primitives/Header";

describe( 'Back component', () => {
  it( 'display picture ', () => {
    const result = render(
      <BrowserRouter>
        <ThemeProvider theme={ getTheme( true ) } >
          <Header />
          <GlobalStyles/>
        </ThemeProvider>
      </BrowserRouter>
    );

    const pic = result.container.querySelector( 'svg' );

    expect( pic ).toBeDefined();
  });

  it( 'calls callback on click', () => {
    const callback = jest.fn();

    const result = render(
      <BrowserRouter>
        <ThemeProvider theme={ getTheme( true ) } >
          <Header callback={callback} />
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
          <Header />
          <GlobalStyles/>
        </ThemeProvider>
      </BrowserRouter>
    );

    expect( result ).toMatchSnapshot();
  });
});