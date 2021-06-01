import { DUMMY_MEALS } from '../../../data/dummy-meals';
import styles from './AvailableMeals.module.css';

const AvailableMeals = function () {
  const mealsList = DUMMY_MEALS.map(meal => <li key={meal.id}>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
