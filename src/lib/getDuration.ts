/**
 * get duration from ms in readable format (h:mm:ss)
 * @param {number} duration 
 * @returns {string}
 */
export const getDurationFromMs = ( duration: number ): string =>
  `${ duration/3600000 > 1 ? `${ Math.floor( duration/3600000 ) }:` : ''
  }${ duration/60000 > 1 ? `${ duration/60000 < 10 ? '0' : '' }${ Math.floor( duration%3600000/60000 ) }:` : '00:'
  }${ `${ duration%60000/1000 < 10 ? '0' : '' }${ Math.floor( duration%60000/1000 ) }` }`