import { useContext } from 'react';
import { formatNumber } from '../../helpers/helperMethods';
import CartContext from '../../store/cart-context';
import OrderForm from '../Order/OrderForm';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';
import CartLists from './CartLists';

const Cart = function ({ onHideCart }) {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const formatedTotalAmount = formatNumber(cartCtx.totalAmount);

  return (
    <Modal onCloseModal={onHideCart}>
      <CartLists className={styles['cart-items']} />

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

            <OrderForm className={styles.button} />
          </>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
