import { getPublished } from "../../lib/redux/getPublished";
import { Channel, Playlist, Video } from "../../models/content";

describe( 'getPublished', () => {
  it ( 'gets correct publishedAt value', () => {
    const channel = {
      videos: [{
        id: '',
        item: {
          publishedAt: '2022-02-21T05:10:50Z',
        } as Video
      }, {
        id: '',
        item: {
          publishedAt: '2022-02-20T05:10:50Z',
        } as Video
      }],

      playlists: [{
        id: '',
        item: {
          videos: [{
            id: '',
            item: {
              publishedAt: '2022-02-24T05:10:50Z',
            } as Video
          }, {
            id: '',
            item: {
              publishedAt: '2022-02-23T05:10:50Z',
            } as Video
          }],
        } as Playlist
      }, {
        id: '',
        item: {
          videos: [{
            id: '',
            item: {
              publishedAt: '2022-02-22T05:10:50Z',
            } as Video
          }],
        } as Playlist
      }]
    } as Channel

    expect( getPublished( channel ) ).toBe( '2022-02-24T05:10:50Z' );
  });
});