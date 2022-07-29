import { PageInfo, Localized, Thumbnails } from "./primitives";

/**
 * @typedef Channel
 * @prop {string} kind - identifies the API resource's type. The value will be youtube#channel.
 * @prop {string} etag - the Etag of this resource.
 * @prop {string} id
 * @prop {object} [snippet] - contains basic details about the channel, such as its title, description, and thumbnail images.
 * @prop {string} [snippet.title]
 * @prop {string} [snippet.description]
 * @prop {string} [snippet.publishedAt]
 * @prop {Thumbnails} [snippet.thumbnails]
 * @prop {Localized} [snippet.localized] - contains a localized title and description for the channel or it contains the channel's title and description in the default language for the channel's metadata.
 * @prop {string} [snippet.channelId]
 * @prop {string} [snippet.channelTitle]
 * @prop {Array<string>} [snippet.tags]
 * @prop {string} [snippet.categoryId]
 * @prop {string} [snippet.liveBroadcastContent]
 * @prop {string} [snippet.defaultLanguage]
 * @prop {string} [snippet.defaultAudioLanguage]
 * @prop {object} [contentDetails] - contains information about the video content, including the length of the video and an indication of whether captions are available for the video.
 * @prop {string} [contentDetails.duration] - the length of the video.
 * @prop {string} [contentDetails.dimension] - indicates whether the video is available in 3D or in 2D.
 * @prop {string} [contentDetails.definition] - indicates whether the video is available in high definition (HD) or only in standard definition.
 * @prop {string} [contentDetails.caption] - indicates whether captions are available for the video.
 * @prop {boolean} [contentDetails.licensedContent] - indicates whether the video represents licensed content, which means that the content was uploaded to a channel linked to a YouTube content partner and then claimed by that partner.
 * @prop {string} [contentDetails.contentRating] - pecifies the ratings that the video received under various rating schemes.
 * @prop {string} [contentDetails.projection] - specifies the projection format of the video. (360 | rectangular)
 * @prop {object} [statistics] - encapsulates statistics for the channel.
 * @prop {string} [statistics.viewCount]
 * @prop {string} [statistics.likeCount] 
 * @prop {string} [statistics.favoriteCount]
 * @prop {string} [commentCount]
 */
export type Video = {
  kind: string;
  etag: string;
  id: string;
  snippet?: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    tags: Array<string>;
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: Localized;
    defaultAudioLanguage: string;
  },
  contentDetails?: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    contentRating: object;
    projection: string;
  };
  statistics?: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

/**
 * @typedef VideoItem
 * @prop {string} kind - identifies the API resource's type. The value will be youtube#playlistItem.
 * @prop {string} etag - the Etag of this resource.
 * @prop {string} id
 */
export type VideoItem = {
  kind: string;
  etag: string;
  id: string;
}

/**
 * @typedef VideoIdResponse
 * @prop {string} kind - identifies the API resource's type. The value will be youtube#videoListResponse.
 * @prop {string} etag - the Etag of this resource.
 * @prop {Array<Video>} [items] - a list of videos that match the request criteria.
 * @prop {PageInfo} pageInfo - encapsulates paging information for the result set.
 */
export type VideoIdResponse = {
  kind: string;
  etag: string;
  items?: Array<Video>;
  pageInfo: PageInfo;
}

/**
 * @typedef PlaylistItemsResponse
 * @prop {string} kind - identifies the API resource's type. The value will be youtube#playlistItemListResponse.
 * @prop {string} etag - the Etag of this resource.
 * @prop {Array<VideoItem>} [items] - a list of videos in a playlist.
 * @prop {PageInfo} pageInfo - encapsulates paging information for the result set.
 */
export type PlaylistItemsResponse = {
  kind: string;
  etag: string;
  items?: Array<VideoItem>;
  pageInfo: PageInfo;
}