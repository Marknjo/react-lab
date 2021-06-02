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

    case 'REMOVE_ITEM':
      const currentItem = prevState.items.filter(
        item => item.id === action.id
      )[0];

      //1. Update total items on remove
      const updatedTotalAmountInCart =
        prevState.totalAmount - currentItem.price;

      //2. updateItems in the cart
      //2.1. Decrease items if items are more than 1
      //2.2. Remove the item if items equal to 1

      //Update logic
      //1. Find the id of incoming item
      const curItemIndex = prevState.items.findIndex(
        item => item.id === action.id
      );

      //2. Grab the item in the state (Context - PrevState === currentItem)

      let updatedItemsInCart;

      if (+currentItem.amount > 1) {
        //2.2. Items in the cart are greater than 1
        //1. reduced the amount value
        const removedItem = {
          ...currentItem,
          amount: currentItem.amount - 1,
        };

        //2. copy the existing state
        updatedItemsInCart = [...prevState.items];

        //3. swap the items
        updatedItemsInCart[curItemIndex] = removedItem;
      } else {
        //2.1. There is only one item in the cart
        updatedItemsInCart = [...prevState.items].filter(
          item => item.id !== action.id
        );
      }

      return {
        items: updatedItemsInCart,
        totalAmount: updatedTotalAmountInCart,
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

  const removeItemFromCartHander = id => {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id,
    });
  };

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
