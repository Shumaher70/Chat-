import { createSlice } from '@reduxjs/toolkit';

interface ThemeType {
   theme: string;
}

type Theme = 'dark' | 'light';

const themeStorage: Theme = localStorage.getItem('LightMode')
   ? (localStorage.getItem('LightMode') as Theme)
   : 'dark';

const initialState: ThemeType = {
   theme: themeStorage,
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
