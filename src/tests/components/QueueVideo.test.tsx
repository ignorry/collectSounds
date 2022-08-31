import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Video as VideoType } from "../../models/content";

import QueueVideo from "../../components/content/QueueVideo";
import { Thumbnails } from "../../models/api/primitives";

describe( 'QueueVideo component', () => {
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
        <QueueVideo
          video={video}
          callback={() => {}}
          deleteCallback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    const img = result.container.querySelector( 'img' );
    const range: HTMLInputElement = result.container.querySelector( 'input[type=range]' );
    const labels = Array.from( result.container.querySelectorAll( 'p' ) ).map( item => item.innerHTML );
  
    expect( img.src ).toBe( 'http://thumbnail.com/' );
    expect( range.value ).toBe( '5000' );
    expect( labels ).toStrictEqual([ 'title', '59' ]);
  });

  it( 'handles click', async () => {
    const callback = jest.fn();

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <QueueVideo
          video={video}
          callback={callback}
          deleteCallback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'handles click on delete button', async () => {
    const callback = jest.fn();

    const result = render(
      <ThemeProvider theme={ getTheme( true ) } >
        <QueueVideo
          video={video}
          callback={callback}
          deleteCallback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    result.container.querySelectorAll( 'button' )[1].click();

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
        <QueueVideo
          video={video}
          callback={() => {}}
          deleteCallback={() => {}}
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
        <QueueVideo
          video={video}
          callback={() => {}}
          deleteCallback={() => {}}
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
        <QueueVideo
          video={video}
          callback={() => {}}
          deleteCallback={() => {}}
        />
        <GlobalStyles/>
      </ThemeProvider>
    );

    expect( result ).toMatchSnapshot();
  });
});