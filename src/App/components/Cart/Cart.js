import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = function ({ onHideCart }) {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map(item => {
        return (
          <CartItem
            key={item.customerId}
            price={item.price}
            title={item.title}
            amount={item.amount}
            onClick={''}
            onRemove={''}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onCloseModal={onHideCart}>
      {cartItems}

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>

      <div className={styles.actions}>
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
      </div>
    </Modal>
  );
};

export default Cart;
