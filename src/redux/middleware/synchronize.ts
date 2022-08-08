import { AppThunk } from "..";
import { syncPeers } from "./syncPeers";
import { updateContents } from "./syncYoutube";

export const synchronize = (): AppThunk => async ( dispatch, getState: Function ) => {
  syncPeers();
  updateContents();
}