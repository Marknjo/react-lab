import { useContext, useEffect, useState } from 'react';
import { formatNumber } from '../../helpers/helperMethods';
import CartContext from '../../store/cart-context';
import OrderList from './OrderList';
import styles from './OrderReceipt.module.css';

const OrderReceipt = function ({ onCloseReceipt }) {
  const date = Intl.DateTimeFormat('en-GB').format(Date.now());
  const cartCtx = useContext(CartContext);
  const [isSuccessMessageShown, setIsSuccessMessageShown] = useState(true);

  const formatedSubtotal = formatNumber(cartCtx.totalAmount);
  const formatedTaxAmount = formatNumber(cartCtx.totalAmount * 0.16);
  const formatedTotalAmount = formatNumber(
    cartCtx.totalAmount + cartCtx.totalAmount * 0.16
  );

  const closeRecipeHandler = () => {
    //1. reset the store
    cartCtx.clearCart();
    //2. Close the modal
    onCloseReceipt();
  };

  const closeSuccessfulMessageBoxHandler = () => {
    setIsSuccessMessageShown(false);
  };

  //auto close success message
  useEffect(() => {
    const isClosingMessageBoxTimer = setTimeout(() => {
      setIsSuccessMessageShown(false);
    }, 15 * 1000);

    return () => {
      clearTimeout(isClosingMessageBoxTimer);
    };
  }, []);

  return (
    <>
      <div className={styles['order']}>
        {isSuccessMessageShown && (
          <div className={styles['order__successful']}>
            <p>Your order was submitted successfully</p>
            <p>Thanks for ordering with us 😉</p>
            <button
              onClick={closeSuccessfulMessageBoxHandler}
              type="button"
              className={styles['order__successful-close']}
            >
              &times;
            </button>
          </div>
        )}

        <div className={styles['order__content']}>
          <header className={styles['order__header']}>
            <div className={styles['order__receipt-text']}>Receipt</div>
            <div className={styles['order__logo']}>RecipeMeals</div>
          </header>

          <div className={styles['order__inner']}>
            <section className={styles['order__company']}>
              <div className={styles['order__from']}>
                <h3>From</h3>
                <address>
                  <p>React Meals</p>
                </address>
              </div>
              <div className={styles['order__details']}>
                <p className={'order__detail'}>
                  <span className={styles['order__detail--title']}>
                    Receipt #:{'  '}
                  </span>
                  <span className={styles['order__detail--text']}>
                    {`RM00${Math.random().toString().slice(2, 8)}`}
                  </span>
                </p>
                <p className={'order__detail'}>
                  <span className={styles['order__detail--title']}>
                    Receipt Date #:{'  '}
                  </span>
                  <span className={styles['order__detail--text']}>{date}</span>
                </p>
              </div>
            </section>

            <section className={styles['order__billing']}>
              <div className={styles['order__to']}>
                <h3>Bill To</h3>
                <address>
                  <p>Mark</p>
                </address>
              </div>

              <div className={styles['order__ship']}>
                <p className={styles['order__detail']}>
                  <span className={styles['order__detail--title']}>
                    Ship To:{'  '}
                  </span>
                  <span className={styles['order__detail--text']}>Mark</span>
                </p>
              </div>
            </section>

            <OrderList />

            <section className={styles['order__taxes']}>
              <p>
                <span>Subtotal</span> <span>{formatedSubtotal}</span>
              </p>
              <p>
                <span>TAX 16%</span> <span>{formatedTaxAmount}</span>
              </p>
            </section>
          </div>
        </div>
      </div>

      <section className={styles['order__total']}>
        <p>
          <span>Total Amount</span> <span>{formatedTotalAmount}</span>
        </p>
      </section>

      <div className={styles['order__actions']}>
        <button
          className={styles['order__close']}
          type="button"
          onClick={closeRecipeHandler}
        >
          Close
        </button>
      </div>

      <footer className={styles['order__footer']}>
        <p>Terms and Conditions Apply</p>
        <p> &copy; copyright, {date} </p>
      </footer>
    </>
  );
};

export default OrderReceipt;