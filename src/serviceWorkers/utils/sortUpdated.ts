import { SavedState } from "../../redux/slices/saved";

/**
 * Get all saved data and deleted content items, that modified after some time
 * @param {SavedState} saved - saved slice
 * @param {number} timestamp - lastModifiied
 * @returns {SavedState} slice without old items 
 */
export const sortUpdated = ( saved: SavedState, timestamp: number ) => ({
    data: saved.data.filter( item => item.item.lastModified > timestamp ),
    deleted: saved.deleted.filter( item => item.item > timestamp )
  } as SavedState )