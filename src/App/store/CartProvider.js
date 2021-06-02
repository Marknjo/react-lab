import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedTotalAmount =
        prevState.totalAmount + action.item.price * action.item.amount;

      return {
        item: [action.item, ...prevState.items],
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
