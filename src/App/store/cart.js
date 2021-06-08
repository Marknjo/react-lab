import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  items: [],
  isCartHidden: true,
  total: 0,
};

//create reducer
const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, actions) {
      state.items = actions.payload.items;
      state.total = actions.payload.total;
    },

    removeItem(state, actions) {
      state.items = actions.payload.items;
      state.total = actions.payload.total;
    },

    clearCart(state) {
      state.items = [];
    },

    toggleCart(state) {
      state.isCartHidden = !state.isCartHidden;
    },
  },
});

//create actions

export const cartActions = cartSlice.actions;

//export reducers
export default cartSlice.reducer;
