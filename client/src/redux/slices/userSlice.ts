import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface User {
   id: string | number | null;
   name: string | null;
   avatar: string | null;
   user_id: string | null;
   create_at: string | null;
}

const initialState: User = {
   id: null,
   name: null,
   avatar: null,
   user_id: null,
   create_at: null,
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      addUserAction: (state, action: PayloadAction<User>) => {
         state.id = action.payload.id;
         state.name = action.payload.name;
         state.avatar = action.payload.avatar;
         state.user_id = action.payload.user_id;
         state.create_at = action.payload.create_at;
      },
   },
});

export const { addUserAction } = userSlice.actions;

export default userSlice.reducer;
