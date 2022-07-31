import {
  parseISOToNumber,
  parseVideo,
  parsePlaylist,
  parseChannel
} from "../../lib/api/parseApiResponse";
import { ChannelIdResponse } from "../../models/api/channel";
import { PlaylistIdResponse } from "../../models/api/playlist";
import { VideoIdResponse } from "../../models/api/video";

describe( "test parseISOToNumber", () => {
  test( "must return right number", () => {
    const res = parseISOToNumber( "PT1H10M31S" );

    expect( res ).toBe( 991000 );
  });

  test( "must return 0 if string is empty", () => {
    const res = parseISOToNumber( "PT1H10M31S" );

    expect( res ).toBe( 991000 );
  });
});

describe( "test parseVideo", () => {
  test( "must return correct object", () => {
    const res = parseVideo({
      items: [{
        id: "id",
        snippet: {
          publishedAt: "",
          title: "",
          description: "",
          defaultLanguage: "",
          channelTitle: "",
          thumbnails: {},
        },
        contentDetails: {
          duration: "",
        }
      }],
    } as VideoIdResponse)

    expect( res[0].id ).toBe( "id" );
  });

  test( "must return null if api response doesn't contain a required prop", () => {
    const wrap = () => {
      try {
        return parseVideo({
          items: [{
            id: "id",
            contentDetails: {
              duration: "",
            }
          }],
        } as VideoIdResponse)
      } catch {
        return null;
      }
    };

    const res = wrap();

    expect( res ).toBe( null );
  });
});

describe( "test parsePlaylist", () => {
  test( "must return correct object", () => {
    const res = parsePlaylist({
      items: [{
        id: "id",
        snippet: {
          publishedAt: "",
          title: "",
          description: "",
          defaultLanguage: "",
          channelTitle: "",
          thumbnails: {},
        },
      }],
    } as PlaylistIdResponse)

    expect( res[0].id ).toBe( "id" );
  });

  test( "must return null if api response doesn't contain a required prop", () => {
    const wrap = () => {
      try {
        return parsePlaylist({
          items: [{
            id: "id",
          }],
        } as PlaylistIdResponse)
      } catch {
        return null;
      }
    };

    const res = wrap();

    expect( res ).toBe( null );
  });
});

describe( "test parseChannel", () => {
  test( "must return correct object", () => {
    const res = parseChannel({
      items: [{
        id: "id",
        snippet: {
          publishedAt: "",
          title: "",
          description: "",
          customUrl: "",
          thumbnails: {},
        },
      }],
    } as ChannelIdResponse)

    expect( res[0].id ).toBe( "id" );
  });

  test( "must return null if api response doesn't contain a required prop", () => {
    const wrap = () => {
      try {
        return parseChannel({
          items: [{
            id: "id",
          }],
        } as ChannelIdResponse)
      } catch {
        return null;
      }
    };

    const res = wrap();

    expect( res ).toBe( null );
  });
});