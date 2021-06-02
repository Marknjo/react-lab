import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';

const Cart = function ({ onHideCart }) {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: '2', price: 12.99 }].map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
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
