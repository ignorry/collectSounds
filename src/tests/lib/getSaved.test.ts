import { Channel, Playlist, Video } from "../../models/content";
import store from "../../redux/index";
import {
  addItem,
  addVideoToParent,
  addPlaylistToParent,
} from "../../redux/slices/saved";

import {
  getSaved,
  getSavedChannels,
  getSavedPlaylists,
  getSavedVideos
} from "../../lib/redux/getSaved";

describe( 'test getSaved utils', () => {
  beforeAll( () => {
    store.dispatch( addItem([{
      type: 'video',
      id: 'topVideo'
    } as Video ]));

    store.dispatch( addItem([{
      type: 'channel',
      id: 'topChannel'
    } as Channel ]));

    store.dispatch( addPlaylistToParent({
      id: 'topChannel',
      playlist: {
        type: 'playlist',
        id: 'middlePlaylist'
      } as Playlist
    }));

    store.dispatch( addPlaylistToParent({
      id: 'topChannel',
      playlist: {
        type: 'playlist',
        id: 'middlePlaylist2'
      } as Playlist
    }));

    store.dispatch( addVideoToParent({
      id: 'topChannel',
      video: {
        type: 'video',
        id: 'middleVideo'
      } as Video
    }));

    store.dispatch( addVideoToParent({
      id: 'middlePlaylist',
      video: {
        type: 'video',
        id: 'deepVideo'
      } as Video
    }))
  });

  it( 'getSaved', () => {
    const data: any = store.dispatch( getSaved() );

    expect( data[0].id ).toBe( 'topVideo' );
    expect( data[1].id ).toBe( 'topChannel' );
  });

  it ( 'getSavedChannels', () => {
    const data: any = store.dispatch( getSavedChannels() );

    expect( data[0].id ).toBe( 'topChannel' )
  });

  it ( 'getSavedPlaylists', () => {
    const data: any = store.dispatch( getSavedPlaylists() );

    expect( data[0].id ).toBe( 'middlePlaylist' );
    expect( data[1].id ).toBe( 'middlePlaylist2' );
  });

  it ( 'getSavedVideos', () => {
    const data: any = store.dispatch( getSavedVideos() );

    expect( data[0].id ).toBe( 'topVideo' );
    expect( data[1].id ).toBe( 'middleVideo' );
    expect( data[2].id ).toBe( 'deepVideo' );
  });
});