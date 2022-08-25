import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Playlist as PlaylistType } from "../../models/content";
import { Thumbnails } from "../../models/api/primitives";

import Playlist from "../../components/content/Playlist";

describe( 'Playlist component', () => {
  const playlist = {
    type: 'playlist',
    id: 'id',
    videos: [],
    title: 'title',
    channelTitle: 'channelTitle',
    thumbnails: {
      standard: {
        url: 'http://thumbnail.com'
      },
    },
    itemCount: 0
  } as PlaylistType;

  beforeEach( () => {
    playlist.thumbnails = {
      standard: {
        url: 'http://thumbnail.com'
      },
    } as Thumbnails;
  });

  it( 'displays all content', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Playlist
          playlist={playlist}
          callback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const img = result.container.querySelector( 'img' );
    const labels = Array.from( result.container.querySelectorAll( 'p' ) ).map( item => item.innerHTML );
  
    expect( img.src ).toBe( 'http://thumbnail.com/' );
    expect( labels ).toStrictEqual([ '0', 'title', 'channelTitle' ]);
  });

  it( 'handles click ', async () => {
    const callback = jest.fn();
    const user = userEvent.setup();

    render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Playlist
          playlist={playlist}
          callback={callback}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    await user.click( screen.getByRole( 'button' ) )

    expect( callback ).toBeCalled();
  });

  it( 'uses default thumbnail', () => {
    playlist.thumbnails = {
      default: {
        url: 'http://default.com'
      },
    } as Thumbnails;

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Playlist
          playlist={playlist}
          callback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const img = result.container.querySelector( 'img' );
    
    expect( img.src ).toBe( 'http://default.com/' );
  });

  it( 'displays without thumbnail', () => {
    playlist.thumbnails = {
    } as Thumbnails;

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Playlist
          playlist={playlist}
          callback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const img = result.container.querySelector( 'img' );
    
    expect( img.src ).toBeDefined();
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Playlist
          playlist={playlist}
          callback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});