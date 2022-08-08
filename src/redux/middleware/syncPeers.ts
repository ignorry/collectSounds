import Peerjs from "peerjs";
import { AppThunk } from "..";
import { Content } from "../../models/content";
import { getAll } from "../../lib/redux/getAll";
import { addItem, deleteItem } from "../slices/saved";

/**
 * search for max lastModified value in collection of Content
 * @param {Map<string, Content>} data - collection of Content
 * @returns {number} timestamp
 */
export const getMaxLastModifiedInMap = ( data: Array<Content> ): AppThunk => ( dispatch, getState: Function ) => Math.max( 
  ...data.map( item => item.lastModified ),
  ...Array.from( getState().saved.deleted as Map<string, number> ).map( item => item[1] )
);

/**
 * get lastModified of state
 * @returns {number} timestamp
 */
export const getMaxLastModified = (): AppThunk => ( dispatch ) => 
  dispatch( getMaxLastModifiedInMap( dispatch( getAll() ) as any || [] ) );

/**
 * @typedef syncResponse response of peer when synchronize
 * @prop {Map<string, Content>} data - copy of saved.data map, containing only fresh content
 * @prop {Map<string, number>} deleted - list of deleted contents since putted timestamp
 */
type syncResponse = {
  data: Map<string, Content>
  deleted: Map<string, number>
}

/**
 * fetch for changes in other peers
 * @returns {void}
 */
export const syncPeers = (): AppThunk => ( dispatch, getState: Function ) => {
  const peer = new Peerjs( getState().options.peer );

  peer.on('connection', (conn) => {
    console.log( 'conntected' );
    conn.on( 'data', ( data: syncResponse ) => {
      ( data && data.data ) && dispatch( addItem( Array.from( data.data, item => item[1] )));
      ( data && data.deleted ) && dispatch( deleteItem( Array.from( data.deleted, item => item[0] )));
    });
  });

  getState().options.connectedPeers.forEach( ( connected: string ) => {
    const conn = peer.connect( connected );

    conn.on('open', () =>
      conn.send({
        id: getState().options.peer,
        lastModified: dispatch( getMaxLastModified() ),
      }));
  });
}
