import { useContext } from 'react';
import { formatNumber } from '../../helpers/helperMethods';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = function ({ onHideCart }) {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const formatedTotalAmount = formatNumber(cartCtx.totalAmount);

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

  const cartItems = (
    <ul className={styles['cart-items']}>
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

  return (
    <Modal onCloseModal={onHideCart}>
      {cartItems}

      <div className={styles.total}>
        {hasItems ? (
          <>
            <span>Total Amount</span>
            <span>{formatedTotalAmount}</span>{' '}
          </>
        ) : (
          <>
            <span> Opps! Your cart is empty. (☞ﾟヮﾟ)☞ </span>
            <div className={styles.actions}>
              <button
                className={styles['button--alt']}
                type="button"
                onClick={onHideCart}
              >
                Shop Now
              </button>
            </div>
          </>
        )}
      </div>

      <div className={styles.actions}>
        {hasItems && (
          <>
            <button
              className={styles['button--alt']}
              type="button"
              onClick={onHideCart}
            >
              Close
            </button>
            <button className={styles.button} type="button">
              Order
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
