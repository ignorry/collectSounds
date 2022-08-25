import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";

import Playlist from "../../components/screens/playlist";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        { children }
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'video component', () => {
  it( 'matches to snapshot', async () => {
    const result = render(
      <LangProvider file="playlist">
        <Playlist />,
      </LangProvider>,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( result ).toMatchSnapshot();
    });
  });

  it( 'renders without lang provider', async () => {
    const result = render(
      <Playlist />,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( result ).toMatchSnapshot();
    });
  });
});