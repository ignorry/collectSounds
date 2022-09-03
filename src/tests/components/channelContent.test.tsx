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

import Content from "../../components/screens/channel/components/Content";
import userEvent from "@testing-library/user-event";

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

const channel = {
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
  title: 'title',
  description: 'description',
  customUrl: 'customUrl',
  thumbnails: {
    standard: {
      url: 'some url',
    }
  },
  lastModified: 0,
} as Channel;

describe( 'Content', () => {
  it( 'renders correctly', async () => {
    render(
      <Content channel={ channel } toggleSaved={ () => {} } saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( screen.getByText( 'title' ) ).toBeTruthy();
    });
  });

  it( 'handles click on save button', async () => {
    const channel = { 
      type: 'channel',
      id: 'someid',
      videos: [],
      playlists: [],
      title: 'redux title',
      description: 'description',
      customUrl: 'customUrl',
      thumbnails: {
        default: {
          url: 'some url',
        }
      }
    } as Channel;

    const callback = jest.fn();

    const result = render(
      <Content channel={ channel } toggleSaved={ callback } saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'handles click on video', async () => {
    const user = userEvent.setup();

    const result = render(
      <Content channel={ channel } toggleSaved={() => {}} saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    await user.click( screen.getByText( 'video title' ) );

    expect( window.location.pathname ).toBe( '/collectSounds/undefined/video/video' );
  });

  it( 'handles click on playlist', async () => {
    const user = userEvent.setup();

    const result = render(
      <Content channel={ channel } toggleSaved={() => {}} saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    await user.click( screen.getByText( 'playlist title' ) );

    expect( window.location.pathname ).toBe( '/collectSounds/undefined/playlist/playlistid' );
  });

  it( 'matches to snapshot', async () => {

    const result = render(
      <Content channel={ channel } toggleSaved={ () => {} } saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    expect( result ).toMatchSnapshot();
  });
});