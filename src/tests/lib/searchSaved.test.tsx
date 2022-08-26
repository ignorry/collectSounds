import { Channel, Playlist, Video } from "../../models/content";
import store from "../../redux/index";
import {
  addItem,
  addVideoToParent,
  addPlaylistToParent,
  deleteItem
} from "../../redux/slices/saved";
import {
  searchSaved
} from "../../lib/redux/searchSaved";

describe( 'test getAll()', () => {
  beforeAll( () => {
    store.dispatch( addItem([{
      type: 'video',
      id: 'topVideo',
      title: '1 som',
      publishedAt: '2022-02-21T05:10:50Z',
      duration: 1.8e+7,
      lastModified: 10,
      tags: ['1','3']
    } as Video ]));

    store.dispatch( addItem([{
      type: 'channel',
      id: 'topChannel',
      title: '6',
      lastModified: 1,
      tags: ['1','2','3']
    } as Channel ]));

    store.dispatch( addPlaylistToParent({
      id: 'topChannel',
      playlist: {
        type: 'playlist',
        id: 'middlePlaylist',
        title: '4 som',
        lastModified: 2,
      } as Playlist
    }));

    store.dispatch( addPlaylistToParent({
      id: 'topChannel',
      playlist: {
        type: 'playlist',
        id: 'middlePlaylist2',
        title: '5',
        lastModified: 4,
      } as Playlist
    }));

    store.dispatch( addVideoToParent({
      id: 'topChannel',
      video: {
        type: 'video',
        id: 'middleVideo',
        title: '3',
        publishedAt: '2022-02-20T05:10:50Z',
        duration: 9e+7,
        lastModified: 6,
      } as Video
    }));

    store.dispatch( addVideoToParent({
      id: 'middlePlaylist',
      video: {
        type: 'video',
        id: 'deepVideo',
        title: '3',
        publishedAt: '2022-02-21T05:10:50Z',
        duration: 1.8e+8,
        lastModified: 10,
      } as Video
    }))
  });

  it( 'with empty searchQuery', () => {
    const data: any = store.dispatch( searchSaved({}) );

    expect( data[0].id ).toBe( 'topVideo' );
    expect( data[1].id ).toBe( 'topChannel' );
  });

  it( 'search for videos', () => {
    const data: any = store.dispatch( searchSaved({ type: 'video' }) );

    expect( data[0].id ).toBe( 'topVideo' );
    expect( data[1].id ).toBe( 'middleVideo' );
    expect( data[2].id ).toBe( 'deepVideo' );
  });

  it( 'search for playlists', () => {
    const data: any = store.dispatch( searchSaved({ type: 'playlist' }) );

    expect( data[0].id ).toBe( 'middlePlaylist' );
    expect( data[1].id ).toBe( 'middlePlaylist2' );
  });

  it( 'search for channel', () => {
    const data: any = store.dispatch( searchSaved({ type: 'channel' }) );

    expect( data[0].id ).toBe( 'topChannel' );
  });

  it( 'search with query', () => {
    const data: any = store.dispatch( searchSaved({ q: 'som' }) );

    expect( data[0].id ).toBe( 'topVideo' );
  });

  it( 'search by tag', () => {
    const data: any = store.dispatch( searchSaved({ tag: '2' }) );

    expect( data[0].id ).toBe( 'topChannel' );
  });

  it( 'search by short duration', () => {
    const data: any = store.dispatch( searchSaved({ duration: 'short' }) );

    expect( data[0].id ).toBe( 'topVideo' );
  });

  it( 'search by medium duration', () => {
    const data: any = store.dispatch( searchSaved({ type: 'video', duration: 'medium' }) );

    expect( data[0].id ).toBe( 'middleVideo' );
  });

  it( 'search by short duration', () => {
    const data: any = store.dispatch( searchSaved({ type: 'video', duration: 'long' }) );

    expect( data[0].id ).toBe( 'deepVideo' );
  });

  it( 'sort by addition', () => {
    const data: any = store.dispatch( searchSaved({ type: 'video', order: 'addition' }) );

    expect( data[0].id ).toBe( 'topVideo' );
    expect( data[1].id ).toBe( 'deepVideo' );
    expect( data[2].id ).toBe( 'middleVideo' );
  });

  it( 'sort by date', () => {
    const data: any = store.dispatch( searchSaved({ type: 'video', order: 'date' }) );

    expect( data[0].id ).toBe( 'topVideo' );
    expect( data[1].id ).toBe( 'deepVideo' );
    expect( data[2].id ).toBe( 'middleVideo' );
  });

  it( 'sort by title', () => {
    const data: any = store.dispatch( searchSaved({ type: 'video', order: 'title' }) );

    expect( data[0].id ).toBe( 'topVideo' );
    expect( data[1].id ).toBe( 'middleVideo' );
    expect( data[2].id ).toBe( 'deepVideo' );
  });

  it( 'with empty redux store', () => {
    store.dispatch( deleteItem([ 'topVideo', 'topChannel' ]) )

    const data: any = store.dispatch( searchSaved({}) );

    expect( data ).toStrictEqual( [] );
  });
});

/*
it( 'search for videos', () => {
    const data: any = store.dispatch( searchSaved({ type: 'video' }) );

    expect( data[0].id ).toBe( 'topVideo' );
    expect( data[1].id ).toBe( 'topChannel' );
    expect( data[2].id ).toBe( 'middleVideo' );
    expect( data[3].id ).toBe( 'middlePlaylist' );
    expect( data[4].id ).toBe( 'deepVideo' );
    expect( data[5].id ).toBe( 'middlePlaylist2' );
  }); */