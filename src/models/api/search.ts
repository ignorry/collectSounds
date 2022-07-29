import { PageInfo, Thumbnails } from "./primitives"

/**
 * @typedef SearchItem
 * @prop {string} kind - identifies the API resource's type. The value will be youtube#searchResult.
 * @prop {string} etag - the Etag of this resource.
 * @prop {object} id - contains information that can be used to uniquely identify the resource that matches the search request.
 * @prop {string} id.kind - the type of the API resource.
 * @prop {string} [id.videoId] - if video
 * @prop {string} [id.channelId] - if channel
 * @prop {string} [id.playlistId] - if playlist
 * @prop {object} [snippet] - contains basic details about the channel, such as its title, description, and thumbnail images.
 * @prop {string} [snippet.title]
 * @prop {string} [snippet.channelId]
 * @prop {string} [snippet.description]
 * @prop {string} [snippet.publishedAt]
 * @prop {Thumbnails} [snippet.thumbnails]
 * @prop {string} [snippet.channelTitle]
 * @prop {string} [snippet.liveBroadcastContent] - an indication of whether a video or channel resource has live broadcast content. Valid property values are upcoming, live, and none.
 */
export type SearchItem = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  },
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
  }
}

/**
 * @typedef SearchResponse
 * @prop {string} kind - identifies the API resource's type. The value will be youtube#searchListResponse.
 * @prop {string} etag - the Etag of this resource.
 * @prop {string} nextPageToken - can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 * @prop {string} prevPageToken - can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 * @prop {string} regionCode - the region code that was used for the search query.
 * @prop {Array<SearchItem>} [items] - a list of results that match the request criteria.
 * @prop {PageInfo} pageInfo - encapsulates paging information for the result set.
 */
export type SearchResponse = {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Array<SearchItem>;
}