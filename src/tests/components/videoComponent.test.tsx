import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";
import { Video } from "../../models/content";

import Component from "../../components/screens/video/Component";
import { VideoIdResponse } from "../../models/api/video";
import { addItem, deleteItem } from "../../redux/slices/saved";

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

describe( 'video component', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'someid',
            snippet: {
              publishedAt: 'published at',
              title: 'title',
              description: 'description',
              channelTitle: 'channel title',
              thumbnails: {
                standard: {
                  url: 'some url',
                }
              },
            },
            contentDetails: {
              duration: 'PT21M3S'
            },
          }]
        } as VideoIdResponse ),
      }),
    ) as any;
  });

  it( 'renders correctly', async () => {
    render(
      <Component id="someid"/>,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( screen.getByText( 'title' ) ).toBeTruthy();
    });
  });

  it( 'gets video from redux store', async () => {
    await store.dispatch( addItem([ { 
      type: 'video',
      id: 'someid',
      publishedAt: 'published at',
      title: 'redux title',
      description: 'description',
      channelTitle: 'channel title',
      thumbnails: {
        standard: {
          url: 'some url',
        }
      },
      duration: 10000,
      passed: 5000,
    } as Video ]) );

    render(
      <Component id="someid"/>,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( screen.getByText( 'redux title' ) ).toBeTruthy();
    });

    store.dispatch( deleteItem([ 'someid' ]) );
  });

  it( 'handles click on save button', async () => {
    const result = render(
      <Component id="someid"/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelectorAll( 'button' )[2].click();

    expect( store.getState().saved.data[0].item.title ).toBe( 'title' );
  });

  it( 'deletes video from redux by click on save button', async () => {
    const result = render(
      <Component id="someid"/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelectorAll( 'button' )[2].click();

    expect( store.getState().saved.data ).toHaveLength( 0 );
  });

  it( 'dispatches error message if video id is not provided', async () => {
    const result = render(
      <Component id={ null }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    expect( store.getState().errorMessage.message ).toBe( 'video loading error' );
  });

  it( 'matches to snapshot', async () => {
    const result = render(
      <Component id="someid"/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 10 ) );

    expect( result ).toMatchSnapshot();
  });
});