import Peerjs from "peerjs";
import { AppThunk } from "..";
import { Content } from "../../models/content";
import { getAll } from "../../lib/redux/getAll";
import { addItem, deleteItem, SavedState } from "../slices/saved";
import { getRandomPeerId } from "../../lib/getRandomPeerId";
import { addConnectedPeer, setPeer } from "../slices/options";
import { sortUpdated } from "../../serviceWorkers/utils/sortUpdated";

let peerS: any;

/**
 * listen for synchronization
 * @returns {void}
 */
export const syncListener = (): AppThunk => ( dispatch, getState: Function ) => {
  const options = getState().options;
  const saved: SavedState | undefined = getState().saved;

  peerS = new Peerjs( options.peer + 'S' );

  peerS.on( "connection", ( conn: any ) => {
    conn.on( "data", ( data: any ) => {
      dispatch( addConnectedPeer( data.id ) );

      if ( ! saved ) return;

      const conn = peerS.connect( data.id );
      conn.on( "open", () => {
        conn.send( JSON.stringify( sortUpdated( saved, data.lastModified ) ) );
      });
    });
  });
}
