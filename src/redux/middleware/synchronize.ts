import { AppThunk } from "..";
import { syncPeers } from "./syncPeers";
import { updateContents } from "./syncYoutube";

export const synchronize = (): AppThunk => async ( dispatch ) => {
  dispatch( syncPeers() );
  dispatch( updateContents() );
}