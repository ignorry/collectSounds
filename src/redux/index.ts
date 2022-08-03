import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { ThunkAction } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist-indexeddb-storage";
import * as PERSIST_CONSTANTS from "redux-persist/lib/constants";
import logger from "redux-logger";

import saved from "./slices/saved";
import options from "./slices/options"

enableMapSet();

const rootReducer = combineReducers({
  saved,
  options,
});

const persistConfig = {
  key: 'root',
  storage: storage('root'),
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat( logger ),
});

export const persistor = persistStore( store );

export type RootState = ReturnType<typeof persistedReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
