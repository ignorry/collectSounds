import store from "../../redux";
import {
  loadVideo,
  loadPlaylist,
  loadChannel,
  loadPlaylistVideos,
  loadChannelVideos,
  loadChannelPlaylists,
  loadSearch
} from "../../redux/middleware/apiCall";
import {
  PlaylistItemsResponse,
  VideoIdResponse
} from "../../models/api/video";
import { PlaylistIdResponse } from "../../models/api/playlist";
import { ChannelIdResponse } from "../../models/api/channel";
import { SearchItem, SearchResponse } from "../../models/api/search";
import { getSearch } from "../../lib/api";

describe( 'loadVideo', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
            contentDetails: {},
          }]
        } as VideoIdResponse ),
      }),
    ) as any;
  });

  it( 'receives video object', async () => {
    const res: any = await store.dispatch( loadVideo( 'someid' ) );

    expect( res[0].id ).toStrictEqual( 'test' );
  });

  it( 'throws an error if the request failed', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: false
      }),
    ) as any;

    await store.dispatch( loadVideo( 'someid' ) );

    const message = store.getState().errorMessage.message;

    expect( message ).toStrictEqual( 'Sorry, failed to load video (T⌓T)' );
  });
});

describe( 'loadPlaylist', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
            contentDetails: {},
          }]
        } as PlaylistIdResponse ),
      }),
    ) as any;
  });

  it( 'receives playlist object', async () => {
    const res: any = await store.dispatch( loadPlaylist( 'someid' ) );

    expect( res[0].id ).toStrictEqual( 'test' );
  });

  it( 'throws an error if the request failed', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: false
      }),
    ) as any;

    await store.dispatch( loadPlaylist( 'someid' ) );

    const message = store.getState().errorMessage.message;

    expect( message ).toStrictEqual( 'Sorry, failed to load playlist ╥﹏╥' );
  });
});

describe( 'loadChannel', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
            contentDetails: {},
          }]
        } as ChannelIdResponse ),
      }),
    ) as any;
  });

  it( 'receives channel object', async () => {
    const res: any = await store.dispatch( loadChannel( 'someid' ) );

    expect( res[0].id ).toStrictEqual( 'test' );
  });

  it( 'throws an error if the request failed', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: false
      }),
    ) as any;

    await store.dispatch( loadChannel( 'someid' ) );

    const message = store.getState().errorMessage.message;

    expect( message ).toStrictEqual( 'Sorry, failed to load channel (⋟﹏⋞)' );
  });
});

describe( 'loadPlaylistVideos', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
            contentDetails: {},
          }]
        } as VideoIdResponse ),
      }),
    ) as any;
  });

  it( 'receives playlist videos', async () => {
    const res: any = await store.dispatch( loadPlaylistVideos( 'someid' ) );

    expect( res[0].id ).toStrictEqual( 'test' );
  });

  it( 'throws an error if the request failed', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: false
      }),
    ) as any;

    await store.dispatch( loadPlaylistVideos( 'someid' ) );

    const message = store.getState().errorMessage.message;

    expect( message ).toStrictEqual( 'Sorry, failed to load videos (ಥ_ಥ)' );
  });
});

describe( 'loadChannelVideos', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
            contentDetails: {},
          }]
        } as VideoIdResponse ),
      }),
    ) as any;
  });

  it( 'receives channel videos', async () => {
    const res: any = await store.dispatch( loadChannelVideos( 'someid' ) );

    expect( res[0].id ).toStrictEqual( 'test' );
  });

  it( 'throws an error if the request failed', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: false
      }),
    ) as any;

    await store.dispatch( loadChannelVideos( 'someid' ) );

    const message = store.getState().errorMessage.message;

    expect( message ).toStrictEqual( 'Sorry, failed to load videos（πーπ）' );
  });
});

describe( 'loadChannelPlaylists', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
            contentDetails: {},
          }]
        } as PlaylistIdResponse ),
      }),
    ) as any;
  });

  it( 'receives channel playlists', async () => {
    const res: any = await store.dispatch( loadChannelPlaylists( 'someid' ) );

    expect( res[0].id ).toStrictEqual( 'test' );
  });

  it( 'throws an error if the request failed', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: false
      }),
    ) as any;

    await store.dispatch( loadChannelPlaylists( 'someid' ) );

    const message = store.getState().errorMessage.message;

    expect( message ).toStrictEqual( 'Sorry, failed to load playlists T⌓T' );
  });
});

describe( 'loadSearch', () => {
  let called = 0;

  beforeEach( () => {
    global.fetch = jest.fn(() => {
      called++;

      if ( called === 1 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: {
                kind: 'video',
                videoId: 'videoId',
              },
            }]
          } as SearchResponse ),
        });
      } if ( called === 2 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'videoId',
              snippet: {},
              contentDetails: {}
            }]
          } as VideoIdResponse ),
        });
      } 
    }) as any;
  });

  it( 'receives search results', async () => {
    const res: any = await store.dispatch( loadSearch({}) );

    expect( res[0].id ).toStrictEqual( 'videoId' );
  });

  it( 'throws an error if the request failed', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: false
      }),
    ) as any;

    await store.dispatch( loadSearch({}) );

    const message = store.getState().errorMessage.message;

    expect( message ).toStrictEqual( 'Sorry, failed to load search results (T-T)' );
  });
});