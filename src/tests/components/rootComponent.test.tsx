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

import Component from "../../components/screens/root/Component";

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

describe( 'root Component', () => {
  beforeEach( () => {
    let called = 0;

    global.fetch = jest.fn(() => {
      called++;

      if ( called === 1 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: {
                kind: 'youtube#video',
                videoId: 'videoId',
              },
            }]
          } as SearchResponse ),
        });
      } if ( called === 2 ) {
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
      } 
    }) as any;
  });

  it( 'renders correctly', async () => {
    const result = render(
      <Component />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    const button = result.container.querySelector( 'button' );

    expect( button ).toBeTruthy();
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