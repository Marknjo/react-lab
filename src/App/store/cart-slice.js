import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  items: [],
  cartTotalAmount: 0,
  totalQuantity: 0,
};

//create reducer
const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addItemToCart(state, actions) {
      //Component heavy dependancy on the work of reducers
      // state.items = actions.payload.items;
      // state.cartTotalAmount = actions.payload.cartTotalAmount;

      //Reducer doing it's full job
      //1. get the payload
      //2.1. pre: calculate Item Total Quantity
      //2.1.pre: calculate cart total Amount
      //3. Find if the item stored in the store is already there
      //4. If it is there, just update the quantity count
      //5. If it is not there, add/push it to the cart

      //1. Get the payload
      const incomingItem = actions.payload;

      //1.pre work
      state.totalQuantity = state.totalQuantity + 1;
      state.cartTotalAmount =
        incomingItem.price * incomingItem.quantity + state.cartTotalAmount;

      //3. find if item is in the store
      const existingItem = state.items.find(item => {
        return item.id === incomingItem.id;
      });

      let updatedItems;

      if (existingItem) {
        //find index
        const existingItemIndex = state.items.findIndex(
          item => incomingItem.id === item.id
        );

        //calc total quantity
        const totalQuantity = ++existingItem.quantity;

        //update item quantity
        const updatedItem = {
          ...existingItem,
          quantity: totalQuantity,
          total: totalQuantity * existingItem.price,
        };

        //clone state
        updatedItems = [...state.items];

        //replace state
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [incomingItem, ...state.items];
      }

      state.items = updatedItems;
    },

    removeItemFromCart(state, actions) {
      // state.items = actions.payload.items;
      // state.cartTotalAmount = actions.payload.cartTotalAmount;

      //Remove items from cart steps
      //1. get the payload
      //2.1. pre: calculate Item Total Quantity
      //2.1.pre: calculate cart total Amount
      //3. Find if the item stored in the store is already there
      //4. If it is there, just decrease the quantity count
      //5. If it is not there/quantity === 1, remove item from the cart
      //1. Get the payload & current item
      const id = actions.payload;
      const currentItem = state.items.find(item => item.id === id);

      //1.pre work
      state.totalQuantity = state.totalQuantity - 1;
      state.cartTotalAmount = state.cartTotalAmount - currentItem.price;

      //get items

      //update the item
      let updatedItems;

      if (currentItem && currentItem.quantity > 1) {
        //get the item index
        const currentItemIndex = state.items.findIndex(item => item.id === id);

        const totalQuantity = currentItem.quantity - 1;
        //reduce quantity of the items
        const updatedItem = {
          ...currentItem,
          total: totalQuantity * currentItem.price,
          quantity: totalQuantity,
        };

        //do not mutate state (clone)
        updatedItems = [...state.items];

        //Swap old with the updated item
        updatedItems[currentItemIndex] = updatedItem;
      } else {
        //remove the item from the cart
        updatedItems = state.items.filter(item => item.id !== id);
      }

      state.items = updatedItems;
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
