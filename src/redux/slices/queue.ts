import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * @typedef QueueState
 * @prop {Array<string>} data - array of ids
 * @prop {string} current - id of current track
 */
export type QueueState = {
  data: Array<string>;
  current: string | null;
}

const initialState: QueueState = {
  data: [],
  current: null,
}

/**
 * queue of tracks to listen
 */
const queue = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addItem: ( state, action: PayloadAction<string> ) => {
      if ( state.data.indexOf( action.payload ) === -1 )
        state.data.push( action.payload );
    },
    deleteItem: ( state, action: PayloadAction<string> ) => {
      const i = state.data.indexOf( action.payload );
      if ( i !== -1 )
        state.data.splice( i, 1 );
    },
    setAll: ( state, action: PayloadAction<Array<string>> ) => {
      state.data = action.payload;
    },
    cleanQueue: ( state ) => {
      state.data = [];
    },
    setCurrent: ( state, action: PayloadAction<string> ) => {
      state.current = action.payload;
    }
  }
});

export const {
  addItem,
  deleteItem,
  setAll,
  cleanQueue,
  setCurrent
} = queue.actions;

export default queue.reducer; 