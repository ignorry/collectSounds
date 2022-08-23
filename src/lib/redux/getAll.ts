import { AppThunk } from "../../redux";

/**
 * get all content items from redux store
 * @returns {Array<Content>}
 */
export const getAll = (): AppThunk => ( dispatch, getState: Function ) => {
  const data = getState().saved.data.map( ( item: any ) => item.item );

  data.forEach( ( item: any ) => {
    if ( item.videos && item.videos.length > 0 )
      item.videos.forEach( ( vid: any ) => data.push( vid.item ) );
    if ( item.playlists && item.playlists.length > 0 )
      item.playlists.forEach( ( pl: any ) => {
        data.push( pl.item );
        if ( pl.item.videos && pl.item.videos.length > 0 )
          pl.item.videos.forEach( ( vid: any ) => data.push( vid.item ) );
      });
  });

  return data;
}