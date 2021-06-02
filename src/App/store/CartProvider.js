import CartContext from './cart-context';

const CartProvider = function ({ children }) {
  const addItemHandler = () => {};

  const removeItemHander = () => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHander,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
