import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = function ({ onAddExpenseToUI }) {
  const fetchExpenseHandler = expense => {
    const expenseData = {
      ...expense,
      id: Math.random().toString().slice(2, 15),
    };

    onAddExpenseToUI(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onFetchExpense={fetchExpenseHandler} />
    </div>
  );
};

export default NewExpense;
