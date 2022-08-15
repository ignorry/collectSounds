import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";

import Collapse from "../../components/primitives/Collapse";

describe( 'Collapse component', () => {
  it( 'display button and content', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Collapse label="label" children={<span>child</span>} icon="logo"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const button = result.container.querySelector( 'button' );
    const content = result.container.querySelector( 'span' );

    expect( button ).toBeDefined();
    expect( content.textContent ).toBe( 'child' );
  });

  it( 'displays content when expanded', async () => {
    const user = userEvent.setup()

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Collapse label="label" children={<span>child</span>} icon="logo"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    await user.click( screen.getByRole('button') )

    const content = result.container.querySelector( 'span' ).parentElement;

    expect( window.getComputedStyle( content ).height ).toBe( 'auto' );
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Collapse label="label" children={<p>child</p>} icon="logo"/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});