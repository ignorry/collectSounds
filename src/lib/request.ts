type QueryParams = {
  [key: string]: string | number | string[] | undefined;
};

type RetryOptions = {
  retryCount: number;
  retryDelay: number;
};

const defaultRetryOptions: RetryOptions = {
  retryCount: 2,
  retryDelay: 2000,
};

export const queryParams = ( params?: QueryParams ) => {
  if ( !params ) {
      return '';
  }

  const result = new URLSearchParams();

  Object.entries( params ).forEach( ( [key, value] ) => {
      if ( typeof value === 'undefined' ) {
          return;
      }

      if ( Array.isArray( value ) ) {
          return value.forEach( valueItem => result.append( key, valueItem ) );
      }

      result.append( key, value.toString() );
  });

  return result.toString();
}

export const fetchRetry = async ( url: string, init?: RequestInit, retryOptions: RetryOptions = defaultRetryOptions ) => {
  const { retryCount, retryDelay } = retryOptions;

  for ( let attempt = 0; attempt <= Math.max( retryCount, 0 ); attempt++ ) {
      try {
          return await fetch(url, init);
      } catch ( err ) {
          if ( attempt === retryCount ) {
              throw err;
          }

          if ( retryDelay ) {
              await new Promise(resolve => setTimeout(resolve, retryDelay));
          }
      }
  }
}

/**
 * request for some resourse
 * @param {string} url 
 * @param {RequestInit} [options] 
 * @returns {Promise<object>} response of fetch in json
 */
export const request = async <T extends object>( url: string, options?: RequestInit ): Promise<T> => {
  const response = await fetchRetry( url, options );

  if ( response.ok ) {
    return response.json();
  }

  return Promise.reject( response );
}

/**
 * get request
 * @param {string} host - e.g http://example.com
 * @param {string} path - e.g /some/path
 * @param {QueryParams} [query] - object of query params (key: value)
 * @param {RequestInit} [options]
 * @returns {Promise<object>} response of get request
 */
export const get = <T extends object>(
  host: string,
  path: string,
  query?: QueryParams,
  options?: RequestInit
): Promise<T> => {
  return request( `${host}${path}${ queryParams( query ) ? `?${ queryParams( query ) }` : ''}`, options );
}