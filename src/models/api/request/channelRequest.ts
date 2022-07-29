/**
 * @typedef ChannelIdRequest
 * @prop {string} part - specifies a comma-separated list of one or more video resource properties that the API response will include.
 * @prop {string} [forUsername] - specifies a YouTube username, thereby requesting the channel associated with that username.
 * @prop {string} [id]
 * @prop {string} [managedByMe] - Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies.
 * @prop {string} [mine] - indicates that the requested video is owned by user
 * @prop {string} [hl] - instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports.
 * @prop {number} [maxResults] - specifies the maximum number of items that should be returned in the result set.
 * @prop {string} [onBehalfOfContentOwner] - indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value.
 * @prop {string} [pageToken] - identifies a specific page in the result set that should be returned.
 */
export type ChannelIdRequest = {
  part: string;
  forUsername?: string;
  id?: string;
  managedByMe?: string;
  mine?: string;
  hl?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
}