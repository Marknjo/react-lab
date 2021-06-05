import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import OrderItem from './OrderItem';
import styles from './OrderList.module.css';

const OrderList = function () {
  const cartCtx = useContext(CartContext);

  const orderList = cartCtx.items.map((item, index) => {
    return (
      <OrderItem
        className={styles['order__item']}
        key={item.id}
        qty={`#${index + 1}`}
        description={item.title}
        price={item.price}
        amount={item.amount}
      />
    );
  });

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

        {orderList}
      </ul>
    </section>
  );
};

export default OrderList;
