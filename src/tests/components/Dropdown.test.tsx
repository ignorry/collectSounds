import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";

import Dropdown from "../../components/primitives/Dropdown";

describe( 'Dropdown component', () => {
  it( 'display label and values', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Dropdown
          callback={ () => {} }
          activeVal='first'
          values={[ 'first', 'second', 'third' ]}
          label='label: '
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const buttons = result.container.querySelectorAll( 'p' );
    const values = Array.from( buttons ).map( item => item.textContent );

    expect( values ).toStrictEqual([ 'label: first', 'second', 'third' ]);
  });

  it( 'handle click on value button', async () => {
    const user = userEvent.setup()

    const callback = jest.fn();

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Dropdown
          callback={ callback }
          activeVal='first'
          values={[ 'first', 'second', 'third' ]}
          label='label: '
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    await user.click( screen.getByText( 'second' ) );

    expect( callback ).toBeCalled();
  });

  it( 'handle click on label', async () => {
    const user = userEvent.setup()

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Dropdown
          callback={ () => {} }
          activeVal='first'
          values={[ 'first', 'second', 'third' ]}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    await user.click( screen.getByText( 'first' ) );

    const list = result.container.querySelector( 'ul' );

    expect( window.getComputedStyle( list ).height ).toBe( 'auto' );
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Dropdown
          callback={ () => {} }
          activeVal='first'
          values={[ 'first', 'second', 'third' ]}
          label='label'
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});