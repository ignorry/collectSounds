import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";

import ScreenWrapper from "../../lib/screenWrapper";

describe( 'screenWrapper', () => {
  beforeEach( () => {
    global.navigator = {
      language: 'en-us',
    } as Navigator;
  });

  it( 'renders children', async () => {
    const result = await render(
      <ThemeProvider theme={ getTheme( true ) } >
        <ScreenWrapper file='search' skeleton={ <p>skeleton</p> }>
          <p>content</p>
        </ScreenWrapper>
        <GlobalStyles/>
      </ThemeProvider>
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    const label = result.container.querySelector( 'p' );

    expect( label.innerHTML ).toBe( 'content' );
  });
});