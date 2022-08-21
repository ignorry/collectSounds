import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";

import Root from "../../components/screens/root";

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

describe( 'root component', () => {
  it( 'renders Component', async () => {
    const result = render(
      <Root />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 200 ) );

    const button = result.container.querySelector( 'button' );

    expect( button ).toBeTruthy();
  });

  it( 'matches to snapshot', async () => {
    const result = render(
      <Root />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 200 ) );

    expect( result ).toMatchSnapshot();
  });
});