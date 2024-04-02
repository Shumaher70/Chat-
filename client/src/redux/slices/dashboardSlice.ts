import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface dashboardType {
   trigger: boolean;
}

const initialState: dashboardType = {
   trigger: false,
};

const dashboardSlice = createSlice({
   name: 'dashboard',
   initialState,
   reducers: {
      triggerAction: (state, action: PayloadAction<boolean>) => {
         state.trigger = action.payload;
      },
   },
});

export const { triggerAction } = dashboardSlice.actions;

export default dashboardSlice.reducer;
