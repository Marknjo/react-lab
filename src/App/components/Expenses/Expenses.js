import { useState } from 'react';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import './Expenses.css';

const Expenses = function ({ items }) {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    expense => expense.date.getFullYear() === +filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpenseList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
