import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";

import Button from "../../components/primitives/Button";

describe( 'Label component', () => {
  it( 'display picture and text', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Button callback={() => {}} pic="icon" text="text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const pic = result.container.querySelector( 'svg' );
    const text = result.container.querySelector( 'p' );

    expect( pic ).toBeDefined();
    expect( text.textContent ).toBe( 'text' );
  });

  it( 'calls callback on click', () => {
    const callback = jest.fn();

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Button callback={callback} pic="icon" text="text"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Button callback={() => {}}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});