import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Thumbnails } from "../../models/api/primitives";
import { Video, Playlist, Channel } from "../../models/content";

import List, { Props as ListProps } from "../../components/content/List";

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
        videos: new Map(),
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

  it( 'displays all items', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <List
          items={ prop.items }
          emptyMessage={ prop.emptyMessage }
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const images = Array.from( result.container.querySelectorAll( 'img' ) ).map( item => item.src );
  
    expect( images ).toStrictEqual([ 'http://video.com/', 'http://playlist.com/', 'http://channel.com/' ]);
  });

  it( 'displays error message', () => {
    prop.items = [];

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <List
          items={ prop.items }
          emptyMessage={ prop.emptyMessage }
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const label = result.container.querySelector( 'p' );
  
    expect( label.innerHTML ).toStrictEqual( 'empty message' );
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <List
          items={ prop.items }
          emptyMessage={ prop.emptyMessage }
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});