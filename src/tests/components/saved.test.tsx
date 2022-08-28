import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";

import Saved from "../../components/screens/saved";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="saved">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'search component', () => {

  it( 'matches to snapshot', async () => {
    const result = render(
      <Saved />,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( screen.getByText( 'Addition' ) ).toBeDefined();
      expect( result ).toMatchSnapshot();
    });
  });
});