import MockDate from "mockdate";
import store from "../../redux/index";
import { Channel, Playlist, Video } from "../../models/content";
import {
  addItem, deleteItem
} from "../../redux/slices/saved";

import {
  getPlaylistsAndChannels,
  updateContents
} from "../../redux/middleware/syncYoutube";
import { SearchResponse } from "../../models/api/search";
import { PlaylistItemsResponse, VideoIdResponse } from "../../models/api/video";
import { PlaylistIdResponse } from "../../models/api/playlist";

describe( 'test getPlaylistsAndChannels', () => {
  const playlists = new Map();
    playlists.set( 'plInChannel', {
      type: 'playlist',
      id: 'plInChannel',
    })

  beforeAll(() => {
    MockDate.set(1434319925275);

    store.dispatch( addItem( [{
        type: 'channel',
        id: 'channelId',
        playlists,
      } as Channel, {
        type: 'video',
        id: 'videoId',
      } as Video, {
        type: 'playlist',
        id: 'playlistId',
      } as Playlist
    ]));
  });

  afterAll(() => {
    store.dispatch( deleteItem( ['channelId', 'videoId', 'playlistId'] ) );
  })
  
  it( 'returns map containing all playlists and channels from state', () => {
    const res = store.dispatch( getPlaylistsAndChannels() );

    expect( res ).toStrictEqual([{
        type: 'channel',
        id: 'channelId',
        playlists,
      },{
        type: 'playlist',
        id: 'playlistId',
      },{
        type: 'playlist',
        id: 'plInChannel',
      }
    ]);
  });
});

describe( 'test updateContents', () => {
  let called = 0;

  beforeAll(() => {
    MockDate.set(1434319925275);

    store.dispatch( addItem( [{
        type: 'playlist',
        id: 'playlistId'
      } as Playlist
    ]));

    global.fetch = jest.fn(() => {
      called++;

      if ( called === 1 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'newVideo',
            }]
          } as PlaylistItemsResponse ),
        });
      } if ( called === 2 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'newVideo',
              snippet: {},
              contentDetails: {}
            }]
          } as VideoIdResponse ),
        });
      } 
    }) as any;
  });

  it( 'updates playlist videos', async () => {
    await store.dispatch( updateContents() );

    await new Promise(resolve => setTimeout(resolve, 500));

    const playlist = store.getState().saved.data.get( 'playlistId' );

    if ( playlist.type !== 'playlist' ) throw new Error( 'type of item is wrong' );
    
    expect( playlist.videos.get( 'newVideo' ).type ).toBe( 'video' );
  });

  it( 'updates channel videos and playlists', async () => {
    let called = 0;

    store.dispatch( deleteItem( ['playlistId'] ) );
    store.dispatch( addItem( [{
        type: 'channel',
        id: 'channelId'
      } as Channel
    ]));

    global.fetch = jest.fn(() => {
      called++;

      if ( called === 1 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: {
                kind: 'video',
                videoId: 'newVideo',
              }
            }]
          } as SearchResponse ),
        });
      } if ( called === 2 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'newVideo',
              snippet: {},
              contentDetails: {}
            }]
          } as VideoIdResponse ),
        });
      } if ( called >= 3 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
              items: [{
                id: 'newPlaylist',
                snippet: {},
              }]
            } as PlaylistIdResponse ),
        });
      }
    }) as any;

    await store.dispatch( updateContents() );

    await new Promise(resolve => setTimeout(resolve, 500));

    const channel = store.getState().saved.data.get( 'channelId' );

    if ( channel.type !== 'channel' ) throw new Error( 'type of item is wrong' );
    
    expect( channel.videos.get( 'newVideo' ).type ).toBe( 'video' );
    expect( channel.playlists.get( 'newPlaylist' ).type ).toBe( 'playlist' );
  });

  it( 'run without videos', async () => {
    called = 0;

    store.dispatch( deleteItem( ['channelId'] ) );
    store.dispatch( addItem( [{
        type: 'playlist',
        id: 'playlistId'
      } as Playlist
    ]));

    global.fetch = jest.fn(() => {
      called++;

      if ( called === 1 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'newVideo',
            }]
          } as PlaylistItemsResponse ),
        });
      } if ( called === 2 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: []
          } as VideoIdResponse ),
        });
      } 
    }) as any;

    await store.dispatch( updateContents() );

    await new Promise(resolve => setTimeout(resolve, 500));

    const playlist = store.getState().saved.data.get( 'playlistId' );

    if ( playlist.type !== 'playlist' ) throw new Error( 'type of item is wrong' );
    
    expect( playlist.videos ).toBe( undefined );
  });

  it( 'run without playlist', async () => {
    let called = 0;

    store.dispatch( deleteItem( ['playlistId'] ) );
    store.dispatch( addItem( [{
        type: 'channel',
        id: 'channelId'
      } as Channel
    ]));

    global.fetch = jest.fn(() => {
      called++;

      if ( called === 1 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: {
                kind: 'video',
                videoId: 'newVideo',
              }
            }]
          } as SearchResponse ),
        });
      } if ( called === 2 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            items: [{
              id: 'newVideo',
              snippet: {},
              contentDetails: {}
            }]
          } as VideoIdResponse ),
        });
      } if ( called >= 3 ) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
              items: []
            } as PlaylistIdResponse ),
        });
      }
    }) as any;

    await store.dispatch( updateContents() );

    await new Promise(resolve => setTimeout(resolve, 500));

    const channel = store.getState().saved.data.get( 'channelId' );

    if ( channel.type !== 'channel' ) throw new Error( 'type of item is wrong' );
    
    expect( channel.videos.get( 'newVideo' ).type ).toBe( 'video' );
    expect( channel.playlists ).toBe( undefined );
  });
})