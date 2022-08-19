import React from "react";
import { render } from "@testing-library/react";
import { FormattedMessage } from "react-intl";

import ScreenWrapper from "../../lib/screenWrapper";

describe( 'screenWrapper', () => {
  beforeEach( () => {
    global.navigator = {
      language: 'en-us',
    } as Navigator;
  });

  it( 'renders children', async () => {
    const result = await render(
      <ScreenWrapper file='search' skeleton={ <p>skeleton</p> }>
        <p>content</p>
      </ScreenWrapper>
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    const label = result.container.querySelector( 'p' );

    expect( label.innerHTML ).toBe( 'content' );
  });
});