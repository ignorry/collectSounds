/**
 * get persisted store
 * @return {Promise<any | undefined>} result or undefined if failed
 */
export const getPersistedDB = async () => await new Promise( ( resolve ) => {
  const openRequest = indexedDB.open( 'root', 2 );

  openRequest.onerror = () => {
    console.error( 'Error', openRequest.error );
    resolve( undefined );
  };
  
  openRequest.onsuccess = () => {
    const db = openRequest.result;

    const saved = db.transaction( 'keyvaluepairs', 'readonly' )
      .objectStore( 'keyvaluepairs' ).getAll();
    
    saved.onsuccess = () => {
      const res = JSON.parse( saved.result[0] );

      resolve( res );
    }
    
    saved.onerror = () => {
      console.error( 'Error', saved.error );
      resolve( undefined );
    }
  };
});

/**
 * get slice of persisted redux store
 * @param {string} name - slice name
 * @returns {Promise<any | undefined>} result or undefined if failed 
 */
export const getPersistedSlice = async ( name: string ) => {
  const db: any = await getPersistedDB();
  return db[name] ? JSON.parse( db[name] ) : undefined;
}