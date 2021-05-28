import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = function ({ filteredExpenses }) {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expense-list">
      {filteredExpenses.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
