import { AppThunk } from "..";
import { Channel, Playlist, Video } from "../../models/content";
import {
  loadPlaylistVideos,
  loadChannelVideos,
  loadChannelPlaylists
} from "./apiCall";
import {
  addVideoToParent,
  addPlaylistToParent
} from "../slices/saved";

/**
 * get all playlists and channels from saved slice ( playlists in channels to )
 * @returns {Array<Channel | Playlist>} - Map of playlists and channels
 */
export const getPlaylistsAndChannels = (): AppThunk => ( dispatch, getState: Function ) => {
  const data = Array.from( getState().saved.data ).filter( ( item: any ) => ( item[1].type && ( item[1].type === 'playlist' || item[1].type === 'channel' ) ) ).map( ( item: any ) => item[1] );

  data.forEach( item => {
    if ( item.type === 'channel' && item.playlists && item.playlists.size > 0 )
        Array.from( item.playlists ).forEach( ( pl: any ) => {
          data.push( pl[1] );
        });
  });

  return data;
}

export const updateContents = (): AppThunk => ( dispatch, getState: Function ) => {
  const saved: any = dispatch( getPlaylistsAndChannels() );

  if ( ! saved ) return;

  saved.forEach( async ( item: Channel | Playlist ) => {
    const videos: any = item.type === 'playlist' ? await dispatch( loadPlaylistVideos( item.id ) ) :
      await dispatch( loadChannelVideos( item.id ) );

    if ( ! videos ) return;

    videos.forEach( ( video: Video ) => {
      if ( ! item.videos || Array.from( item.videos, i => i[0] ).indexOf( video.id ) < 0 )
        dispatch( addVideoToParent({ id: item.id, video }) )
    });

    if ( item.type === 'channel' ) {
      const playlists: any = await dispatch( loadChannelPlaylists( item.id ) );

      console.log( 'playlists: ' + JSON.stringify( playlists ) );

      if ( ! playlists ) return;

      playlists.forEach( ( playlist: Playlist ) => {
        if ( ! item.playlists || Array.from( item.playlists, i => i[0] ).indexOf( playlist.id ) < 0 )
          dispatch( addPlaylistToParent({ id: item.id, playlist }) )
      });
    }
  })

  return true;
}