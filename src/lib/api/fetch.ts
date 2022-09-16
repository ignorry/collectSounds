import { get } from "../request";

import { VideoIdResponse, PlaylistItemsResponse } from "../../models/api/video";
import { PlaylistIdResponse } from "../../models/api/playlist";
import { ChannelIdResponse } from "../../models/api/channel";
import { SearchResponse } from "../../models/api/search";
import { Track as TrackResponse } from "../../models/api/track";

import { VideoIdRequest } from "../../models/api/request/videoRequest";
import { PlaylistIdRequest, PlaylistItemsRequest } from "../../models/api/request/playlistRequest";
import { ChannelIdRequest } from "../../models/api/request/channelRequest";
import { SearchRequest } from "../../models/api/request/searchRequest";

const YOUTUBE_API_HOST = process.env.YOUTUBE_API_HOST ?? "";
const T_ONE_API_HOST = process.env.T_ONE_API_HOST ?? "";

const YOUTUBE_API_TOKEN = process.env.YOUTUBE_API_TOKEN ?? "";
const T_ONE_API_TOKEN = process.env.T_ONE_API_TOKEN ?? "";

export type QueryParams = {
  [key: string]: string | number | string[] | undefined;
};

/**
 * assign youtube key property to an object
 * @param {QueryParams} obj 
 * @returns object with assigned youtube key property
 */
export const assignKey = ( obj: QueryParams ): QueryParams => ({ ...obj, key: YOUTUBE_API_TOKEN });

const youtubeHeaders: RequestInit = {
  headers: {
    "Accept": "application/json",
  }
}

/**
 * fetch video object from youtube api
 * @param {VideoIdRequest} options 
 * @returns {Promise<VideoIdResponse>} response
 */
export const fetchVideo = ( options: VideoIdRequest ): Promise<VideoIdResponse> => 
  get<VideoIdResponse>( YOUTUBE_API_HOST, '/youtube/v3/videos', assignKey(options), youtubeHeaders );

/**
 * fetch playlist object from youtube api
 * @param {PlaylistIdRequest} options 
 * @returns {Promise<PlaylistIdResponse>} response
 */
export const fetchPlaylist = ( options: PlaylistIdRequest ): Promise<PlaylistIdResponse> => 
  get<PlaylistIdResponse>( YOUTUBE_API_HOST, '/youtube/v3/playlists', assignKey(options), youtubeHeaders );

/**
 * fetch playlist items object from youtube api
 * @param {PlaylistItemsRequest} options 
 * @returns {Promise<PlaylistItemsResponse>} response
 */
export const fetchPlaylistItems = ( options: PlaylistItemsRequest ): Promise<PlaylistItemsResponse> => 
  get<PlaylistItemsResponse>( YOUTUBE_API_HOST, '/youtube/v3/playlistItems', assignKey(options), youtubeHeaders );

/**
 * fetch channel object from youtube api
 * @param {ChannelIdRequest} options 
 * @returns {Promise<ChannelIdResponse>} response
 */
export const fetchChannel = ( options: ChannelIdRequest ): Promise<ChannelIdResponse> => 
  get<ChannelIdResponse>( YOUTUBE_API_HOST, '/youtube/v3/channels', assignKey(options), youtubeHeaders );

/**
 * fetch search results from youtube api
 * @param {SearchRequest} options 
 * @returns {Promise<SearchResponse>} response
 */
export const fetchSearch = ( options: SearchRequest ): Promise<SearchResponse> => 
  get<SearchResponse>( YOUTUBE_API_HOST, '/youtube/v3/search', assignKey(options), youtubeHeaders );

const tOneHeaders: RequestInit = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': T_ONE_API_TOKEN,
    'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
  }
}

/**
 * fetch track from T One api
 * @param {string} url - url of youtube video 
 * @returns {Promise<SearchResponse>} response
 */
export const fetchTrack = ( url: string ): Promise<TrackResponse> => 
  get<TrackResponse>( T_ONE_API_HOST, '/api/v1/createProcess', {
    url,
    format: 'mp3',
    responseFormat: 'json'
  }, tOneHeaders );