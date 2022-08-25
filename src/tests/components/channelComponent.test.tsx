import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";
import { Channel, Playlist, Video } from "../../models/content";

import Component from "../../components/screens/channel/Component";
import { PlaylistIdResponse } from "../../models/api/playlist";
import { addItem, deleteItem } from "../../redux/slices/saved";
import { PlaylistItemsResponse, VideoIdResponse } from "../../models/api/video";
import { SearchResponse } from "../../models/api/search";
import { ChannelIdResponse } from "../../models/api/channel";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="channel">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'channel component', () => {
  beforeEach( () => {
    let call = 0;

    global.fetch = jest.fn(() => {
      call++;

      if ( call === 1 )
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              kind: 'youtube#channel',
              id: 'someid',
              snippet: {
                title: 'title',
                description: 'description',
                customUrl: 'customUrl',
                publishedAt: 'publishedAt',
                thumbnails: {
                  standard: {
                    url: 'some url',
                  }
                }
              },
            }]
          } as ChannelIdResponse ),
        });
      if ( call === 2 )
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: {
                kind: 'youtube#video',
                videoId: 'video id',
              }
            }]
          } as SearchResponse ),
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
        if ( call >= 4 )
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
              items: [{
                id: 'playlistId',
                snippet: {
                  publishedAt: 'published at',
                  title: 'playlist title',
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

  it( 'gets channel from redux store', async () => {
    await store.dispatch( addItem([{
        type: 'channel',
        id: 'someid',
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
        }],
        playlists: [{
          id: 'playlistid',
          item: {
            type: 'playlist',
            id: 'someid',
            title: 'playlist title',
            description: 'description',
            channelTitle: 'channel title',
            thumbnails: {
              standard: {
                url: 'some url',
              }
            },
            videos: []
          } as Playlist
        }],
        title: 'redux title',
        description: 'description',
        customUrl: 'customUrl',
        thumbnails: {
          standard: {
            url: 'some url',
          }
        },
        lastModified: 0,
    } as Channel ]) );

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

    await waitFor( () => {
      expect( screen.getByText( 'playlist title' ) ).toBeTruthy();
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

  it( 'deletes channel from redux by click on save button', async () => {
    const result = render(
      <Component id="someid"/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelectorAll( 'button' )[1].click();

    expect( store.getState().saved.data ).toHaveLength( 0 );
  });

  it( 'dispatches error message if channel id is not provided', async () => {
    const result = render(
      <Component id={ null }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    expect( store.getState().errorMessage.message ).toBe( 'channel loading error' );
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