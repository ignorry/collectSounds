import { Video, Playlist, Channel } from "../../models/content";

/**
 * @typedef AddVideoPayload
 * @prop {string} id - id of parrent channel or playlist
 * @prop {Video} video - new object
 */
export type AddVideoPayload = {
  id: string;
  video: Video;
}

/**
 * @typedef AddPlaylistPayload
 * @prop {string} id - id of parrent channel or playlist
 * @prop {Playlist} playlist - new object
 */
export type AddPlaylistPayload = {
  id: string;
  playlist: Playlist;
}

/**
 * @typedef UpdateVideoPayload
 * @prop {string} id - id of Video
 * @prop {string} [audioUrl] - audio file
 * @prop {number} [passed] - passed duration in ms
 * @prop {Array<string>} [tags]
 * @prop {number} [itemCount]
 */
export type UpdateVideoPayload = {
  id: string;
  audioUrl?: string;
  passed?: number;
  tags?: Array<string>;
  itemCount?: number;
}

/**
 * @typedef UpdatePlaylistPayload
 * @prop {string} id - id of playlist
 * @prop {Array<Array<string|Video>>} [videos] - playlist videos
 * @prop {Array<string>} [tags]
 */
export type UpdatePlaylistPayload = {
  id: string;
  videos?: Array<{ id: string, item: Video }>;
  tags?: Array<string>;
}

/**
 * @typedef UpdateChannelPayload
 * @prop {string} id - id of channel
 * @prop {Array<Array<string|Video>>} [videos] - channel videos
 * @prop {Array<Array<string|Playlist>>} [playlists] - channel playlists
 * @prop {Array<string>} [tags]
 */
export type UpdateChannelPayload = {
  id: string;
  videos?: Array<{ id: string, item: Video }>;
  playlists?: Array<{ id: string, item: Playlist}>;
  tags?: Array<string>;
}

/**
 * udpates Video object
 * @param {Video} prev 
 * @param {UpdateVideoPayload} update 
 * @returns new Video object
 */
export const updateVideo = ( prev: Video, update: UpdateVideoPayload ): Video =>
  ({...prev, ...update, lastModified: new Date().getTime() });

/**
 * udpates Playlist object
 * @param {Playlist} prev 
 * @param {UpdatePlaylistPayload} update 
 * @returns new Playlist object
 */
export const updatePlaylist = ( prev: Playlist, update: UpdatePlaylistPayload ): Playlist =>
  ({...prev, ...update, lastModified: new Date().getTime() });

/**
 * udpates Channel object
 * @param {Channel} prev 
 * @param {UpdateChannelPayload} update 
 * @returns new Channel object
 */
export const updateChannel = ( prev: Channel, update: UpdateChannelPayload ): Channel =>
  ({...prev, ...update, lastModified: new Date().getTime() });