import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = function ({ title, description, price, id }) {
  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const cartCtx = useContext(CartContext);

  const handleAddItemToCart = cartItems => {
    cartCtx.addItem({
      customerId: Math.random().toString().slice(2, 20),
      id,
      title,
      description,
      price,
      amount: cartItems,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{title}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddItemToCart={handleAddItemToCart} />
      </div>
    </li>
  );
};

export default MealItem;
