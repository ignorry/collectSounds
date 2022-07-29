/**
 * @typedef VideoIdRequest
 * @prop {string} part - specifies a comma-separated list of one or more video resource properties that the API response will include.
 * @prop {string} [chart] - identifies the chart that you want to retrieve.
 * @prop {string} [id]
 * @prop {string} [myRating] - Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
 * @prop {string} [hl] - instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports.
 * @prop {number} [maxHeight]- specifies the maximum height of the embedded player returned in the player.embedHtml property.
 * @prop {number} [maxResults] - specifies the maximum number of items that should be returned in the result set.
 * @prop {number} [maxWidth] - specifies the maximum width of the embedded player returned in the player.embedHtml property.
 * @prop {string} [onBehalfOfContentOwner] - indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value.
 * @prop {string} [pageToken] - identifies a specific page in the result set that should be returned.
 * @prop {string} [regionCode] - instructs the API to select a video chart available in the specified region.
 * @prop {string} [videoCategoryId] - identifies the video category for which the chart should be retrieved.
 */
export type VideoIdRequest = {
  part: string;
  chart?: string;
  id?: string;
  myRating?: string;
  hl?: string;
  maxHeight?: number;
  maxResults?: number;
  maxWidth?: number;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
  regionCode?: string;
  videoCategoryId?: string;
}