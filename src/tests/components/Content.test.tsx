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

import Content from "../../components/screens/video/components/Content";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        { children }
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

const video = {
  type: 'video',
  id: 'id',
  publishedAt: 'published at',
  title: 'title',
  description: 'description',
  channelTitle: 'channel title',
  thumbnails: {
    standard: {
      url: 'some url',
    }
  },
  duration: 10000,
  passed: 5000,
} as Video;

describe( 'Content', () => {
  it( 'renders correctly', async () => {
    render(
      <Content video={ video } toggleSaved={ () => {} } saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await waitFor( () => {
      expect( screen.getByText( 'title' ) ).toBeTruthy();
    });
  });

  it( 'handles click on search button', async () => {
    const video = {
      type: 'video',
      id: 'id',
      publishedAt: 'published at',
      title: 'title',
      description: 'description',
      channelTitle: 'channel title',
      thumbnails: {
      },
      duration: 10000,
      passed: 5000,
    } as Video;

    const callback = jest.fn();

    const result = render(
      <Content video={ video } toggleSaved={ callback } saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    result.container.querySelectorAll( 'button' )[1].click();

    expect( callback ).toBeCalled();
  });

  it( 'matches to snapshot', async () => {
    const video = {
      type: 'video',
      id: 'id',
      publishedAt: 'published at',
      title: 'title',
      description: 'description',
      channelTitle: 'channel title',
      thumbnails: {
        default: {
          url: 'some url',
        }
      },
      duration: 10000,
      passed: 5000,
    } as Video;

    const result = render(
      <Content video={ video } toggleSaved={ () => {} } saved={ false }/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 10 ) );

    expect( result ).toMatchSnapshot();
  });
});