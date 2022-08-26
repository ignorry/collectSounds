import { AppThunk } from "../../redux";
import { getAll } from "./getAll";

/**
 * get all saved content items
 * @returns {Array<Content>}
 */
export const getSaved = (): AppThunk => ( dispatch, getState: Function ) => 
  getState().saved.data.map( ( item: any ) => item.item );

/**
 * get all saved channels
 * @returns {Array<Channel>}
 */
export const getSavedChannels = (): AppThunk => ( dispatch, getState: Function ) =>
  getState().saved.data.map( ( item: any ) => item.item ).filter( ( item: any ) => item.type === 'channel' );

/**
 * get all saved playlists
 * @returns {Array<Playlist>}
 */
export const getSavedPlaylists = (): AppThunk => ( dispatch ) => {
  const all: any = dispatch( getAll() )
  
  if ( all )
    return all.filter( ( item: any ) => item.type === 'playlist' )
}
/**
 * get all saved videos
 * @returns {Array<Content>}
 */
export const getSavedVideos = (): AppThunk => ( dispatch, getState: Function ) => {
  const all: any = dispatch( getAll() )
  
  if ( all )
    return all.filter( ( item: any ) => item.type === 'video' )
}