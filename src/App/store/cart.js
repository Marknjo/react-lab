import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  items: [],
};
//create reducer

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, actions) {
      state.items = actions.payload.items;
    },

    removeItem(state, actions) {
      state.items = actions.payload.items;
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

//create actions

export const cartActions = cartSlice.actions;

//export reducers
export default cartSlice.reducer;
