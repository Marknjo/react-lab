import { useRef, useState } from 'react';

import Input from '../../UI/Input/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = function ({ id, onAddItemToCart }) {
  const mealAmounts = useRef();
  const [isAmountInvalid, setIsAmountInvalid] = useState(false);

  const submitItemHandler = event => {
    event.preventDefault();
    //1. grab the item from the refs
    const inputItemsAmount = +mealAmounts.current.value;
    //2. sanitize the item
    if (
      !inputItemsAmount ||
      inputItemsAmount > 5 ||
      typeof inputItemsAmount !== 'number' ||
      inputItemsAmount === 0
    ) {
      setIsAmountInvalid(true);
      return;
    }
    //3. add to cart

    onAddItemToCart(inputItemsAmount);

    //4. Reset the amount count
    mealAmounts.current.value = '1';
  };

  return (
    <form className={styles.form} onSubmit={submitItemHandler}>
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
      {isAmountInvalid && <p>Add a valid item amount.</p>}
    </form>
  );
};

export default MealItemForm;
