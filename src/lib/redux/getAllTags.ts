import { AppThunk } from "../../redux";
import { getAll } from "./getAll";

/**
 * get tags of all videos
 * @returns {Array<string>}
 */
export const getAllTags = (): AppThunk => ( dispatch ) => {
  const items: any = dispatch( getAll() )
  
  if ( ! items && ! items.length ) return [];

  const tags: Array<string> = [];

  items.forEach( ( item: any ) => item.tags && tags.push( ...item.tags ) );

  if ( ! tags.length ) return [];

  return Array.from( new Set( tags ) );
}