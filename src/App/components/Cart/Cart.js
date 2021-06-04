import { useContext } from 'react';
import { FIREBASE_URL } from '../../Configs/config';
import { formatNumber } from '../../helpers/helperMethods';
import useHttp from '../../hooks/use-http';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';
import CartLists from './CartLists';

const Cart = function ({ onHideCart }) {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const formatedTotalAmount = formatNumber(cartCtx.totalAmount);

  const { isLoading, error, sendRequest: placeOrder } = useHttp();
  const orderSubmitHandler = event => {
    //1.Prevent Default
    event.preventDefault();

    //2. Send Values
    //2.1. Use usHttp method -> send a single object {userId: , order: }

    const orderQuantity = cartCtx.items.reduce((curQty, order) => {
      return curQty + order.amount;
    }, 0);

    const orderedItemsMapped = cartCtx.items.map(item => {
      return {
        itemId: item.id,
        name: item.title,
        price: item.price,
        quantity: item.amount,
      };
    });

    const orderData = {
      userId: 'Mark',
      order: orderedItemsMapped,
      orderQuantity,
    };

    placeOrder(
      {
        url: `${FIREBASE_URL}orders.json`,
        method: 'POST',
        body: orderData,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      data => {
        console.log(data);
      }
    );
  };

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

            <form onSubmit={orderSubmitHandler}>
              <button className={styles.button} type="submit">
                Order
              </button>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
