import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";
import { addItem } from "../../redux/slices/saved";
import { addItem as addQueueItem } from "../../redux/slices/queue";
import { Video } from "../../models/content";

import Component from "../../components/screens/queue/Component";

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

describe( 'queue Component', () => {
  it( 'renders video component', async () => {
    const result = render(
      <Component />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    expect( screen.getByText( 'Length: 00' ) ).toBeDefined();
  });
});