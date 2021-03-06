import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isCartHidden: true, notifications: null },
  reducers: {
    toggleCart(state) {
      state.isCartHidden = !state.isCartHidden;
    },

    showNotification(state, action) {
      state.notifications = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },

    hideNotification(state) {
      state.notifications = null;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
