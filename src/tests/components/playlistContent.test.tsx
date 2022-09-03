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

import Content from "../../components/screens/playlist/components/Content";
import userEvent from "@testing-library/user-event";

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

const playlist = { 
  type: 'playlist',
  id: 'someid',
  title: 'title',
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
} as Playlist;

describe( 'Content', () => {
  it( 'renders correctly', async () => {
    render(
      <Content playlist={ playlist } toggleSaved={ () => {} } saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( screen.getByText( 'title' ) ).toBeTruthy();
    });
  });

  it( 'handles click on save button', async () => {
    const playlist = { 
      type: 'playlist',
      id: 'someid',
      title: 'title',
      description: '',
      channelTitle: 'channel title',
      thumbnails: {},
      videos: []
    } as Playlist;

    const callback = jest.fn();

    const result = render(
      <Content playlist={ playlist } toggleSaved={ callback } saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'handles click on video', async () => {
    const user = userEvent.setup();

    const result = render(
      <Content playlist={ playlist } toggleSaved={() => {}} saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    await user.click( screen.getByText( 'video title' ) );

    expect( window.location.pathname ).toBe( '/collectSounds/undefined/video/video' );
  });

  it( 'matches to snapshot', async () => {
    const playlist = { 
      type: 'playlist',
      id: 'someid',
      title: 'title',
      description: 'description',
      channelTitle: 'channel title',
      thumbnails: {
        default: {
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
    } as Playlist;

    const result = render(
      <Content playlist={ playlist } toggleSaved={ () => {} } saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    expect( result ).toMatchSnapshot();
  });
});