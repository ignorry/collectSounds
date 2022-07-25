import { configureStore, Action, combineReducers } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';
import * as PERSIST_CONSTANTS from 'redux-persist/lib/constants';
import logger from 'redux-logger';

const PERSIST_ACTIONS = [
  PERSIST_CONSTANTS.FLUSH,
  PERSIST_CONSTANTS.REHYDRATE,
  PERSIST_CONSTANTS.PAUSE,
  PERSIST_CONSTANTS.PERSIST,
  PERSIST_CONSTANTS.PURGE,
  PERSIST_CONSTANTS.REGISTER
];

const rootReducer = combineReducers({
});

const persistConfig = {
  key: 'root',
  storage: storage('root'),
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: PERSIST_ACTIONS,
    },
  }).concat( logger ),
});

export const persistor = persistStore( store );

export type RootState = ReturnType<typeof persistedReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
