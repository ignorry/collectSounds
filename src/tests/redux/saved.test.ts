import MockDate from "mockdate";
import { Channel, Playlist, Video } from "../../models/content";
import store from "../../redux/index";
import {
  addItem,
  deleteItem,
  addVideoToParent,
  addPlaylistToParent,
  updateVideo,
  updatePlaylist,
  updateChannel,
  getVideo,
  getPlaylist,
  getChannel
} from "../../redux/slices/saved";

describe( 'test saved slice', () => {
  // it's imposible to clean store before every test
  beforeAll(() => {
    MockDate.set(1434319925275);
  });

  it( 'addItem', () => {
    store.dispatch( addItem([ { type: 'video', id: 'id' } as Video ]) );

    const data = store.getState().saved.data;

    expect( data ).toStrictEqual( [{ id: 'id', item: { type: 'video', id: 'id' } } ] );
  });

  it( 'deleteItem', () => {
    const videos = [{ id: 'toDel', item: { type: 'video', id: 'toDel' } }];
    const playlists = [{ id: 'playlist', item: { id: 'playlist', type: 'playlist', videos: videos } as Playlist }];
    
    store.dispatch( addItem([ { type: 'channel', id: 'ch', playlists: playlists } as Channel ]) );
    store.dispatch( deleteItem([ 'id', 'toDel' ]) );

    const data = store.getState().saved.data;
    const deleted = store.getState().saved.deleted.map( item => item.id );

    const newPlaylists = [{ id: 'playlist', item: { id: 'playlist', type: 'playlist', videos: []} as Playlist }];
    const expected = [{ id: 'ch', item: { id: 'ch', type: 'channel', playlists: newPlaylists } }];

    expect( data ).toStrictEqual( expected );
    expect( deleted ).toStrictEqual( [ 'id', 'toDel' ] );
  });

  it( 'addVideoToParent', () => {
    store.dispatch( addVideoToParent( {
      id: 'ch',
      video: { id: 'vid', type: 'video' } as Video,
    }));

    const data = store.getState().saved.data;

    const expected = [{ id: 'ch', item: { id: 'ch', type: 'channel', playlists: [{
      id: 'playlist', item: { id: 'playlist', type: 'playlist', videos: [] } as Playlist
    }], videos: [{
      id: 'vid', item: { id: 'vid', type: 'video' } as Video
    }] } }];

    expect( data ).toStrictEqual( expected );
  });

  it( 'addVideoToParent adds to playlist in channel', () => {
    store.dispatch( deleteItem( ['vid'] ) ); //clean item from last test
    
    store.dispatch( addVideoToParent( {
      id: 'playlist',
      video: { id: 'vid', type: 'video' } as Video,
    }));

    const data = store.getState().saved.data;

    const expected = [{ id: 'ch', item: { id: 'ch', type: 'channel', playlists: [{
      id: 'playlist', item: { id: 'playlist', type: 'playlist', videos: [{
        id: 'vid', item: { id: 'vid', type: 'video' } as Video
      }]} as Playlist
    }], videos: [] as Array<any> } }];

    expect( data ).toStrictEqual( expected );
  });

  it( 'addPlaylistToParrent', () => {
    store.dispatch( deleteItem( ['playlist', 'vid'] ) ); //clean from last test

    store.dispatch( addPlaylistToParent({
      id: 'ch',
      playlist: { id: 'pl', type: 'playlist' } as Playlist,
    }) );

    const data = store.getState().saved.data;

    const expected = [{ id: 'ch', item: { id: 'ch', type: 'channel', playlists: [{
      id: 'pl', item: { id: 'pl', type: 'playlist' }
    }], videos: [] as Array<any> }}];

    expect( data ).toStrictEqual( expected );
  });

  it( 'updateVideo must update video in channel>playlist', () => {
    store.dispatch( addVideoToParent({ id: 'pl', video: { id: 'vid', type: 'video' } as Video }) ); //prepare to test
  
    store.dispatch( updateVideo( { id: 'vid', audioUrl: 'audio' } ));

    const data = store.getState().saved.data;

    const expected = [{ id: 'ch', item: { id: 'ch', type: 'channel', playlists: [{
      id: 'pl', item: { id: 'pl', type: 'playlist', videos: [{
        id: 'vid', item: { id: 'vid', type: 'video', audioUrl: 'audio', lastModified: 1434319925275 }
      }] }
    }], videos: [] as Array<any> }}];

    expect( data ).toStrictEqual( expected );
  });

  it( 'updateVideo must update video in channel', () => {
    store.dispatch( deleteItem([ 'pl' ]) );
    store.dispatch( addVideoToParent({ id: 'ch', video: { id: 'vid', type: 'video' } as Video }) ); //prepare to test
  
    store.dispatch( updateVideo( { id: 'vid', audioUrl: 'audio' } ));

    const data = store.getState().saved.data;

    const expected = [{ id: 'ch', item: { id: 'ch', type: 'channel', playlists: [] as Array<any>, videos: [{
      id: 'vid', item: { id: 'vid', type: 'video', audioUrl: 'audio', lastModified: 1434319925275 }
    }] }}];

    expect( data ).toStrictEqual( expected );
  });

  it( 'updateVideo', () => {
    store.dispatch( deleteItem( ['ch'] ) ); //clean from last test

    store.dispatch( addItem([ { id: 'vid', type: 'video' } as Video]) ); //prepare to test
  
    store.dispatch( updateVideo( { id: 'vid', audioUrl: 'audio' } ));

    const data = store.getState().saved.data;

    const expected = [{ id: 'vid', item: { id: 'vid', type: 'video', audioUrl: 'audio', lastModified: 1434319925275 } }];

    expect( data ).toStrictEqual( expected );
  });

  it( 'updatePlaylist', () => {
    store.dispatch( deleteItem( ['vid'] ) ); //clean from last test

    store.dispatch( addItem([ { id: 'pl', type: 'playlist' } as Playlist ]) ); //prepare to test
  
    store.dispatch( updatePlaylist( { id: 'pl', tags: ['tag'] } ) );

    const data = store.getState().saved.data;

    const expected = [{ id: 'pl', item: { id: 'pl', type: 'playlist', tags: ['tag'], lastModified: 1434319925275 } }];

    expect( data ).toStrictEqual( expected );
  });

  it( 'updatePlaylist must update playlist in deep level', () => {
    store.dispatch( deleteItem( ['pl'] ) ); //clean from last test

    store.dispatch( addItem([ { id: 'ch', type: 'channel' } as Channel ]) ); //prepare to test
    store.dispatch( addPlaylistToParent({ id: 'ch', playlist: { id: 'pl', type: 'playlist' } as Playlist }) ); //prepare

    store.dispatch( updatePlaylist( { id: 'pl', tags: ['tag'] } ) );

    const data = store.getState().saved.data;

    const expected = [{ id: 'ch', item: { id: 'ch', type: 'channel', playlists: [{
      id: 'pl', item: { id: 'pl', type: 'playlist', tags: ['tag'], lastModified: 1434319925275 }
    }]}}];

    expect( data ).toStrictEqual( expected );
  });

  it( 'updateChannel', () => {
    store.dispatch( deleteItem( ['ch'] ) ); //clean from last test

    store.dispatch( addItem([ { id: 'ch', type: 'channel' } as Channel ]) ); //prepare to test
  
    store.dispatch( updateChannel( { id: 'ch', tags: ['tag'] } ) );

    const data = store.getState().saved.data;

    const expected = [{ id: 'ch', item: { id: 'ch', type: 'channel', tags: ['tag'], lastModified: 1434319925275 }}];

    expect( data ).toStrictEqual( expected );

    store.dispatch( deleteItem( ['ch'] ) );
  });
});

