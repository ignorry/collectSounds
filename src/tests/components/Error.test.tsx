import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { setMessage } from "../../redux/slices/errorMessage";
import { LangProvider } from "../../lib/localization";

import Error from "../../components/screens/root/components/Error";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <LangProvider file="root">
        { children }
      </LangProvider>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'Error component', () => {
  it( 'doesn`t render without message in redux', async () => {
    const result = render(
      <Error />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 10 ) );

    const label = result.container.querySelector( 'p' );

    expect( label ).toBe( null );
  });

  it( 'render with message', async () => {
    store.dispatch( setMessage( 'test message' ) );

    const result = render(
      <Error />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve =>setTimeout( resolve, 10 ) );

    const label = result.container.querySelector( 'p' );

    expect( label.textContent ).toBe( 'test message');
  });

  it( 'handles click', async () => {
    const result = render(
      <Error />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve =>setTimeout( resolve, 10 ) );

    const label = result.container.querySelector( 'p' );

    label.click();

    const message = store.getState().errorMessage.message;

    expect( message ).toBe( '' );
  });

  it( 'matches to snapshot', async () => {
    store.dispatch( setMessage( 'test message' ) );

    const result = render(
      <Provider store={store}>
        <ThemeProvider theme={ getTheme( true ) } >
          <LangProvider file="root">
            <Error/>
          </LangProvider>
          <GlobalStyles/>
        </ThemeProvider>
      </Provider>
    );

    await new Promise( resolve =>setTimeout( resolve, 10 ) );

    expect( result ).toMatchSnapshot();
  });
});