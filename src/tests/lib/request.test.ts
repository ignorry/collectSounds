import { fetchRetry, get, queryParams, request } from '../../lib/request';

describe( 'test queryParams', () => {
  test( 'queryParams must return params string from an object', () => {
    const res = queryParams({
      first: '1st',
      second: 2,
      third: ['3', '4'],
      fourth: undefined
    });

    expect( res ).toBe( 'first=1st&second=2&third=3&third=4');
  });

  test( 'queryParams must return empty string if there is no params', () => {
    const res = queryParams();

    expect( res ).toBe( '' );
  });
});

describe( 'test fetchRetry', () => {
  test( 'fetchRetry must return fetch response', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve("success"),
    ) as any;

    const res = await fetchRetry( 'test' );

    expect( res ).toBe( 'success' );
    expect( fetch ).toBeCalledTimes( 1 );
  });

  test( 'fetchRetry must throw error if server doesn`t response', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject("fuck this!!!!"),
    ) as any;

    const wrap = async () => {
      try {
        return await fetchRetry( 'test' );
      } catch {
        return null;
      }
    };

    const res = await wrap();

    expect( res ).toBe( null );
  }, 10000);
});

describe( 'test request', () => {
  test( 'request must return response', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve("success"),
      }),
    ) as any;

    const res = await request( 'host' );

    expect( res ).toBe( 'success' );
    expect( fetch ).toBeCalledTimes( 1 );
  });

  test( 'request must throw error if the ok prop isn`t equal to true', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve("success"),
      }),
    ) as any;


    const wrap = async () => {
      try {
        return await request( 'test' );
      } catch {
        return null;
      }
    };

    const res = await wrap();

    expect( res ).toBe( null );
  });
});

describe( 'test get', () => {
  test( 'must create correct path', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve("success"),
      }),
    ) as any;

    const res = await get( 'host', '/path', {first: '1'} );

    expect( res ).toBe( 'success' );
    expect( fetch ).toHaveBeenCalledWith(
      "host/path?first=1", undefined
    );
  })
});