describe( 'getVideo', () => {
  beforeAll( () => {
    const middle = [{ id: 'middle', item: { id: 'middle', type: 'video' } }];

    const deep = [{ id: 'deep', item: { id: 'deep', type: 'video' } }];
    const playlists = [{ id: 'playlist', item: { id: 'playlist', type: 'playlist', videos: deep } }];

    store.dispatch( addItem([
      { id: 'top', type: 'video' } as Video,
      { id: 'ps', type: 'playlist', videos: middle } as Playlist,
      { id: 'ch', type: 'channel', playlists: playlists } as Channel,
    ]));
  });

  afterAll( () => {
    store.dispatch( deleteItem([ "top", "ps", "ch" ]) );
  });

  it( 'must return video by id', () => {
    const res = getVideo( store.getState().saved, 'top' );

    expect( res ).toStrictEqual( { id: 'top', type: 'video' } );
  });

  it( 'must return video by id in middle depth', () => {
    const res = getVideo( store.getState().saved, 'middle' );

    expect( res ).toStrictEqual( { id: 'middle', type: 'video' } );
  });

  it( 'must return video by id in deep depth', () => {
    const res = getVideo( store.getState().saved, 'deep' );

    expect( res ).toStrictEqual( { id: 'deep', type: 'video' } );
  });

  it( 'must return undefined if there is no video with requested id', () => {
    const res = getVideo( store.getState().saved, 'empty' );

    expect( res ).toStrictEqual( undefined );
  })
});

describe( 'getPlaylist', () => {
  beforeAll( () => {
    const deep = [{ id: 'deep', item: { id: 'deep', type: 'playlist' } }];

    store.dispatch( addItem([
      { id: 'top', type: 'playlist' } as Playlist,
      { id: 'ch', type: 'channel', playlists: deep } as Channel,
    ]));
  });

  afterAll( () => {
    store.dispatch( deleteItem([ 'top', 'ch' ]) );
  })

  it( 'must return playlist by id', () => {
    const res = getPlaylist( store.getState().saved, 'top' );

    expect( res ).toStrictEqual( { id: 'top', type: 'playlist' } );
  });

  it( 'must return playlist by id in deep depth', () => {
    const res = getPlaylist( store.getState().saved, 'deep' );

    expect( res ).toStrictEqual( { id: 'deep', type: 'playlist' } );
  });

  it( 'must return undefined if there is no playlists with requested id', () => {
    const res = getPlaylist( store.getState().saved, 'empty' );

    expect( res ).toStrictEqual( undefined );
  })
});

describe( 'getChannel', () => {
  beforeAll( () => {
    store.dispatch( addItem([
      { id: 'top', type: 'channel' } as Channel,
    ]));
  });

  afterAll( () => {
    store.dispatch( deleteItem([ 'top' ]) );
  })

  it( 'must return channel by id', () => {
    const res = getChannel( store.getState().saved, 'top' );

    expect( res ).toStrictEqual( { id: 'top', type: 'channel' } );
  });

  it( 'must return undefined if there is no channels with requested id', () => {
    const res = getChannel( store.getState().saved, 'empty' );

    expect( res ).toStrictEqual( undefined );
  })
});