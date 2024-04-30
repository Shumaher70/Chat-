import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface authUser {
   user: {
      id: string;
      name: string;
      avatar: string;
      email: string;
   } | null;
}

const initialState: authUser = {
   user: null,
};

const authUserSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      getAuthUserAction: (
         state,
         action: PayloadAction<{
            id: string;
            name: string;
            avatar: string;
            email: string;
         } | null>
      ) => {
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
