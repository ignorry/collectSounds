import React from "react";
import { render } from "@testing-library/react";
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