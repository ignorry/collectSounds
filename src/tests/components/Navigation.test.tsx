import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";

import Navigation from "../../components/screens/root/components/Navigation";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="root">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'Navigation component', () => {
  it( 'render all buttons', async () => {
    const result = render(
      <Navigation />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 200 ) );

    const icons = result.container.querySelectorAll( 'button' );

    expect( icons ).toHaveLength( 4 );
  });

  it( 'handles clicks', async () => {
    const result = render(
      <Navigation />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 150 ) );

    result.container.querySelectorAll( 'button' )[0].click();

    await waitFor( () => {
      expect( window.location.pathname.split( '/' )[2] ).toBe( 'search' );
    });

    result.container.querySelectorAll( 'button' )[1].click();
    
    await waitFor( () => {
      expect( window.location.pathname.split( '/' )[2] ).toBe( 'saved' );
    });
    
    result.container.querySelectorAll( 'button' )[2].click();
    
    await waitFor( () => {
      expect( window.location.pathname.split( '/' )[2] ).toBe( 'queue' );
    });
    
    result.container.querySelectorAll( 'button' )[3].click();
    
    await waitFor( () => {
      expect( window.location.pathname.split( '/' )[2] ).toBe( 'settings' );
    });
  });

  it( 'matches to snapshot', async () => {
    const result = render(
      <Navigation />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 150 ) );

    expect( result ).toMatchSnapshot();
  });
});