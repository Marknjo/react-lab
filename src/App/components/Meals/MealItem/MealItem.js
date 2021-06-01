import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = function ({ title, description, price }) {
  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <li className={styles.meal}>
      <div>
        <h3>{title}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
