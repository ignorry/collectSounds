import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Video, Playlist, Channel, Content } from "../../models/content";
import {
  AddVideoPayload, AddPlaylistPayload,
  UpdateVideoPayload, UpdatePlaylistPayload, UpdateChannelPayload,
  updateVideo as updateVideoUtil, updatePlaylist as updatePlaylistUtil, updateChannel as updateChannelUtil
} from "../../lib/redux/savedUtils";
import { getVal, setVal, deleteVal } from "../../lib/redux/arrayUtils";

/**
 * @typedef SavedState
 * @prop {Array<{ id: string, item: Content }>} data - collection of all saved content
 * @prop {Array<{ id: string, item: number }>} deleted - collections of all deleted items (key: id, value: timestamp of removal) 
 */
export type SavedState = {
  data: Array<{ id: string, item: any }>,
  deleted: Array<{ id: string, item: any }>
}

const initialState: SavedState = {
  data: [],
  deleted: []
};

/**
 * container for saved content
 */
const saved = createSlice({
  name: "saved",
  initialState,
  reducers: {
    /**
     * add item to data map
     * @param state 
     * @param {PayloadAction<Array<Content>>} action - array of new Content objects
     */
    addItem: ( state, action: PayloadAction<Array<Content>> ) =>
      action.payload.forEach( item => {
        setVal( state.data, item.id, item );
      }),
    /**
     * delete item by id ( anywhere in data map )
     * @param state 
     * @param {PayloadAction<Array<string>>} action - array of ids to be removed
     */
    deleteItem: ( state, action: PayloadAction<Array<string>> ) =>
      action.payload.forEach( id => {
        setVal( state.deleted, id, new Date().getTime() );

        deleteVal( state.data, id );

        state.data.forEach( item => { const content = item.item;
          if ( content.type === 'playlist' || content.type === 'channel' ) {
            content.videos && deleteVal( content.videos, id );

            if ( content.type === 'channel' ) {
              content.playlists && deleteVal( content.playlists, id );

              content.playlists?.forEach( ( item: any ) => { const playlist = item.item;
                playlist.videos && deleteVal( playlist.videos, id );
              })
            }
          }
        })
      }),
    /**
     * add video to some parrent object
     * @param state 
     * @param {PayloadAction<AddVideoPayload>} action  
     */
    addVideoToParent: ( state, action: PayloadAction<AddVideoPayload> ) => {
      const found: Content | undefined = getVal( state.data, action.payload.id );

      if ( found && ( found.type === 'playlist' || found.type === 'channel' ) ) {
        if ( ! found.videos ) found.videos = [];
        setVal( found.videos, action.payload.video.id, action.payload.video );
        return;
      }

      state.data.forEach( item => { const content = item.item;
        if ( content.type === 'channel' ) {
          const found: Playlist | undefined = getVal( content.playlists, action.payload.id );

          if ( found ) {
            if ( ! found.videos ) found.videos = [];
            setVal( found.videos, action.payload.video.id, action.payload.video );
            return;
          }
        }
      })
    },
    /**
     * add playlist to some parrent object
     * @param state 
     * @param {PayloadAction<AddPlaylistPayload>} action  
     */
    addPlaylistToParent: ( state, action: PayloadAction<AddPlaylistPayload> ) => {
      const found: Content | undefined = getVal( state.data, action.payload.id );

      if ( found && found.type === 'channel' ) {
        if ( ! found.playlists ) found.playlists = [];
        setVal( found.playlists, action.payload.playlist.id, action.payload.playlist );
        return;
      }
    },
    /**
     * update video by it's id ( anywhere in data map )
     * @param state 
     * @param {PayloadAction<UpdateVideoPayload>} action - update video object
     */
    updateVideo: ( state, action: PayloadAction<UpdateVideoPayload> ) => {
      const found: Content | undefined = getVal( state.data, action.payload.id );

      if ( found && found.type === 'video' ) {
        setVal( state.data, action.payload.id, updateVideoUtil( found, action.payload ) );
        return;
      }

      state.data.forEach( item => { const content = item.item;
        if ( content.type === 'playlist' || content.type === 'channel' ) {
          const found: Video | undefined = getVal( content.videos, action.payload.id );

          if ( found )
            setVal( content.videos, action.payload.id, updateVideoUtil( found, action.payload ) );

          if ( content.type === 'channel' )
            content.playlists.forEach( ( item: any ) => { const playlist = item.item;
              const found: Video | undefined = getVal( playlist.videos, action.payload.id );

              if ( found )
                setVal( playlist.videos, action.payload.id, updateVideoUtil( found, action.payload ) );
            });
        }
      });
    },
    /**
     * update playlist by it's id ( anywhere in data map )
     * @param state 
     * @param {PayloadAction<UpdatePlaylistPayload>} action - update playlist object
     */
    updatePlaylist: ( state, action: PayloadAction<UpdatePlaylistPayload> ) => {
      const found: Content | undefined = getVal( state.data, action.payload.id );

      if ( found && found.type === 'playlist' ) {
        setVal( state.data, action.payload.id, updatePlaylistUtil( found, action.payload ) );
        return;
      }

      state.data.forEach( item => { const content = item.item;
        if ( content.type === 'channel' ) {
          const found: Playlist | undefined = getVal( content.playlists, action.payload.id );

          if ( found )
            setVal( content.playlists, action.payload.id, updatePlaylistUtil( found, action.payload ) );
        }
      });
    },
    /**
     * update channel by it's id ( anywhere in data map )
     * @param state 
     * @param {PayloadAction<UpdateChannelPayload>} action - update channel object
     */
    updateChannel: ( state, action: PayloadAction<UpdateChannelPayload> ) => {
      const found: Content | undefined = getVal( state.data, action.payload.id );

      if ( found && found.type === 'channel' ) {
        setVal( state.data, action.payload.id, updateChannelUtil( found, action.payload ) );
        return;
      }
    },
  }
});

