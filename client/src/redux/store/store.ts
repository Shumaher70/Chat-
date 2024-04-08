/// <reference types="redux-persist" />
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authUserReducer from '../slices/authUserSlice';
import dashboardReducer from '../slices/dashboardSlice';
import themeReducer from '../slices/themeSlice';
import roomReducer from '../slices/roomsSlice';
import storage from 'redux-persist/lib/storage';
import {
   FLUSH,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
   REHYDRATE,
   persistReducer,
} from 'redux-persist';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['dashboardReducer', 'roomReducer', 'themeReducer'],
};

const reducers = combineReducers({
   dashboardReducer,
   authUserReducer,
   themeReducer,
   roomReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
