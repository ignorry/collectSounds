import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Channel as ChannelType } from "../../models/content";
import { Thumbnails } from "../../models/api/primitives";

import Channel from "../../components/content/Channel";

describe( 'Channel component', () => {
  const channel = {
    type: 'channel',
    id: 'id',
    title: 'title',
    thumbnails: {
      standard: {
        url: 'http://thumbnail.com'
      },
    },
  } as ChannelType;

  beforeEach( () => {
    channel.thumbnails = {
      standard: {
        url: 'http://thumbnail.com'
      },
    } as Thumbnails;
  });

  it( 'displays all content', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Channel
          channel={channel}
          callback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const img = result.container.querySelector( 'img' );
    const label = result.container.querySelector( 'p' );
  
    expect( img.src ).toBe( 'http://thumbnail.com/' );
    expect( label.innerHTML ).toStrictEqual( 'title' );
  });

  it( 'handles click ', async () => {
    const callback = jest.fn();
    const user = userEvent.setup();

    render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Channel
          channel={channel}
          callback={callback}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    await user.click( screen.getByRole( 'button' ) )

    expect( callback ).toBeCalled();
  });

  it( 'uses default thumbnail', () => {
    channel.thumbnails = {
      default: {
        url: 'http://default.com'
      },
    } as Thumbnails;

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Channel
          channel={channel}
          callback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const img = result.container.querySelector( 'img' );
    
    expect( img.src ).toBe( 'http://default.com/' );
  });

  it( 'displays without thumbnail', () => {
    channel.thumbnails = {
    } as Thumbnails;

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Channel
          channel={channel}
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
        <Channel
          channel={channel}
          callback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});