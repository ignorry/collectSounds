import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { baseTheme } from "../../lib/theme/baseTheme";

import Range from "../../components/primitives/Range";

describe( 'Range component', () => {
  it( 'renders with correct props', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Range value={10} max={20}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const elem = result.container.querySelector( 'input' );

    expect( elem.type ).toBe( 'range' );
    expect( +elem.value ).toBe( 10 );
    expect( +elem.max ).toBe( 20 );
  });

  it( 'handles change event', async () => {
    const callback = jest.fn();

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Range callback={callback} value={10}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    const input = result.container.querySelector( 'input' );

    await fireEvent.change( input, { target: { value: 15 } });

    expect( callback ).toBeCalled();
  })

  it( 'matches to snapshot', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Range value={0} max={10} callback={() => {}}/>
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});