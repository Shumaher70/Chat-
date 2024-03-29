import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from '../slices/authUserSlice';
export const store = configureStore({
   reducer: {
      authUserReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
