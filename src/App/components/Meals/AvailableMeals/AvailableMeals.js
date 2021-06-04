import { useCallback, useEffect, useState } from 'react';
import { FIREBASE_URL } from '../../../Configs/config';
import useHttp from '../../../hooks/use-http';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import styles from './AvailableMeals.module.css';

const AvailableMeals = function () {
  const { isLoading, error, sendRequest } = useHttp();

  const [mealsList, setMealsList] = useState([]);

  const fetchMealsFromFirebase = useCallback(() => {
    sendRequest(`${FIREBASE_URL}meals.json`, data => {
      const meals = Object.entries(data);

      const mealsList = meals.map(([id, meal]) => (
        <MealItem
          title={meal.name}
          key={id}
          description={meal.description}
          price={meal.price}
          id={id}
        />
      ));

      setMealsList(mealsList);
    });
  }, [sendRequest]);

  //get data from firebase
  useEffect(() => {
    fetchMealsFromFirebase();
  }, [fetchMealsFromFirebase]);

  //Handling content display
  let content = <p>Loading...</p>;

  if (error) {
    content = <p className="error-text"></p>;
  }

  if (!error && !isLoading) {
    content = <ul>{mealsList}</ul>;
  }

  return (
    <section className={styles.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
