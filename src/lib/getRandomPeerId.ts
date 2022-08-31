/**
 * generates 64 characters id starting with 'collectS'
 * @returns { string }
 */
export const getRandomPeerId = () => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( let i = 0; i < 56; i++ ) {
    result += characters.charAt( Math.floor( Math.random() * characters.length ) );
  }

  return 'collectS' + result;
}
