/**
 * @typedef PageInfo
 * @prop {number} totalResults
 * @prop {number} resultsPerPage
 */
export type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
}

/**
 * @typedef Thumbnail
 * @prop {string} url
 * @prop {number} width
 * @prop {number} height
 */
export type Thumbnail = {
  url: string;
  width: number;
  height: number;
}

/**
 * @typedef Thumbnails
 * @prop {Thumbnail} [default]
 * @prop {Thumbnail} [medium]
 * @prop {Thumbnail} [high]
 * @prop {Thumbnail} [standard]
 * @prop {Thumbnail} [maxres]
 */
export type Thumbnails = {
  default?: Thumbnail;
  medium?: Thumbnail;
  high?: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

/**
 * @typedef Localized
 * @prop {string} title
 * @prop {string} description
 */
export type Localized = {
  title: string;
  description: string;
}