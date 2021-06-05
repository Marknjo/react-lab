import OrderItem from './OrderItem';
import styles from './OrderList.module.css';

const OrderList = function () {
  return (
    <section className={styles['order__lists']}>
      <ul className={styles['order__lists-content']}>
        <li
          className={`${styles['order__item']} ${styles['order__item--head']}`}
        >
          <span>Qty</span>
          <span>Description</span>
          <span>Unit Price</span>
          <span>Amount</span>
        </li>

        <OrderItem className={styles['order__item']} />
      </ul>
    </section>
  );
};

export default OrderList;
