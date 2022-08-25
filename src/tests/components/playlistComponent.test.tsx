import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";
import { Playlist, Video } from "../../models/content";

import Component from "../../components/screens/playlist/Component";
import { PlaylistIdResponse } from "../../models/api/playlist";
import { addItem, deleteItem } from "../../redux/slices/saved";
import { PlaylistItemsResponse, VideoIdResponse } from "../../models/api/video";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="playlist">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'playlist component', () => {
  beforeEach( () => {
    let call = 0;

    global.fetch = jest.fn(() => {
      call++;

      if ( call === 1 )
        return Promise.resolve({
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
                itemCount: 10
              },
            }]
          } as PlaylistIdResponse ),
        });
      if ( call === 2 )
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'someid',
              snippet: {
                resourceId: {
                  videoId: 'videoid'
                }
              }
            }]
          } as PlaylistItemsResponse ),
        });
      if ( call === 3 )
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'videoid',
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
        });
    }) as any;
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
      type: 'playlist',
      id: 'someid',
      title: 'redux title',
      description: 'description',
      channelTitle: 'channel title',
      thumbnails: {
        standard: {
          url: 'some url',
        }
      },
      videos: [{
        id: 'video',
        item: {
          type: 'video',
          id: 'videoid',
          publishedAt: 'published at',
          title: 'video title',
          description: 'description',
          channelTitle: 'channel title',
          thumbnails: {
            standard: {
              url: 'some url',
            }
          }
        } as Video 
      }]
    } as Playlist ]) );

    render(
      <Component id="someid"/>,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( screen.getByText( 'redux title' ) ).toBeTruthy();
    });

    await waitFor( () => {
      expect( screen.getByText( 'video title' ) ).toBeTruthy();
    });

    store.dispatch( deleteItem([ 'someid' ]) );
  });

  it( 'handles click on save button', async () => {
    const result = render(
      <Component id="someid"/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelectorAll( 'button' )[1].click();

    expect( store.getState().saved.data[0].item.title ).toBe( 'title' );
  });

  it( 'deletes playlist from redux by click on save button', async () => {
    const result = render(
      <Component id="someid"/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelectorAll( 'button' )[1].click();

    expect( store.getState().saved.data ).toHaveLength( 0 );
  });

  it( 'dispatches error message if playlist id is not provided', async () => {
    const result = render(
      <Component id={ null }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    expect( store.getState().errorMessage.message ).toBe( 'playlist loading error' );
  });

  it( 'matches to snapshot', async () => {
    const result = render(
      <Component id="someid"/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    expect( result ).toMatchSnapshot();
  });
});