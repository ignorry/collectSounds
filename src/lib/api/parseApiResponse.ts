import { Video as ApiVideo, VideoIdResponse } from "../../models/api/video";
import { Playlist as ApiPlaylist, PlaylistIdResponse } from "../../models/api/playlist";
import { Channel as ApiChannel, ChannelIdResponse } from "../../models/api/channel";
import {
  Video,
  Playlist,
  Channel
} from "../../models/content";

/**
 * parse duration from ISO8601 to ms
 * @param {string} iso - ISO8601 
 * @returns {number} in ms
 */
export const parseISOToNumber = ( iso: string ): number =>
  ( /\d+H/.test(iso) ? +iso.match(/\d+H/)[0].slice(0, -1)*36e4 : 0 ) +
  ( /\d+M/.test(iso) ? +iso.match(/\d+M/)[0].slice(0, -1)*6e4 : 0 ) +
  ( /\d+S/.test(iso) ? +iso.match(/\d+S/)[0].slice(0, -1)*1e3 : 0 );

/**
 * parse video api item to appropriate type
 * @param {ApiVideo} obj
 * @returns {Video} a Video object
 */
export const parseVideoItem = ( obj: ApiVideo ): Video => {
  if (
    ! obj.snippet || ! obj.contentDetails
  ) throw new Error( "The required part of the response is missing" );

  return {
    type: "video",
    id: obj.id,
    publishedAt: obj.snippet.publishedAt,
    title: obj.snippet.title,
    description: obj.snippet.description,
    lang: obj.snippet.defaultLanguage,
    channelTitle: obj.snippet.channelTitle,
    thumbnails: obj.snippet.thumbnails,
    duration: parseISOToNumber( obj.contentDetails.duration ),
    lastModified: new Date().getTime()
  }
}

/**
 * parse playlist api item to appropriate type
 * @param {ApiPlaylist} obj
 * @returns {Playlist} a Playlist object
 */
export const parsePlaylistItem = ( obj: ApiPlaylist ): Playlist => {
  if (
    ! obj.snippet
  ) throw new Error( "The required part of the response is missing" );

  return {
    type: "playlist",
    id: obj.id,
    title: obj.snippet.title,
    description: obj.snippet.description,
    lang: obj.snippet.defaultLanguage,
    channelTitle: obj.snippet.channelTitle,
    thumbnails: obj.snippet.thumbnails,
    itemCount: obj.contentDetails.itemCount,
    lastModified: new Date().getTime()
  }
}

/**
 * parse channel api item to appropriate type
 * @param {ApiChannel} obj
 * @returns {Channel} a Channel object
 */
export const parseChannelItem = ( obj: ApiChannel ): Channel => {
  if (
    ! obj.snippet
  ) throw new Error( "The required part of the response is missing" );

  return {
    type: "channel",
    id: obj.id,
    title: obj.snippet.title,
    description: obj.snippet.description,
    customUrl: obj.snippet.customUrl,
    thumbnails: obj.snippet.thumbnails,
    lastModified: new Date().getTime()
  }
}

/**
 * parse video api response to appropriate type
 * @param {VideoIdResponse} res
 * @returns {Array<Video>} an array of Video objects or undefined
 */
export const parseVideo = ( res: VideoIdResponse ): Array<Video> => 
  res.items && res.items.map( item => parseVideoItem(item) );

/**
 * parse playlist api response to appropriate type
 * @param {PlaylistIdResponse} res
 * @returns {Array<Playlist>} an array of Playlist objects or undefined
 */
export const parsePlaylist = ( res: PlaylistIdResponse ): Array<Playlist> => 
  res.items && res.items.map( item => parsePlaylistItem(item) );

/**
 * parse channel api response to appropriate type
 * @param {ChannelIdResponse} res
 * @returns {Array<Channel>} an array of Channel objects or undefined
 */
export const parseChannel = ( res: ChannelIdResponse ): Array<Channel> => 
  res.items && res.items.map( item => parseChannelItem(item) );