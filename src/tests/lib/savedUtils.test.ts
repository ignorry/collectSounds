import MockDate from "mockdate";
import { Video, Playlist, Channel } from "../../models/content";
import { 
  UpdateVideoPayload,
  UpdatePlaylistPayload,
  UpdateChannelPayload,
  updateVideo, updatePlaylist, updateChannel
} from "../../lib/redux/savedUtils";

describe( 'test updateVideo', () => {
  beforeAll(() => {
    MockDate.set(1434319925275);
  });

  test( 'must update Video', () => {
    const newVideo = updateVideo(
      {
        id: "id",
        audioUrl: "first",
      } as Video,
      {
        id: "id",
        audioUrl: "second",
        passed: 10,
      } as UpdateVideoPayload
    )

    expect( newVideo ).toStrictEqual( {
      id: "id",
      audioUrl: "second",
      passed: 10,
      lastModified: 1434319925275
    });
  });
});

describe( 'test updatePlaylist', () => {
  beforeAll(() => {
    MockDate.set(1434319925275);
  });

  test( 'must update Playlist', () => {
    const newPlaylist = updatePlaylist(
      {
        id: "id",
      } as Playlist,
      {
        tags: ["val"],
      } as UpdatePlaylistPayload
    )

    expect( newPlaylist ).toStrictEqual( {
      id: "id",
      tags: ["val"],
      lastModified: 1434319925275
    });
  });
});

describe( 'test updateChannel', () => {
  beforeAll(() => {
    MockDate.set(1434319925275);
  });

  test( 'must update Channel', () => {
    const newChannel = updateChannel(
      {
        id: "id",
      } as Channel,
      {
        tags: ["val"],
      } as UpdateChannelPayload
    )

    expect( newChannel ).toStrictEqual( {
      id: "id",
      tags: ["val"],
      lastModified: 1434319925275
    });
  });
});