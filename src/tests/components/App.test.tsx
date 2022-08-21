import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";

import App from "../../components/App";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    { children }
  </Provider>
);

describe( 'App component', () => {
  it( 'matches to snapshot', () => {
    const result = render(
      <App />,
      { wrapper: AllTheProviders }
    );

    expect( result ).toMatchSnapshot();
  });
});