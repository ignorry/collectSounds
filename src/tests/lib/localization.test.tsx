import React from 'react';
import { render } from "@testing-library/react";
import { FormattedMessage } from 'react-intl';

import { getLang, LangProvider } from "../../lib/localization";

describe( 'getLang', () => {
  beforeEach( () => {
    global.navigator = {
      language: 'en',
    } as Navigator;
  });
  
  it( 'return correct language string', () => {
    expect( getLang() ).toBe( 'en' );
  });
});

describe( 'LangProvider', () => {
  beforeEach( () => {
    global.navigator = {
      language: 'en-us',
    } as Navigator;
  });

  it( 'wraps it the right provider', async () => {
    const result = await render(
      <LangProvider file='search'>
        <p>
          <FormattedMessage id="pageName"/>
        </p>
      </LangProvider>
    );

    await new Promise( resolve =>setTimeout( resolve, 100 ) );

    const label = result.container.querySelector( 'p' );

    expect( label.innerHTML ).toBe( 'search' );
  });
});