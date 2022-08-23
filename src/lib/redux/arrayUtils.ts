/**
 * get value from an array
 * @param {Array<{ id: string, item: any }>} data - array to be changed
 * @param {string} id
 * @returns {any}
 */
export const getVal = ( data: Array<{ id: string, item: any }>, id: string ): any =>
  data.filter( item => item.id === id ).length > 0 ? data.filter( item => item.id === id )[0].item: undefined;

/**
 * set value to an array
 * @param {Array<{ id: string, item: any }>} data - array to be changed
 * @param {string} id
 * @param {any} item
 */
export const setVal = ( data: Array<{ id: string, item: any }>, id: string, item: any ) =>
  data && data.filter( item => item.id === id ).length === 0 ?
    data.push({ id, item }) : data.filter( found => found.item = item );

/**
 * delete value from an array
 * @param {Array<{ id: string, item: any }>} data - array to be changed
 * @param {string} id
 * @returns {void}
 */
export const deleteVal = ( data: Array<{ id: string, item: any }>, id: string ): void =>
  data.forEach( ( item, index ) => item.id === id && data.splice( index, 1 ) )