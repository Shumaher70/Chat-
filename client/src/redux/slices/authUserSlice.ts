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
      getAuthUserAction: (state, action: PayloadAction<User>) => {
         state.user = action.payload;
      },
   },
});

export const { getAuthUserAction } = authUserSlice.actions;

export default authUserSlice.reducer;
