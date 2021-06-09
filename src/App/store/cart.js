import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  items: [],

  cartTotalAmount: 0,
};

//create reducer
const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, actions) {
      state.items = actions.payload.items;
      state.cartTotalAmount = actions.payload.cartTotalAmount;
    },

    removeItem(state, actions) {
      state.items = actions.payload.items;
      state.cartTotalAmount = actions.payload.cartTotalAmount;
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
