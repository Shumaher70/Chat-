import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@supabase/supabase-js';

interface authUser {
   user: User | null;
}

const initialState: authUser = {
   user: null,
};

const authUserSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      getAuthUserAction: (state, action: PayloadAction<User | null>) => {
         state.user = action.payload;
      },

      refreshAuthUserAction: (state) => {
         state.user = null;
      },
   },
});

export const { getAuthUserAction, refreshAuthUserAction } =
   authUserSlice.actions;

export default authUserSlice.reducer;
