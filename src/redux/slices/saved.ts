import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Video, Playlist, Channel, Content } from "../../models/content";
import {
  AddVideoPayload, AddPlaylistPayload,
  UpdateVideoPayload, UpdatePlaylistPayload, UpdateChannelPayload,
  updateVideo as updateVideoUtil, updatePlaylist as updatePlaylistUtil, updateChannel as updateChannelUtil
} from "../../lib/redux/savedUtils";

/**
 * @typedef SavedState
 * @prop {Map<string, Content>} data - collection of all saved content
 * @prop {Array<string>} syncPeers - ids of synchronized peers
 */
export type SavedState = {
  data: Map<string, Content>,
  syncPeers: Array<string>
}

const initialState: SavedState = {
  data: new Map(),
  syncPeers: [],
};

/**
 * container for saved content
 */
const saved = createSlice({
  name: "saved",
  initialState,
  reducers: {
    /**
     * add synchronized device peer
     * @param state 
     * @param {PayloadAction<string>} action - new id
     */
    addPeerId: ( state, action: PayloadAction<string> ) => {
      state.syncPeers.push( action.payload )
    },
    /**
     * delete synchronized device peer
     * @param state 
     * @param {PayloadAction<string>} action - id
     */
    deletePeerId: ( state, action: PayloadAction<string> ) => {
      var index = state.syncPeers.indexOf( action.payload );
      if (index !== -1)
        state.syncPeers.splice(index, 1);
    },
    /**
     * add item to data map
     * @param state 
     * @param {PayloadAction<Array<Content>>} action - array of new Content objects
     */
    addItem: ( state, action: PayloadAction<Array<Content>> ) =>
      action.payload.forEach( item => {
        state.data.set( item.id, item );
      }),
    /**
     * delete item by id ( anywhere in data map )
     * @param state 
     * @param {PayloadAction<Array<string>>} action - array of ids to be removed
     */
    deleteItem: ( state, action: PayloadAction<Array<string>> ) =>
      action.payload.forEach( id => {
        state.data.delete( id );

        state.data.forEach( content => {
          if ( content.type === 'playlist' || content.type === 'channel' ) {
            content.videos?.delete( id );

            if ( content.type === 'channel' ) {
              content.playlists?.delete( id );

              content.playlists?.forEach( playlist => {
                playlist.videos?.delete( id );
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
      const found: Content | undefined = state.data.get( action.payload.id );

      if ( found && ( found.type === 'playlist' || found.type === 'channel' ) ) {
        if ( ! found.videos ) found.videos = new Map();
        found.videos.set( action.payload.video.id, action.payload.video );
        return;
      }

      state.data.forEach( content => {
        if ( content.type === 'channel' ) {
          const found: Playlist | undefined = content.playlists.get( action.payload.id );

          if ( found ) {
            if ( ! found.videos ) found.videos = new Map();
            found.videos.set( action.payload.video.id, action.payload.video );
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
      const found: Content | undefined = state.data.get( action.payload.id );

      if ( found && found.type === 'channel' ) {
        if ( ! found.playlists ) found.playlists = new Map();
        found.playlists.set( action.payload.playlist.id, action.payload.playlist );
        return;
      }
    },
    /**
     * update video by it's id ( anywhere in data map )
     * @param state 
     * @param {PayloadAction<UpdateVideoPayload>} action - update video object
     */
    updateVideo: ( state, action: PayloadAction<UpdateVideoPayload> ) => {
      const found: Content | undefined = state.data.get( action.payload.id );

      if ( found && found.type === 'video' ) {
        state.data.set( action.payload.id, updateVideoUtil( found, action.payload ) );
        return;
      }

      state.data.forEach( ( content ) => {
        if ( content.type === 'playlist' || content.type === 'channel' ) {
          const found: Video | undefined = content.videos.get( action.payload.id );

          if ( found )
            content.videos.set( action.payload.id, updateVideoUtil( found, action.payload ) );

          if ( content.type === 'channel' )
            content.playlists.forEach( ( playlist ) => {
              const found: Video | undefined = playlist.videos.get( action.payload.id );

              if ( found )
                playlist.videos.set( action.payload.id, updateVideoUtil( found, action.payload ) );
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
      const found: Content | undefined = state.data.get( action.payload.id );

      if ( found && found.type === 'playlist' ) {
        state.data.set( action.payload.id, updatePlaylistUtil( found, action.payload ) );
        return;
      }

      state.data.forEach( ( content ) => {
        if ( content.type === 'channel' ) {
          const found: Playlist | undefined = content.playlists.get( action.payload.id );

          if ( found )
            content.playlists.set( action.payload.id, updatePlaylistUtil( found, action.payload ) );
        }
      });
    },
    /**
     * update channel by it's id ( anywhere in data map )
     * @param state 
     * @param {PayloadAction<UpdateChannelPayload>} action - update channel object
     */
    updateChannel: ( state, action: PayloadAction<UpdateChannelPayload> ) => {
      const found: Content | undefined = state.data.get( action.payload.id );

      if ( found && found.type === 'channel' ) {
        state.data.set( action.payload.id, updateChannelUtil( found, action.payload ) );
        return;
      }
    },
  }
});

export const {
  addPeerId,
  deletePeerId,
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
  let res: Content | undefined = state.data.get( id );

  if ( res && res.type === 'video' )
    return res;

  state.data.forEach( ( content ) => {
    if ( content.type === 'playlist' || content.type === 'channel' ) {
      const found: Video | undefined = content.videos?.get( id );

      if ( found )
        res = found
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
  let res: Content | undefined = state.data.get( id );

  if ( res && res.type === 'playlist' )
    return res;

  state.data.forEach( ( content ) => {
    if ( content.type === 'channel' ) {
      const found: Playlist | undefined = content.playlists.get( id );

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
  let res: Content | undefined = state.data.get( id );

  if ( res && res.type === 'channel' )
    return res;
  else 
    return undefined;
}

export default saved.reducer;