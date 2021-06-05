import styles from './OrderReceipt.module.css';

const OrderReceipt = function () {
  const date = Intl.DateTimeFormat('en-GB').format(Date.now());
  return (
    <>
      <div className={styles['order']}>
        <div className={styles['order__successful']}>
          <p>Your order was submitted successfully</p>
          <p>Thanks for ordering with us 😉</p>
          <button type="button" className={styles['order__successful-close']}>
            &times;
          </button>
        </div>

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
                <p className={'order__detail'}>
                  <span className={styles['order__detail--title']}>
                    Ship To:{'  '}
                  </span>
                  <span className={styles['order__detail--text']}>Mark</span>
                </p>
              </div>
            </section>

            <section className={styles['order__lists']}>
              <ul className={'order__lists-content'}>
                <li className={'order__item order__item--head'}>
                  <span>Qty</span>
                  <span>Description</span>
                  <span>Unit Price</span>
                  <span>Amount</span>
                </li>

                <li className={'order__item'}>
                  <span>#1</span>
                  <span>Description</span>
                  <span>12.00</span>
                  <span>1</span>
                </li>
              </ul>
            </section>

            <section className={styles['order__taxes']}>
              <p>
                <span>Subtotal</span> <span>$12.00</span>
              </p>
              <p>
                <span>TAX 16%</span> <span>$1.00</span>
              </p>
            </section>
          </div>
        </div>
      </div>

      <section className={styles['order__total']}>
        <p>
          <span>TOTAL AMOUNT</span> <span>$13.00</span>
        </p>
      </section>

      <div className={styles['order__actions']}>
        <button className={styles['order__close']} type="button">
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
