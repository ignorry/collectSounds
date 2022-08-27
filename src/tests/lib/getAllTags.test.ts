import { Channel, Playlist, Video } from "../../models/content";
import store from "../../redux/index";
import {
  addItem,
  addVideoToParent,
  addPlaylistToParent,
  deleteItem,
} from "../../redux/slices/saved";

import {
  getAllTags
} from "../../lib/redux/getAllTags";

describe( 'test getAllTags utils', () => {
  beforeAll( () => {
    store.dispatch( addItem([{
      type: 'video',
      id: 'topVideo',
      tags: ['1', '2']
    } as Video ]));

    store.dispatch( addItem([{
      type: 'channel',
      id: 'topChannel',
      tags: []
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
        id: 'middlePlaylist2',
        tags: ['1', '3']
      } as Playlist
    }));

    store.dispatch( addVideoToParent({
      id: 'topChannel',
      video: {
        type: 'video',
        id: 'middleVideo',
        tags: ['4']
      } as Video
    }));

    store.dispatch( addVideoToParent({
      id: 'middlePlaylist',
      video: {
        type: 'video',
        id: 'deepVideo',
        tags: ['2']
      } as Video
    }))
  });

  it( 'get all tags', () => {
    const tags: any = store.dispatch( getAllTags() );

    expect( tags ).toStrictEqual( ['1','2','4','3'] );
  });

  it( 'run without tags', () => {
    store.dispatch( deleteItem([ 'topVideo', 'topChannel' ]));
    store.dispatch( addItem([{
      type: 'video',
      id: 'top',
    } as Video ]));

    const tags: any = store.dispatch( getAllTags() );

    expect( tags ).toStrictEqual( [] );
  });

  it( 'run without items', () => {
    store.dispatch( deleteItem([ 'top' ]));

    const tags: any = store.dispatch( getAllTags() );

    expect( tags ).toStrictEqual( [] );
  });
});