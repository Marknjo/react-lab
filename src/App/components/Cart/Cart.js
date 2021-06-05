import { useContext, useState } from 'react';
import { formatNumber } from '../../helpers/helperMethods';
import useHttp from '../../hooks/use-http';
import CartContext from '../../store/cart-context';
import OrderForm from '../Order/OrderForm';
import OrderReceipt from '../Order/OrderReceipt';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';
import CartLists from './CartLists';

const Cart = function ({ onHideCart }) {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const formatedTotalAmount = formatNumber(cartCtx.totalAmount);

  const { isLoading, error, sendRequest: placeOrder } = useHttp();
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

  const successfulOrderhHandler = isSuccessful => {
    setIsOrderSuccessful(isSuccessful);
  };

  let content = <p className={styles.loading}>Loading...</p>;

  if (error) {
    content = <p className={styles.error}>{error}</p>;
  }

  if (!error && !isLoading) {
    content = (
      <>
        {isOrderSuccessful && <OrderReceipt onCloseReceipt={onHideCart} />}
        {!isOrderSuccessful && (
          <div className={styles['cart-content']}>
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

                  <OrderForm
                    className={styles.button}
                    onPlaceOrder={placeOrder}
                    onSuccessfulOrder={successfulOrderhHandler}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </>
    );
  }

  return <Modal onCloseModal={onHideCart}>{content}</Modal>;
};

export default Cart;
