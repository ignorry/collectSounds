/**
 * @typedef Track - youtube download API response (https://rapidapi.com/tuttotone/api/t-one-youtube-converter/)
 * @prop {object} YoutubeAPI - youtube video metadata (useless for this app)
 * @prop {string} file - uri to result mp3 file (may be missing if the download is in progress)
 * @prop {string} guid
 * @prop {string} message - represents the stage
 */
export type Track = {
  YoutubeAPI: object;
  file?: string;
  guid: string;
  message: string;
}