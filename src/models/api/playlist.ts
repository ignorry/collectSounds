import { PageInfo, Localized, Thumbnails } from "./primitives";

/**
 * @typedef Playlist
 * @prop {string} kind - identifies the API resource's type. The value will be youtube#playlist.
 * @prop {string} etag - the Etag of this resource.
 * @prop {string} id
 * @prop {object} [snippet] - contains basic details about the playlist, such as its title, description, and thumbnail images.
 * @prop {string} [snippet.title]
 * @prop {string} [snippet.description]
 * @prop {string} [snippet.defaultLanguage] - the language of the text in the playlist resource's snippet.title and snippet.description properties.
 * @prop {string} [snippet.publishedAt]
 * @prop {Thumbnails} [snippet.thumbnails]
 * @prop {Localized} [snippet.localized] - contains a localized title and description for the channel or it contains the channel's title and description in the default language for the channel's metadata.
 * @prop {object} [status] - contains status information for the playlist.
 * @prop {object} [status.privacyStatus] - the playlist's privacy status. (private | public | unlisted)
  * @prop {object} [contentDetails] - encapsulates information about the channel's content.
 * @prop {object} [contentDetails.itemCount] - the number of videos in the playlist.
 * @prop {object} [player] - contains information that you would use to play the playlist in an embedded player.
 * @prop {string} [player.embedHtml] - an <iframe> tag that embeds a player that will play the playlist.
 */
export type Playlist = {
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
    defaultLanguage: string;
    localized: Localized;
  };
  status?: {
    privacyStatus: string;
  };
  contentDetails?: {
    itemCount: number;
  };
  player?: {
    embedHtml: string;
  }
}

/**
 * @typedef PlaylistIdResponse
 * @prop {string} kind - identifies the API resource's type. The value will be youtube#playlistListResponse.
 * @prop {string} etag - the Etag of this resource.
 * @prop {Array<Playlist>} [items] - a list of playlists that match the request criteria.
 * @prop {PageInfo} pageInfo - encapsulates paging information for the result set.
 */
export type PlaylistIdResponse = {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items?: Array<Playlist>;
}