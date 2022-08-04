import { 
  fetchVideo,
  fetchPlaylist,
  fetchPlaylistItems,
  fetchChannel,
  fetchSearch
} from "./fetch";
import {
  parseVideo,
  parsePlaylist,
  parseChannel
} from "./parseApiResponse";

import { Video, Playlist, Channel, Content } from "../../models/content";

/**
 * fetch video by id
 * @param {string} id - video id
 * @returns {Promise<Array<Video>>} 
 */
export const getVideoById = async ( id: string ): Promise<Array<Video>> => {
  const res = await fetchVideo({
    part: 'snippet,contentDetails',
    id
  });

  return parseVideo( res );
}

/**
 * fetch playlist by id
 * @param {string} id - playlist id
 * @returns {Promise<Array<Playlist>>}
 */
export const getPlaylistById = async ( id: string ): Promise<Array<Playlist>> => {
  const res = await fetchPlaylist({
    part: 'snippet',
    id
  });

  return parsePlaylist( res );
}

/**
 * fetch channel by id
 * @param {string} id - channel id
 * @returns {Promise<Array<Channel>>}
 */
export const getChannelById = async ( id: string ): Promise<Array<Channel>> => {
  const res = await fetchChannel({
    part: 'snippet',
    id
  });

  return parseChannel( res );
}

/**
 * fetch playlist's videos
 * @param {string} id - playlist id
 * @returns {Promise<Array<Video>>}
 */
export const getPlaylistVideos = async ( id: string ): Promise<Array<Video>> => {
  const res = await fetchPlaylistItems({
    part: 'id',
    playlistId: id,
  });

  const ids: Array<string> = res.items.map( item => item.id );

  return getVideoById( ids.join( ',' ) );
}

/**
 * fetch channel's videos
 * @param {string} id - channel id
 * @returns {Promise<Array<Video>>}
 */
export const getChannelVideos = async ( id: string ): Promise<Array<Video>> => {
  const res = await fetchSearch({
    part: 'id',
    channelId: id,
    order: 'date',
  })

  const ids: Array<string> = res.items.filter( item => item.id.kind === 'video' ).map( item => item.id.videoId );

  return getVideoById( ids.join( ',' ) );
}

/**
 * fetch channel's playlists
 * @param {string} id - channel id
 * @returns {Promise<Array<Playlist>>}
 */
export const getChannelPlaylists = async ( id: string ): Promise<Array<Playlist>> => {
  const res = await fetchPlaylist({
    part: 'snippet',
    channelId: id,
  });

  return parsePlaylist( res )
}

/**
 * @typedef SearchFilters
 * @prop {string} order - specifies the method that will be used to order resources in the API response
 * @prop {string} type - restricts a search query to only retrieve a particular type of resource
 * @prop {string} videoDuration - filters video search results based on their duration
 * @prop {string} saveSearch - indicates whether the search results should include restricted content as well as standard content
 */
export type SearchFilters = {
  order?: 'date' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount';
  type?: 'video' | 'playlist' | 'channel',
  videoDuration?: 'any' | 'long' | 'medium' | 'short';
  saveSearch?: 'moderate' | 'none' | 'strict'
}

/**
 * fetch search results with specified filters
 * @param {SearchFilters} filters
 * @returns {Promise<Array<Content>>}
 */
export const getSearch = async ( filters: SearchFilters ): Promise<Array<Content>> => {
  const res = await fetchSearch({...filters,
    part: 'id',
    maxResults: 10,
  });

  const videoIds: Array<string> = [];
  const playlistIds: Array<string> = [];
  const channelIds: Array<string> = [];
  const ids: Array<string> = res.items.map( item => {
    if ( item.id.kind === 'video' ) {
      videoIds.push( item.id.videoId );
      return item.id.videoId;
    } else if ( item.id.kind === 'playlist' ) {
      playlistIds.push( item.id.playlistId );
      return item.id.playlistId;
    }

    channelIds.push( item.id.channelId );
    return item.id.channelId;
  });

  const videos: Array<Video> = await getVideoById( videoIds.join( ',' ) );
  const playlists: Array<Playlist> = await getPlaylistById( playlistIds.join( ',' ) );
  const channels: Array<Channel> = await  getChannelById( channelIds.join( ',' ) );

  // ids array needed to save order of contents

  return ids.map( item => {
    if ( videos[0] && videos[0].id === item ) return videos.shift();
    if ( playlists[0] && playlists[0].id === item ) return playlists.shift();
    return channels.shift();
  });
}