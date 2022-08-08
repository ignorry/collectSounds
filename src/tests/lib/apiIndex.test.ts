import { 
  getVideoById, 
  getPlaylistById, 
  getChannelById,
  getPlaylistVideos,
  getChannelVideos,
  getChannelPlaylists,
  getSearch
} from "../../lib/api";
import {
  PlaylistItemsResponse,
  VideoIdResponse
} from "../../models/api/video";
import { PlaylistIdResponse } from "../../models/api/playlist";
import { ChannelIdResponse } from "../../models/api/channel";
import { SearchResponse } from "../../models/api/search";

describe( 'getVideoById', () => {
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
    const res = await getVideoById( 'someid' );

    expect( res[0].id ).toStrictEqual( 'test' );
  });
});

describe( 'getPlaylistById', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
          }]
        } as PlaylistIdResponse ),
      }),
    ) as any;
  });

  it( 'receives playlist object', async () => {
    const res = await getPlaylistById( 'someid' );

    expect( res[0].id ).toStrictEqual( 'test' );
  });
});

describe( 'getChannelById', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
          }]
        } as ChannelIdResponse ),
      }),
    ) as any;
  });

  it( 'receives channel object', async () => {
    const res = await getChannelById( 'someid' );

    expect( res[0].id ).toStrictEqual( 'test' );
  });
});

describe( 'getPlaylistVideos', () => {
  let called = false;

  beforeEach( () => {
    global.fetch = jest.fn(() => {
      if ( ! called ) {
        called = true;
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'getPlaylistVideos',
            }]
          } as PlaylistItemsResponse ),
        });
      }

      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
            contentDetails: {},
          }]
        } as VideoIdResponse ),
      });
    }) as any;
  });

  it( 'receives video object', async () => {
    const res = await getPlaylistVideos( 'someid' );

    expect( res[0].id ).toStrictEqual( 'test' );
  });
});

describe( 'getChannelVideos', () => {
  let called = false;

  beforeEach( () => {
    global.fetch = jest.fn(() => {
      if ( ! called ) {
        called = true;
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: {
                kind: 'video',
                videoId: 'some video id',
              },
            }]
          } as SearchResponse ),
        });
      }

      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
            contentDetails: {},
          }]
        } as VideoIdResponse ),
      });
    }) as any;
  });

  it( 'receives video object', async () => {
    const res = await getChannelVideos( 'someid' );

    expect( res[0].id ).toStrictEqual( 'test' );
  });
});

describe( 'getChannelPlaylists', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: [{
            id: 'test',
            snippet: {},
          }]
        } as PlaylistIdResponse ),
      }),
    ) as any;
  });

  it( 'receives playlist object', async () => {
    const res = await getChannelPlaylists( 'someid' );

    expect( res[0].id ).toStrictEqual( 'test' );
  });
});

describe( 'getSearch', () => {
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
                kind: 'playlist',
                playlistId: 'playlistId',
              },
            },{
              id: {
                kind: 'channel',
                channelId: 'channelId',
              },
            },{
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
      } if ( called === 3 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'playlistId',
              snippet: {}
            }]
          } as PlaylistIdResponse ),
        });
      } if ( called === 4 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'channelId',
              snippet: {}
            }]
          } as ChannelIdResponse ),
        });
      }
    }) as any;
  });

  it( 'receives video object', async () => {
    const res = await getSearch({});

    expect( res[0].id ).toStrictEqual( 'playlistId' );
    expect( res[1].id ).toStrictEqual( 'channelId' );
    expect( res[2].id ).toStrictEqual( 'videoId' );
  });
});