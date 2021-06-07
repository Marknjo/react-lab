import Card from '../UI/Card/Card';
import ControlledInput from '../UI/Input/ControlledInput';
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
        <div styles={'checkout__login'}>
          <p>Returning customer?</p>
          <button type="button">Login Now!</button>

          <form>
            <ControlledInput
              label="Email Address/Username"
              input={{
                id: 'email-username',
                value: '',
                name: 'email-password',
                type: 'text',
              }}
            />

            <ControlledInput
              label="Account Password "
              input={{
                id: 'login-password',
                value: '',
                name: 'login-password',
                type: 'password',
              }}
            />

            <div className={styles['checkout__form-action']}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <form action="">
          <div className={styles['chekckout__form-inputs']}>
            <div className={styles['checkout__form-title']}>
              <h3>Billing Details</h3>
            </div>

            <div className={styles['checkout__form-group']}>
              <ControlledInput
                label="First Name "
                required={true}
                input={{
                  id: 'firstname',
                  value: '',
                  name: 'firstname',
                  type: 'text',
                }}
              />

              <ControlledInput
                label="Last Name"
                required={true}
                input={{
                  id: 'lastname',
                  value: '',
                  name: 'lastname',
                  type: 'text',
                }}
              />
            </div>

            <div className={styles['checkout__form-control']}>
              <ControlledInput
                label="Email Address"
                required={true}
                input={{
                  id: 'email',
                  value: '',
                  name: 'email',
                  type: 'email',
                }}
              />
            </div>

            <div className={styles['checkout__form-control']}>
              <p className={styles['checkout__info']}>
                <span>For New User Only: </span> Create and account by entering
                the information below. If you are a returning customer, please
                login at the top of the page.
              </p>
            </div>

            <div className={styles['checkout__form-control']}>
              <ControlledInput
                label="Account Password (Optional)"
                input={{
                  id: 'checkout-password',
                  value: '',
                  name: 'checkout-password',
                  type: 'password',
                }}
              />
            </div>
          </div>

          <div className={styles['checkout__order-details']}>
            <div className={styles['checkout__form-title']}>
              <h3>Your Order</h3>
            </div>

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

        <p className={styles['checkout__terms']}>Terms and conditions apply.</p>
      </Card>
    </section>
  );
};

export default CheckoutForm;
