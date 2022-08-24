import { 
  getVideoById, 
  getPlaylistById, 
  getChannelById,
  getPlaylistVideos,
  getChannelVideos,
  getChannelPlaylists,
  getPopularVideos,
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

describe( 'getPopularVideos', () => {
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
    const res = await getPopularVideos();

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
  beforeEach( () => {
    let call = 0;

    global.fetch = jest.fn(() => {
      call++;

      if ( call === 1 ) 
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            kind: '',
            etag: '',
            pageInfo: {},
            items: [{
              id: 'test',
              snippet: {
                resourceId: {
                  videoId: 'test'
                }
              },
            }]
          } as PlaylistItemsResponse ),
        });
      if ( call === 2 ) 
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
                kind: 'youtube#playlist',
                playlistId: 'playlistId',
              },
            },{
              id: {
                kind: 'youtube#channel',
                channelId: 'channelId',
              },
            },{
              id: {
                kind: 'youtube#video',
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

  it( 'receives data', async () => {
    const res = await getSearch({});

    expect( res[0].id ).toStrictEqual( 'playlistId' );
    expect( res[1].id ).toStrictEqual( 'channelId' );
    expect( res[2].id ).toStrictEqual( 'videoId' );
  });
});