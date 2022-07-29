/**
 * @typedef PlaylistIdRequest
 * @prop {string} part - specifies a comma-separated list of one or more video resource properties that the API response will include.
 * @prop {string} [channelId] - ndicates that the API response should only contain resources created by the channel.
 * @prop {string} [id]
 * @prop {string} [mine] - Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
 * @prop {string} [hl] -  instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports.
 * @prop {number} [maxResults] - specifies the maximum number of items that should be returned in the result set.
 * @prop {string} [onBehalfOfContentOwner] - intended exclusively for YouTube content partners.
 * @prop {string} [onBehalfOfContentOwnerChannel] - specifies the YouTube channel ID of the channel to which a video is being added. 
 * @prop {string} [pageToken] - identifies a specific page in the result set that should be returned.
 */
export type PlaylistIdRequest = {
  part: string;
  channelId?: string;
  id?: string;
  mine?: string;
  hl?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
  pageToken?: string;
}

/**
 * @typedef PlaylistIdRequest
 * @prop {string} part - specifies a comma-separated list of one or more video resource properties that the API response will include.
 * @prop {string} [id]
 * @prop {string} [playlistId] - pecifies the unique ID of the playlist for which you want to retrieve playlist items. 
 * @prop {number} [maxResults] - specifies the maximum number of items that should be returned in the result set.
 * @prop {string} [onBehalfOfContentOwner] - intended exclusively for YouTube content partners.
 * @prop {string} [pageToken] - identifies a specific page in the result set that should be returned.
 * @prop {string} [videoId] - specifies that the request should return only the playlist items that contain the specified video.
 */
export type PlaylistItemsRequest = {
  part: string;
  id?: string;
  playlistId?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
  videoId?: string;
}