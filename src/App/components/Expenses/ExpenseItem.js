import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = function ({ title, date, amount }) {
  const [stTitle, setStTitle] = useState(title);

  const clickHandler = () => {
    setStTitle('Updated!');
    console.log(stTitle);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{stTitle}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
