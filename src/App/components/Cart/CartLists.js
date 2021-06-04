import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const CartLists = ({ className }) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = id => {
    //validate the id
    if (!id) return;
    //remove item
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    const updatedItem = {
      ...item,
      amount: 1,
    };

    cartCtx.addItem(updatedItem);
  };

  return (
    <ul className={className}>
      {cartCtx.items.map(item => {
        return (
          <CartItem
            key={item.id}
            price={item.price}
            title={item.title}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default CartLists;
