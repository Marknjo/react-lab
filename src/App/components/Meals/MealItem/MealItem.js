import styles from './MealItem.module.css';

const MealItem = function ({ title, description, price }) {
  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <li className={styles.meal}>
      <div className={styles.description}>
        <h3>{title}</h3>
        <div>{description}</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>
        <form action="POST"></form>
      </div>
    </li>
  );
};

export default MealItem;
