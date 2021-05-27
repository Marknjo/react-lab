import './ExpenseDate.css';

function ExpenseDate({ date }) {
  const month = date.toLocaleString(navigator.language, { month: 'long' });
  const day = date.toLocaleString(navigator.language, { month: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
