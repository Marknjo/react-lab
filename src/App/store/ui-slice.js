import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isCartHidden: true },
  reducers: {
    toggleCart(state) {
      state.isCartHidden = !state.isCartHidden;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
