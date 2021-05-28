const ExpenseToggleForm = function ({ showFormStatus, onToggleForm }) {
  const showAddFormHandler = () => {
    onToggleForm(true);
  };

  const showHideFormHandler = () => {
    onToggleForm(false);
  };

  return (
    <>
      <div className={`new-expense__btn-add ${showFormStatus ? 'hidden' : ''}`}>
        <button onClick={showAddFormHandler}>Add New Expense</button>
      </div>

      <button
        onClick={showHideFormHandler}
        className={`new-expense__btn-hide ${showFormStatus ? '' : 'hidden'}`}
      >
        &times;
      </button>
    </>
  );
};

export default ExpenseToggleForm;
