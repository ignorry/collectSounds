import { AppThunk } from "..";
import { syncListener } from "./syncListener";
import { syncPeers } from "./syncPeers";
import { updateContents } from "./syncYoutube";

export const synchronize = (): AppThunk => async ( dispatch ) => {
  dispatch( syncListener() );
  dispatch( syncPeers() );
  dispatch( updateContents() );
}