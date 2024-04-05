import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from '../slices/authUserSlice';
import themeReducer from '../slices/themeSlice';
import dashboardReducer from '../slices/dashboardSlice';
import roomReducer from '../slices/roomsSlice';
export const store = configureStore({
   reducer: {
      dashboardReducer,
      authUserReducer,
      themeReducer,
      roomReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
