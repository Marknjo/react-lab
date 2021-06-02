import { useRef } from 'react';
import Input from '../../UI/Input/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = function ({ id }) {
  const mealAmounts = useRef();

  const submitItemHandler = event => {
    event.preventDefault();
    //1. grab the item from the refs
    console.log(mealAmounts.current.value);
    //2. sanitize the item
    //3. update the context
  };

  return (
    <form action="GET" className={styles.form} onSubmit={submitItemHandler}>
      <Input
        ref={mealAmounts}
        label="Amount"
        input={{
          id: id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
