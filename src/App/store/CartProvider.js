import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      //calculate total cart value
      const updatedTotalAmount =
        prevState.totalAmount + action.item.price * action.item.amount;

      //Don't add two similar items in the cart
      console.log(action.item);
      //Instead, update the amount
      //1. Find the id of the current element in the state (If it is there)
      const existingCartItemIndex = prevState.items.findIndex(
        item => item.id === action.item.id
      );

      //2. Grab the existing item in the Cart (If available)
      const existingItem = prevState.items[existingCartItemIndex];

      //3. Check status of the Cart before adding a new item
      //3.1. If the item is found in the Cart, replace/swap that item with the updated item amount
      //3.2 If item is not available in the Cart, do nothing, simply concat the new item

      let updatedItems;

      if (existingItem) {
        //3.1. There is a similar item in the cart

        //1. only change the item in the cart amount
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };

        //2. Don't mutate exisiting state, copy first
        updatedItems = [...prevState.items];

        //3. swap items in the cart
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        //3.2. There is no similar item in the cart
        updatedItems = [action.item, ...prevState.items];
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    default:
      return prevState;
  }
};

const CartProvider = function ({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item,
    });
  };

  const removeItemFromCartHander = () => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHander,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
