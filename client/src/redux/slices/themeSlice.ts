import { createSlice } from '@reduxjs/toolkit';

interface ThemeType {
   theme: string;
}

const initialState: ThemeType = {
   theme: 'dark',
};

const themeSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      themeAction: (state) => {
         state.theme = state.theme === 'dark' ? 'light' : 'dark';
      },
   },
});

export const { themeAction } = themeSlice.actions;

export default themeSlice.reducer;
