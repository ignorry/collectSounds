import { Dispatch } from "@reduxjs/toolkit";
import { AppThunk } from "..";
import {
  getVideoById,
  getPlaylistById,
  getChannelById,
  getPlaylistVideos,
  getChannelVideos,
  getChannelPlaylists,
  getSearch,
  SearchFilters
} from "../../lib/api/index";
import {
  setMessage
} from "../slices/errorMessage";

/**
 * load video by id
 * @param {string} id - video id
 * @returns {Promise<Array<Video>>} 
 */
export const loadVideo = ( id: string ): AppThunk => async ( dispatch: Dispatch ) => {
  try {
    return await getVideoById( id );
  } catch (e) {
    dispatch( setMessage( `Sorry, failed to load video (T⌓T)` ) );
  }
};

/**
 * load playlist by id
 * @param {string} id - playlist id
 * @returns {Promise<Array<Playlist>>}
 */
export const loadPlaylist = ( id: string ): AppThunk => async ( dispatch: Dispatch ) => {
  try {
    return await getPlaylistById( id );
  } catch (e) {
    dispatch( setMessage( `Sorry, failed to load playlist ╥﹏╥` ) );
  }
}

/**
 * load channel by id
 * @param {string} id - channel id
 * @returns {Promise<Array<Channel>>}
 */
export const loadChannel = ( id: string ): AppThunk => async ( dispatch: Dispatch ) => {
  try {
    return await getChannelById( id );
  } catch (e) {
    dispatch( setMessage( `Sorry, failed to load channel (⋟﹏⋞)` ) );
  }
}

/**
 * load playlist videos
 * @param {string} id - playlist id
 * @returns {Promise<Array<Video>>}
 */
export const loadPlaylistVideos = ( id: string ): AppThunk => async ( dispatch: Dispatch ) => {
  try {
    return await getPlaylistVideos( id );
  } catch (e) {
    dispatch( setMessage( `Sorry, failed to load videos (ಥ_ಥ)` ) );
  }
}

/**
 * load channel videos
 * @param {string} id - channel id
 * @returns {Promise<Array<Video>>}
 */
export const loadChannelVideos = ( id: string ): AppThunk => async ( dispatch: Dispatch ) => {
  try {
    return await getChannelVideos( id );
  } catch (e) {
    dispatch( setMessage( `Sorry, failed to load videos（πーπ）` ) );
  }
}

/**
 * load channel playlists
 * @param {string} id - channel id
 * @returns {Promise<Array<Playlist>>}
 */
export const loadChannelPlaylists = ( id: string ): AppThunk => async ( dispatch: Dispatch ) => {
  try {
    return await getChannelPlaylists( id );
  } catch (e) {
    dispatch( setMessage( `Sorry, failed to load playlists T⌓T` ) );
  }
}

/**
 * load search result
 * @param {SearchFilters} filters
 * @returns {Promise<Array<Content>>}
 */
export const loadSearch = ( filters: SearchFilters ): AppThunk => async ( dispatch: Dispatch ) => {
  try {
    return await getSearch( filters );
  } catch (e) {
    dispatch( setMessage( `Sorry, failed to load search results (T-T)` ) );
  }
}