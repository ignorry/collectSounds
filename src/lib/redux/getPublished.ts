import { Content } from "../../models/content";

/**
 * get publishedAt of content item by last video
 * @param {Content} item
 * @returns {string} empty string if there are no videos in the item
 */
export const getPublished = ( item: Content ): string => {
  const i = item as any;
  let max: string | undefined = i.publishedAt;

  const firstM = max;

  if ( i.videos )
    max = new Date( i.videos[0].item.publishedAt ) > new Date( max || 0 ) ? i.videos[0].item.publishedAt : max;

  const secondM = max;

  if ( i.playlists ) {
    const plMax = i.playlists.map( ( pl: any ) => pl?.item.videos && pl.item.videos[0].item.publishedAt ).sort( ( a: any, b: any ) => {
      if ( new Date(a) < new Date(b) ) return 1;
      if ( new Date(a) > new Date(b) ) return -1;
      return 0;
    })[0];

    max = new Date( plMax || 0 ) > new Date( max || 0 ) ? plMax : max;
  }

  const thirdM = max

  return max || '';
}