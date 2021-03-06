import { useState } from 'react';
import ExpenseToggleForm from '../Expenses/ExpensesToggleForm';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = function ({ onAddExpenseToUI }) {
  const [showFormStatus, setShowFormStatus] = useState(false);

  const fetchExpenseHandler = expense => {
    const expenseData = {
      ...expense,
      id: `e${Math.random().toString().slice(2, 15)}`,
    };

    onAddExpenseToUI(expenseData);
  };

  const toggleFormHandler = toggleForm => {
    setShowFormStatus(toggleForm);
  };

  return (
    <div className="new-expense">
      <ExpenseToggleForm
        showFormStatus={showFormStatus}
        onToggleForm={toggleFormHandler}
      />

      <ExpenseForm
        displayStatus={showFormStatus}
        onFetchExpense={fetchExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
