import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";

import Queue from "../../components/screens/queue";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="queue">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'queue component', () => {

  it( 'matches to snapshot', async () => {
    const result = render(
      <Queue />,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( screen.getByText( 'Length: 00' ) ).toBeDefined();
      expect( result ).toMatchSnapshot();
    });
  });
});