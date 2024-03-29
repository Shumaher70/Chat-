import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from '../slices/authUserSlice';
import themeReducer from '../slices/themeSlice';
export const store = configureStore({
   reducer: {
      authUserReducer,
      themeReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
