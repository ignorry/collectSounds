import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * @typedef OptionsState
 * @prop {string} peer - own peer
 * @prop {Array<string>} connectedPeers - peers of contented devices
 * @prop {boolean} darkTheme - enabled by default
 */
export type OptionsState = {
  peer: string,
  connectedPeers: Array<string>,
  darkTheme: boolean,
}

const initialState: OptionsState = {
  peer: '',
  connectedPeers: [],
  darkTheme: true,
}

/**
 * container for app options
 */
const options = createSlice({
  name: "options",
  initialState,
  reducers: {
    /**
     * set device's own peer
     * @param state 
     * @param {PayloadAction<string>} action - id
     */
    setPeer: ( state, action: PayloadAction<string> ) => {
      state.peer = action.payload;
    },
    /**
     * add connected peer's id
     * @param state 
     * @param {PayloadAction<string>} action - id of peer
     */
    addConnectedPeer: ( state, action: PayloadAction<string> ) => {
      if ( state.connectedPeers.indexOf( action.payload ) === -1 )
        state.connectedPeers.push( action.payload );
    },
    /**
     * remove peer by it's id
     * @param state 
     * @param {PayloadAction<string>} action - id of peer
     */
    removeConnectedPeer: ( state, action: PayloadAction<string> ) => {
      const i = state.connectedPeers.indexOf( action.payload );
      if ( i !== -1 ) {
        state.connectedPeers.splice( i, 1 );
      }
    },
    /**
     * set app's color theme
     * @param state 
     * @param {PayloadAction<boolean>} action
     */
    setDarkTheme: ( state, action: PayloadAction<boolean> ) => {
      state.darkTheme = action.payload;
    }
  }
});

export const {
  setPeer,
  addConnectedPeer,
  removeConnectedPeer,
  setDarkTheme
} = options.actions;

export default options.reducer;