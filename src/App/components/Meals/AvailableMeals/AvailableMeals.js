import { DUMMY_MEALS } from '../../../data/dummy-meals';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import styles from './AvailableMeals.module.css';

const AvailableMeals = function () {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      title={meal.name}
      key={meal.key}
      description={meal.name}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
