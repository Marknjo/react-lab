import Card from '../UI/Card/Card';
import PageHeaderWrapper from '../UI/PageHeader/PageHeaderWrapper';
import styles from './CheckoutForm.module.css';

//1. Show checkout form
//1.1. - Names -> First Name & Last Name
//2.2. Email Address - unique
//2.3. Account Password
//2.0. You Order

const CheckoutForm = function () {
  return (
    <section className={styles.checkout}>
      <PageHeaderWrapper className={styles['checkout__header']}>
        <h2>Checkout Page</h2>
      </PageHeaderWrapper>
      <Card className={styles['checkout__form']}>
        <form action="">
          <div className={styles['chekckout__form-inputs']}>
            <div className={styles['checkout__form-group']}>
              <div className={styles['checkout__form-control']}>
                <label htmlFor="firstname">First Name </label>
                <input type="text" id="firstname" value="" name="firstname" />
              </div>

              <div className={styles['checkout__form-control']}>
                <label htmlFor="lastname">Last Name </label>
                <input type="text" id="lastname" value="" name="lastname" />
              </div>
            </div>

            <div className={styles['checkout__form-control']}>
              <label htmlFor="email">Email Address </label>
              <input type="text" id="email" value="" name="email" />
            </div>
          </div>

          <div className={styles['checkout__order-details']}>
            <div className={styles['checkout__order-list']}>
              <ul className={styles['checkout__list']}>
                <li
                  className={`${styles['checkout__item']} ${styles['checkout__item--header']}`}
                >
                  <div>Product</div>
                  <div>Total</div>
                </li>

                <li className={styles['checkout__item']}>
                  <div className={styles['checkout__product-description']}>
                    <span> Pizza </span>
                    <span>
                      <small>x</small>1
                    </span>
                  </div>
                  <div>$22</div>
                </li>

                <li
                  className={`${styles['checkout__item']} ${styles['checkout__item--footer']}`}
                >
                  <p className={styles['checkout__summaries']}>
                    <span>Subtotal</span>
                    <span>$100</span>
                  </p>

                  <p className={styles['checkout__summaries']}>
                    <span>VAT 16%</span>
                    <span>$25</span>
                  </p>

                  <p className={styles['checkout__summaries']}>
                    <span>Total</span>
                    <span>$125</span>
                  </p>
                </li>
              </ul>
            </div>

            <div className={styles['checkout__form-action']}>
              <button type="submit">Place Order</button>
            </div>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default CheckoutForm;
