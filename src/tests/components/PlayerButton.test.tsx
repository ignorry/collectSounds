import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";

import PlayerButton from "../../components/primitives/PlayerButton";

describe( 'PlayerButton component', () => {
  it( 'display picture and text', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <PlayerButton callback={() => {}} pic="icon"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const pic = result.container.querySelector( 'svg' );

    expect( pic ).toBeDefined();
  });

  it( 'calls callback on click', () => {
    const callback = jest.fn();

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <PlayerButton callback={callback} pic="icon"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <PlayerButton callback={() => {}}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});