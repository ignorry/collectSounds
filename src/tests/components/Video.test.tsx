import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Video as VideoType } from "../../models/content";

import Video from "../../components/content/Video";
import { Thumbnails } from "../../models/api/primitives";

describe( 'Video component', () => {
  const video = {
    type: 'video',
    id: 'id',
    publishedAt: 'publishedAt',
    title: 'title',
    channelTitle: 'channelTitle',
    thumbnails: {
      standard: {
        url: 'http://thumbnail.com'
      },
    },
    duration: 59000,
    passed: 5000
  } as VideoType;

  beforeEach( () => {
    video.thumbnails = {
      standard: {
        url: 'http://thumbnail.com'
      },
    } as Thumbnails;
  });

  it( 'displays all content', () => {
    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Video
          video={video}
          callback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const img = result.container.querySelector( 'img' );
    const range: HTMLInputElement = result.container.querySelector( 'input[type=range]' );
    const labels = Array.from( result.container.querySelectorAll( 'p' ) ).map( item => item.innerHTML );
  
    expect( img.src ).toBe( 'http://thumbnail.com/' );
    expect( range.value ).toBe( '5000' );
    expect( labels ).toStrictEqual([ '59', 'title', 'channelTitle', 'publishedAt' ]);
  });

  it( 'handles click ', async () => {
    const callback = jest.fn();
    const user = userEvent.setup();

    render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Video
          video={video}
          callback={callback}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    await user.click( screen.getByRole( 'button' ) )

    expect( callback ).toBeCalled();
  });

  it( 'uses default thumbnail', () => {
    video.thumbnails = {
      default: {
        url: 'http://default.com'
      },
    } as Thumbnails;

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Video
          video={video}
          callback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const img = result.container.querySelector( 'img' );
    
    expect( img.src ).toBe( 'http://default.com/' );
  });

  it( 'displays without thumbnail', () => {
    video.thumbnails = {
    } as Thumbnails;

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <Video
          video={video}
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
        <Video
          video={video}
          callback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});