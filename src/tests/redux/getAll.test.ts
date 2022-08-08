import MockDate from "mockdate";
import { getAll } from "../../lib/redux/getAll";
import { Channel, Content, Playlist, Video } from "../../models/content";
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

describe( 'test getAll()', () => {
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

  it ( 'returns all items from state', () => {
    const data: any = store.dispatch( getAll() );

    expect( data[0].id ).toBe( 'topVideo' );
    expect( data[1].id ).toBe( 'topChannel' );
    expect( data[2].id ).toBe( 'middleVideo' );
    expect( data[3].id ).toBe( 'middlePlaylist' );
    expect( data[4].id ).toBe( 'deepVideo' );
    expect( data[5].id ).toBe( 'middlePlaylist2' );
  })
});