import { Content, Video } from "../../models/content";
import { AppThunk } from "../../redux";
import { getSaved, getSavedChannels, getSavedPlaylists, getSavedVideos } from "./getSaved";
import { getPublished } from "./getPublished";

/**
 * @typedef SearchQueries
 * @prop {string} [q] - search query to be filtered by title
 * @prop {'video' | 'playlist' | 'channel'} [type] - type of content
 * @prop {'addition' | 'date' | 'title'} [order] - order of items
 * @prop {'any' | 'medium' | 'long' | 'short'} [duration]
 * @prop {Array<string>} [tag]
 */
export type SearchQueries = {
  q?: string;
  type?: 'video' | 'playlist' | 'channel';
  order?: 'addition' | 'date' | 'title';
  duration?: 'any' | 'medium' | 'long' | 'short';
  tag?: string;
}

/**
 * filters saved items by content type
 * @prop {SearchQueries[type]} [type] 
 * @returns {Array<Content>}
 */
export const filterByType = ( type?: SearchQueries["type"] ): AppThunk => ( dispatch ) => {
  const items: any = type === 'channel' ?
    dispatch( getSavedChannels() )
  : type === 'playlist' ?
    dispatch( getSavedPlaylists() )
  : type === 'video' ?
    dispatch( getSavedVideos() )
  : dispatch( getSaved() );
  
  if ( items )
    return items;
  return []
}

/**
 * filters content items that contains query in the title
 * @param {Array<Content>} items 
 * @param {string} [q] - search query
 * @returns {Array<Video>}
 */
export const filterByQuery = ( items: Array<Content>, q?: string ) => {
  const res = items.filter( item => q ? item.title.toLowerCase().includes( q.toLowerCase() ) : true ) || [];

  console.log( 'res ' + JSON.stringify( res ) );

  return res;
}
/**
 * filters videos by duration
 * @param {Array<Content>} items 
 * @param {SearchQueries["duration"]} [duration] 
 * @returns {Array<Video>}
 */
export const filterByDuration = ( items: Array<Content>, duration?: SearchQueries["duration"] ) =>
  duration === 'short' ?
    items.filter( item => item.type === 'video' && item.duration && item.duration < 3.6e+7 ) || []
  : duration === 'medium' ?
    items.filter( item => item.type === 'video' && item.duration && item.duration > 3.6e+7 && item.duration < 1.08e+8 ) || []
  : duration === 'long' ?
    items.filter( item => item.type === 'video' && item.duration && item.duration > 1.08e+8 ) || []
  : items;

/**
 * filters videos by tag
 * @param {Array<Content>} items 
 * @param {string} [tag]
 * @returns {Array<Video>}
 */
export const filterByTag = ( items: Array<Content>, tag?: string ) => 
  items.filter( item => tag ? item.tags.includes( tag ) : true ) || [];

/**
 * sorts by order
 * @param {Array<Content>} items 
 * @param {SearchQueries["order"]} [order]
 * @returns {Array<Content>}
 */
export const sortByOrder = ( items: Array<Content>, order?: SearchQueries["order"] ) =>
  order === 'addition' ?
    items.sort( ( a: Content, b: Content ) => {
      if ( a.lastModified < b.lastModified ) return 1;
      if ( a.lastModified > b.lastModified ) return -1;
      return 0;
    })
  : order === 'date' ?
    items.sort( ( a: Content, b: Content ) => {
      if ( new Date( getPublished( a ) ) < new Date( getPublished( b ) ) ) return 1;
      if ( new Date( getPublished( a ) ) > new Date( getPublished( b ) ) ) return -1;
      return 0;
    })
  : order === 'title' ?
    items.sort( ( a: Content, b: Content ) => {
      if ( a.title > b.title ) return 1;
      if ( a.title < b.title ) return -1;
      return 0;
    })
  : items;

export const searchSaved = ( queries?: SearchQueries ): AppThunk => ( dispatch ) => 
  sortByOrder(
    filterByQuery(
      filterByDuration(
        filterByTag(
          dispatch( filterByType(
            queries.type
          )) as unknown as Array<Content>,
          queries.tag,
        ),
        queries.duration
      ),
      queries.q
    ),
    queries.order
  );