export const {
  addItem,
  deleteItem,
  addVideoToParent,
  addPlaylistToParent,
  updateVideo,
  updatePlaylist,
  updateChannel
} = saved.actions;

/**
 * get video by id (anywhere in the data)
 * @param {SavedState} state 
 * @param {string} id - video id
 * @returns {Video}
 */
export const getVideo = ( state: SavedState, id: string ): Video => {
  let res: Content | undefined = getVal( state.data, id );

  if ( res && res.type === 'video' )
    return res;

  state.data.forEach( item => { const content = item.item;
    if ( content.type === 'playlist' || content.type === 'channel' ) {
      const found: Video | undefined = content.videos && getVal( content.videos, id );

      if ( ! found && content.type === 'channel' && content.playlists )
        content.playlists.forEach( ( item: any ) => { const playlist = item.item;
          const found: Video | undefined = playlist.videos && getVal( playlist.videos, id );

          if ( found )
            res = found;
        });

      if ( found )
        res = found;
    }
  });

  if ( res && res.type === 'video' )
    return res;
  else 
    return undefined;
}

/**
 * get playlist by id (anywhere in the data)
 * @param {SavedState} state 
 * @param {string} id - playlist id
 * @returns {Playlist}
 */
export const getPlaylist = ( state: SavedState, id: string ): Playlist => {
  let res: Content | undefined = getVal( state.data, id );

  if ( res && res.type === 'playlist' )
    return res;

  state.data.forEach( item => { const content = item.item;
    if ( content.type === 'channel' ) {
      const found: Playlist | undefined = getVal( content.playlists, id );

      if ( found )
        res = found;
    }
  });

  if ( res && res.type === 'playlist' )
    return res;
  else 
    return undefined;
}

/**
 * get channel by id (anywhere in the data)
 * @param {SavedState} state 
 * @param {string} id - channel id
 * @returns {Channel}
 */
export const getChannel = ( state: SavedState, id: string ): Channel => {
  let res: Content | undefined = getVal( state.data, id );

  if ( res && res.type === 'channel' )
    return res;
  else 
    return undefined;
}

export default saved.reducer;