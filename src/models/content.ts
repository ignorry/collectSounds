import { Thumbnails } from "./api/primitives";

/**
 * @typedef Video
 * @prop {"video"} type - type of content. always "video" for this type
 * @prop {string} id
 * @prop {string} [audioUrl] - T-One mp3 file
 * @prop {string} publishedAt
 * @prop {string} title
 * @prop {string} description
 * @prop {string} lang - language in ISO format e.g 'en'
 * @prop {string} channelTitle
 * @prop {Thumbnails} thumbnails
 * @prop {number} duration - in ms
 * @prop {number} [passed] - passed duration in ms
 * @prop {Array<string>} [tags] - given by user
 * @prop {number} lastModified - used for synchronization
 */
export type Video = {
  type: "video";
  id: string;
  audioUrl?: string;
  publishedAt: string;
  title: string;
  description: string;
  lang: string;
  channelTitle: string;
  thumbnails: Thumbnails;
  duration: number;
  passed?: number;
  tags?: Array<string>;
  lastModified: number;
}

/**
 * @typedef Playlist
 * @prop {"video"} type - type of content. always "video" for this type
 * @prop {string} id
 * @prop {Map<string, Video>} [videos] - map of videos contained in a playlist
 * @prop {string} title
 * @prop {string} description
 * @prop {string} lang - language in ISO format e.g 'en'
 * @prop {string} channelTitle
 * @prop {Thumbnails} thumbnails
 * @prop {Array<string>} [tags] - given by user
 * @prop {number} lastModified - used for synchronization
 */
export type Playlist = {
  type: "playlist";
  id: string;
  videos?: Array<{ id: string, item: Video }>;
  title: string;
  description: string;
  lang: string;
  channelTitle: string;
  thumbnails: Thumbnails;
  tags?: Array<string>;
  lastModified: number;
}

/**
 * @typedef Channel
 * @prop {"video"} type - type of content. always "video" for this type
 * @prop {string} id
 * @prop {Map<string, Video>} [videos] - map of videos contained in a channel
 * @prop {Map<string, Playlist>} [playlists] - map of videos contained in a channel
 * @prop {string} title
 * @prop {string} description
 * @prop {string} customUrl
 * @prop {Thumbnails} thumbnails
 * @prop {Array<string>} [tags] - given by user
 * @prop {number} lastModified - used for synchronization
 */
export type Channel = {
  type: "channel";
  id: string;
  videos?: Array<{ id: string, item: Video }>;
  playlists?: Array<{ id: string, item: Playlist }>;
  title: string;
  description: string;
  customUrl: string;
  thumbnails: Thumbnails;
  tags?: Array<string>;
  lastModified: number;
}

/**
 * combine content types
 */
export type Content = Video | Playlist | Channel;