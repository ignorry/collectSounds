import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { BrowserRouter } from "react-router-dom";

import Back from "../../components/primitives/Back";

describe( 'Back component', () => {
  it( 'display picture ', () => {
    const result = render(
      <BrowserRouter>
        <ThemeProvider theme={ getTheme( true ) } >
          <Back />
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
          <Back callback={callback} />
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
          <Back />
          <GlobalStyles/>
        </ThemeProvider>
      </BrowserRouter>
    );

    expect( result ).toMatchSnapshot();
  });
});