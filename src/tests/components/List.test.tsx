import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Thumbnails } from "../../models/api/primitives";
import { Video, Playlist, Channel } from "../../models/content";
import { Provider } from "react-redux";
import { LangProvider } from "../../lib/localization";
import store from "../../redux/index";

import List, { Props as ListProps } from "../../components/content/List";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <LangProvider file="search">
        { children }
      </LangProvider>
    <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'List component', () => {
  const prop: ListProps = {
    items: [],
    emptyMessage: 'empty message',
  }

  beforeEach( () => {
    prop.items = [{
      content: {
        type: 'video',
        id: 'id',
        publishedAt: 'publishedAt',
        title: 'title',
        channelTitle: 'channelTitle',
        thumbnails: {
          standard: {
            url: 'http://video.com'
          },
        },
        duration: 59000,
        passed: 5000
      } as Video,
      callback: () => {},
    },{
      content: {
        type: 'playlist',
        id: 'id',
        videos: [],
        title: 'title',
        channelTitle: 'channelTitle',
        thumbnails: {
          standard: {
            url: 'http://playlist.com'
          },
        },
      } as Playlist,
      callback: () => {},
    },{
      content: {
        type: 'channel',
        id: 'id',
        title: 'title',
        thumbnails: {
          standard: {
            url: 'http://channel.com'
          },
        },
      } as Channel,
      callback: () => {},
    }];
  });

  it( 'displays all items', async () => {
    const result = render(
      <List
        items={ prop.items }
        emptyMessage={ prop.emptyMessage }
      />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    const images = Array.from( result.container.querySelectorAll( 'img' ) ).map( item => item.src );
  
    expect( images ).toStrictEqual([ 'http://video.com/', 'http://playlist.com/', 'http://channel.com/' ]);
  });

  it( 'displays error message', async () => {
    prop.items = [];

    render(
      <List
        items={ prop.items }
        emptyMessage={ prop.emptyMessage }
      />,
      { wrapper: AllTheProviders }
    );
  
    await waitFor( () => {
      expect( screen.getByText( 'empty message') ).toBeDefined();
    });
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <List
        items={ prop.items }
        emptyMessage={ prop.emptyMessage }
      />,
      { wrapper: AllTheProviders }
    );

    expect( result ).toMatchSnapshot();
  });

  it( 'displays all items on /search path', async () => {
    global.window = Object.create( window );
    const url = "/search";
    Object.defineProperty( window, 'location', {
      value: {
        pathname: url
      }
    });

    const result = render(
      <List
        items={ prop.items }
        emptyMessage={ prop.emptyMessage }
      />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    const images = Array.from( result.container.querySelectorAll( 'img' ) ).map( item => item.src );

    expect( images ).toStrictEqual([ 'http://video.com/', 'http://playlist.com/', 'http://channel.com/' ]);
  });
});