/**
 * @typedef SearchRequest
 * @prop {string} part - specifies a comma-separated list of one or more video resource properties that the API response will include.
 * @prop {boolean} [forContentOwner] - restricts the search to only retrieve videos owned by the content owner identified by the onBehalfOfContentOwner parameter.
 * @prop {boolean} [forDeveloper] - restricts the search to only retrieve videos uploaded via the developer's application or website. 
 * @prop {boolean} [forMine] - restricts the search to only retrieve videos owned by the authenticated user.
 * @prop {string} [relatedToVideoId] - retrieves a list of videos that are related to the video that the parameter value identifies.
 * @prop {string} [channelId] - ndicates that the API response should only contain resources created by the channel.
 * @prop {string} [channelType] - lets you restrict a search to a particular type of channel. (any | show)
 * @prop {string} [eventType] - restricts a search to broadcast events. (completed | live | upcoming)
 * @prop {string} [location] - specifies latitude/longitude coordinates e.g. (37.42307,-122.08427).
 * @prop {string} [locationRadius] - in conjunction with the location parameter, defines a circular geographic area.
 * @prop {number} [maxResults] - specifies the maximum number of items that should be returned in the result set.
 * @prop {string} [onBehalfOfContentOwner] - intended exclusively for YouTube content partners.
 * @prop {string} [order] - specifies the method that will be used to order resources in the API response. (date | rating | relevance | title | videoCount | viewCount)
 * @prop {string} [pageToken] - identifies a specific page in the result set that should be returned.
 * @prop {string} [publishedAfter] - indicates that the API response should only contain resources created at or after the specified time.
 * @prop {string} [publishedBefore] -  indicates that the API response should only contain resources created before or at the specified time.
 * @prop {string} [q] - specifies the query term to search for.
 * @prop {string} [regionCode] - instructs the API to return search results for videos that can be viewed in the specified country.
 * @prop {string} [relevanceLanguage] - instructs the API to return search results that are most relevant to the specified language. 
 * @prop {string} [safeSearch] - indicates whether the search results should include restricted content as well as standard content. (moderate | none | strict)
 * @prop {string} [topicId] - indicates that the API response should only contain resources associated with the specified topic.
 * @prop {string} [type] - restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types. The default value is video,channel,playlist.
 * @prop {string} [videoCation] - indicates whether the API should filter video search results based on whether they have captions.
 * @prop {string} [videoCategoryId] - filters video search results based on their category.
 * @prop {string} [videoDefinition] - lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. (any | high | standard)
 * @prop {string} [videoDimension] - lets you restrict a search to only retrieve 2D or 3D videos. (any | 2d | 3d)
 * @prop {string} [videoDuration] - filters video search results based on their duration. (any | long | medium | short)
 * @prop {string} [videoEmbeddable] - lets you to restrict a search to only videos that can be embedded into a webpage. (any | true)
 * @prop {string} [videoLicense] - filters search results to only include videos with a particular license. (any | creativeCommon | youtube)
 * @prop {string} [videoSyndicated] - lets you to restrict a search to only videos that can be played outside youtube.com. (any | true)
 * @prop {string} [videoType] -  lets you restrict a search to a particular type of videos. (any | episode | movie)
 */
export type SearchRequest = {
  part: string;
  forContentOwner?: boolean;
  forDeveloper?: boolean;
  forMine?: boolean;
  relatedToVideoId?: string;
  channelId?: string;
  channelType?: string;
  eventType?: string;
  location?: string;
  locationRadius?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  order?: string;
  pageToken?: string;
  publishedAfter?: string;
  publishedBefore?: string;
  q?: string;
  regionCode?: string;
  relevanceLanguage?: string;
  safeSearch?: string;
  topicId?: string;
  type?: string;
  videoCation?: string;
  videoCategoryId?: string;
  videoDefinition?: string;
  videoDimension?: string;
  videoDuration?: string;
  videoEmbeddable?: string;
  videoLicense?: string;
  videoSyndicated?: string;
  videoType?: string;
}