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
  const data = getState().saved.data.filter( ( item: any ) => ( item.item.type && ( item.item.type === 'playlist' || item.item.type === 'channel' ) ) ).map( ( item: any ) => item.item );

  data.forEach( ( item: any ) => {
    if ( item.type === 'channel' && item.playlists && item.playlists.length > 0 ) {
      item.playlists.forEach( ( pl: any ) => {
        data.push( pl.item );
      });
    }
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
      if ( ! item.videos || Array.from( item.videos, i => i.id ).indexOf( video.id ) < 0 )
        dispatch( addVideoToParent({ id: item.id, video }) )
    });

    if ( item.type === 'channel' ) {
      const playlists: any = await dispatch( loadChannelPlaylists( item.id ) );

      if ( ! playlists ) return;

      playlists.forEach( ( playlist: Playlist ) => {
        if ( ! item.playlists || Array.from( item.playlists, i => i.id ).indexOf( playlist.id ) < 0 )
          dispatch( addPlaylistToParent({ id: item.id, playlist }) )
      });
    }
  })

  return true;
}