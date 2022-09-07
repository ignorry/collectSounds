import { getPersistedSlice } from "./utils/getFromIDB";
import Peerjs from "peerjs";
import { SavedState } from "../redux/slices/saved";
import { sortUpdated } from "./utils/sortUpdated";

let peer: any;

self.addEventListener( 'activate', async ( event: any ) => {
  event.waitUntil( new Promise( async ( resolve ) => {
    const options = await getPersistedSlice( 'options' );
    const saved: SavedState | undefined = await getPersistedSlice( 'saved' );

    peer = new Peerjs( options.peer + 'S' );

    peer.on( "connection", ( conn: any ) => {
      conn.on( "data", ( data: any ) => {
        if ( ! saved ) return;

        const conn = peer.connect( data.id );
        conn.on( "open", () => {
          conn.send( JSON.stringify( sortUpdated( saved, data.lastModified ) ) );
        });
      });
    });
  }));
});