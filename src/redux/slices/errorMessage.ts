import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * @typedef ErrorMessageState
 * @prop {string} message - error message
 */
export type ErrorMessageState = {
  message: string;
}

const initialState: ErrorMessageState = {
  message: '',
}

const errorMessage = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setMessage: ( state, action: PayloadAction<string> ) => {
      state.message = action.payload;
    }
  }
});

export const {
  setMessage
} = errorMessage.actions;

export default errorMessage.reducer;