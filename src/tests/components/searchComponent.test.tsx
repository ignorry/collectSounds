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

import Component from "../../components/screens/search/Component";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="search">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'search Component', () => {
  it( 'renders video component', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'videoId',
            snippet: {
              title: 'test video',
            },
            contentDetails: {}
          }]
        } as VideoIdResponse ),
      });
    }) as any;

    const result = render(
      <Component />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    const label = screen.getByText( 'All' );

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