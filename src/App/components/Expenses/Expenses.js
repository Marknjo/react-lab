import { useState } from 'react';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = function ({ item }) {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  console.log(filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={item[0].title}
          amount={item[0].amount}
          date={item[0].date}
        />

        <ExpenseItem
          title={item[1].title}
          amount={item[1].amount}
          date={item[1].date}
        />

        <ExpenseItem
          title={item[2].title}
          amount={item[2].amount}
          date={item[2].date}
        />

        <ExpenseItem
          title={item[3].title}
          amount={item[3].amount}
          date={item[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
