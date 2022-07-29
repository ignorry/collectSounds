import { PageInfo, Thumbnails, Localized } from "./primitives";

/**
 * @typedef Channel
 * @prop {string} kind - identifies the API resource's type. The value will be youtube#channel.
 * @prop {string} etag - the Etag of this resource.
 * @prop {string} id
 * @prop {object} [snippet] - contains basic details about the channel, such as its title, description, and thumbnail images.
 * @prop {string} [snippet.title]
 * @prop {string} [snippet.description]
 * @prop {string} [snippet.customUrl]
 * @prop {string} [snippet.publishedAt]
 * @prop {Thumbnails} [snippet.thumbnails]
 * @prop {Localized} [snippet.localized] - contains a localized title and description for the channel or it contains the channel's title and description in the default language for the channel's metadata.
 * @prop {string} [snippet.country] - the country with which the channel is associated. 
 * @prop {object} [contentDetails] - encapsulates information about the channel's content.
 * @prop {object} [contentDetails.relatedPlaylists] -  identifies playlists associated with the channel, such as the channel's uploaded videos or liked videos. 
 * @prop {string} [contentDetails.relatedPlaylists.likes] - the ID of the playlist that contains the channel's liked videos.
 * @prop {string} [contentDetails.relatedPlaylists.uploads] - the ID of the playlist that contains the channel's uploaded videos.
 * @prop {object} [statistics] - encapsulates statistics for the channel.
 * @prop {string} [statistics.viewCount]
 * @prop {boolean} [statistics.subscriberCount] 
 * @prop {string} [statistics.videoCount]
 */
export type Channel = {
  kind: string;
  etag: string;
  id: string;
  snippet?: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: Thumbnails;
    localized: Localized;
    country: string;
  },
  contentDetails?: {
    relatedPlaylists: {
      likes: string;
      uploads: string;
    }
  };
  statistics?: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  }
}

/**
 * @typedef ChannelIdResponse
 * @prop {string} kind - identifies the API resource's type. The value will be youtube#channelListResponse.
 * @prop {string} etag - the Etag of this resource.
 * @prop {Array<Channel>} [items] - a list of channels that match the request criteria.
 * @prop {PageInfo} pageInfo - encapsulates paging information for the result set.
 */
export type ChannelIdResponse = {
  kind: string;
  etag: string;
  items?: Array<Channel>;
  pageInfo: PageInfo;
}
