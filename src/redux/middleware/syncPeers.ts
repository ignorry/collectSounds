import Peerjs from "peerjs";
import { AppThunk } from "..";
import { Content } from "../../models/content";
import { getAll } from "../../lib/redux/getAll";
import { addItem, deleteItem, SavedState } from "../slices/saved";
import { getRandomPeerId } from "../../lib/getRandomPeerId";
import { setPeer } from "../slices/options";

let peer: any;

/**
 * search for max lastModified value in collection of Content
 * @param {Map<string, Content>} data - collection of Content
 * @returns {number} timestamp
 */
export const getMaxLastModifiedInMap = ( data: Array<Content> ): AppThunk => ( dispatch, getState: Function ) => Math.max( 
  ...data.map( item => item.lastModified ),
  ...getState().saved.deleted.map( ( item: any ) => item.item )
);

/**
 * get lastModified of state
 * @returns {number} timestamp
 */
export const getMaxLastModified = (): AppThunk => ( dispatch ) => 
  dispatch( getMaxLastModifiedInMap( dispatch( getAll() ) as any || [] ) );

/**
 * @typedef SyncResponse response of peer when synchronize
 * @prop {Map<string, Content>} data - copy of saved.data map, containing only fresh content
 * @prop {Map<string, number>} deleted - list of deleted contents since putted timestamp
 */
type SyncResponse = SavedState;

/**
 * fetch for changes in other peers
 * @returns {void}
 */
export const syncPeers = (): AppThunk => ( dispatch, getState: Function ) => {
  if ( ! getState().options.peer )
    dispatch( setPeer( getRandomPeerId() ) );
    
  peer = new Peerjs( getState().options.peer );

  peer.on('connection', (conn: any) => {
    conn.on( 'data', ( dataStr: string ) => { 
      const data: SyncResponse = JSON.parse( dataStr );
      ( data && data.data ) && dispatch( addItem( Array.from( data.data, item => item.item )));
      ( data && data.deleted ) && dispatch( deleteItem( Array.from( data.deleted, item => item.id )));
    });
  });

  getState().options.connectedPeers.forEach( ( connected: string ) => {
    setTimeout( () => {
      const conn = peer.connect( connected + 'S' );

      conn.on('open', () => {
        conn.send({
          id: peer.id,
          lastModified: dispatch( getMaxLastModified() ),
        })});
    }, 1000);
  });
}
