import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";
import { SearchResponse } from "../../models/api/search";
import { VideoIdResponse } from "../../models/api/video";

import Component from "../../components/screens/saved/Component";
import { addItem } from "../../redux/slices/saved";
import { Video } from "../../models/content";

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

describe( 'saved Component', () => {
  it( 'renders video component', async () => {
    store.dispatch( addItem([{
      type: 'video',
    } as Video ]));

    const result = render(
      <Component />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    const label = screen.getByText( 'Videos' );

    expect( label ).toBeTruthy();
  });

  it( 'matches to snapshot', async () => {
    const result = render(
      <Component />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 10 ) );

    expect( result ).toMatchSnapshot();
  });
});