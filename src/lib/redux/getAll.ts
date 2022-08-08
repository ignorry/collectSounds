import { AppThunk } from "../../redux";

export const getAll = (): AppThunk => ( dispatch, getState: Function ) => {
  const data = Array.from( getState().saved.data ).map( ( item: any ) => item[1] );

  data.forEach( item => {
    if ( item.videos && item.videos.size > 0 )
      Array.from( item.videos ).forEach( ( vid: any ) => data.push( vid ) );
    if ( item.playlists && item.playlists.size > 0 )
      Array.from( item.playlists ).forEach( ( pl: any ) => {
        data.push( pl[1] );
        if ( pl[1].videos && pl[1].videos.size > 0 )
          Array.from( pl[1].videos ).forEach( ( vid: any ) => data.push( vid ) );
      });
  });

  return data;
}