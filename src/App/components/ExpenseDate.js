function ExpenseDate({ date }) {
  const month = date.toLocaleString(navigator.language, { month: 'long' });
  const day = date.toLocaleString(navigator.language, { month: '2-digit' });
  const year = date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
