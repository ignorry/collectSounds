import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * @typedef MovePayload
 * @prop {string} id - id of item
 * @prop {number} shift - change position
 */
export type MovePayload = {
  id: string,
  shift: number
}

/**
 * @typedef QueueState
 * @prop {Array<string>} data - array of ids
 */
export type QueueState = {
  data: Array<string>;
}

const initialState: QueueState = {
  data: [],
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
    moveItem: ( state, action: PayloadAction<MovePayload> ) => {
      const i = state.data.indexOf( action.payload.id );
      if ( i !== -1 ) {
        const id = state.data[i];
        state.data.splice( i, 1 );

        if ( i + action.payload.shift >= state.data.length )
          state.data.push( id );
        else if ( i + action.payload.shift <= 0 )
          state.data.unshift( id );
        else
          state.data.splice( i+action.payload.shift, 0, id );
      }
    }
  }
});

export const {
  addItem,
  deleteItem,
  moveItem
} = queue.actions;

export default queue.reducer; 