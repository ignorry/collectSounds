import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";

import AddTags from "../../components/primitives/AddTag";
import { Video } from "../../models/content";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="video">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'test AddTags', () => {
  it( 'matches to snapshot', () => {
    const result = render(
      <AddTags item={{} as Video } />,
      { wrapper: AllTheProviders }
    );

    expect( result ).toMatchSnapshot();
  });
});