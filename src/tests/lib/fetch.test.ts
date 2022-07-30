import { 
  assignKey, 
  fetchVideo, 
  fetchPlaylist, 
  fetchPlaylistItems,
  fetchChannel,
  fetchSearch,
  fetchTrack,
  QueryParams
} from "../../lib/api/fetch";

const YOUTUBE_API_HOST = process.env.YOUTUBE_API_HOST ?? "";
const T_ONE_API_HOST = process.env.T_ONE_API_HOST ?? "";

const YOUTUBE_API_TOKEN = process.env.YOUTUBE_API_TOKEN ?? "";
const T_ONE_API_TOKEN = process.env.T_ONE_API_TOKEN ?? "";

describe( 'test assignKey', () => {
  test( 'assignKey must assign new value to object', () => {
    const obj: QueryParams = {first: '1', second: '2'}

    const res = assignKey( obj );

    expect( res ).toStrictEqual( {
      first: '1',
      second: '2',
      key: YOUTUBE_API_TOKEN,
    } );
  });
});

describe( 'test fetch methods', () => {
  beforeEach( () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve("success"),
      }),
    ) as any;
  });

  test( 'test fetchVideo', async () => {
    const res = await fetchVideo( {
      part: ""
    } );

    expect( res ).toBe( 'success' );
    expect( fetch ).toHaveBeenCalledWith(
      `${YOUTUBE_API_HOST}/youtube/v3/videos?part=&key=${YOUTUBE_API_TOKEN}`,
      {"headers": {"Accept": "application/json"}}
    );
  });

  test( 'test fetchPlaylist', async () => {
    const res = await fetchPlaylist( {
      part: ""
    } );

    expect( res ).toBe( 'success' );
    expect( fetch ).toHaveBeenCalledWith(
      `${YOUTUBE_API_HOST}/youtube/v3/playlists?part=&key=${YOUTUBE_API_TOKEN}`,
      {"headers": {"Accept": "application/json"}}
    );
  });

  test( 'test fetchPlaylistItems', async () => {
    const res = await fetchPlaylistItems( {
      part: ""
    } );

    expect( res ).toBe( 'success' );
    expect( fetch ).toHaveBeenCalledWith(
      `${YOUTUBE_API_HOST}/youtube/v3/playlistItems?part=&key=${YOUTUBE_API_TOKEN}`,
      {"headers": {"Accept": "application/json"}}
    );
  });

  test( 'test fetchChannel', async () => {
    const res = await fetchChannel( {
      part: ""
    } );

    expect( res ).toBe( 'success' );
    expect( fetch ).toHaveBeenCalledWith(
      `${YOUTUBE_API_HOST}/youtube/v3/channels?part=&key=${YOUTUBE_API_TOKEN}`,
      {"headers": {"Accept": "application/json"}}
    );
  });

  test( 'test fetchSearch', async () => {
    const res = await fetchSearch( {
      part: ""
    } );

    expect( res ).toBe( 'success' );
    expect( fetch ).toHaveBeenCalledWith(
      `${YOUTUBE_API_HOST}/youtube/v3/search?part=&key=${YOUTUBE_API_TOKEN}`,
      {"headers": {"Accept": "application/json"}}
    );
  });

  test( 'test fetchTrack', async () => {
    const res = await fetchTrack( "test_url" );

    expect( res ).toBe( 'success' );
    expect( fetch ).toHaveBeenCalledWith(
      `${T_ONE_API_HOST}/api/v1/createProcess?url=test_url&format=mp3&responseFormat=json`,
      {"headers": {
        "X-RapidAPI-Host": "t-one-youtube-converter.p.rapidapi.com",
        "X-RapidAPI-Key": T_ONE_API_TOKEN,
      }}
    );
  });
});