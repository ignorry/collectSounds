import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";

import Settings from "../../components/screens/settings";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="settings">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'settings component', () => {

  it( 'matches to snapshot', async () => {
    const result = render(
      <Settings />,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( result ).toMatchSnapshot();
    });
  });
});