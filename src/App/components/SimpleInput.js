import useInput from '../hook/use-input';

const SimpleInput = props => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
    defaultOrErrorStyles: nameInputStyles,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
    defaultOrErrorStyles: emailInputStyles,
  } = useInput(value => value.trim().includes('@') && value.trim() !== '');

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    //1.1 UserName Validation
    if (!enteredNameIsValid) {
      //stop code excution and show the error/feedback
      return;
    }

    //1.2 Email Validation
    if (!enteredEmailIsValid) {
      return;
    }

    //2. Submission
    console.log(enteredName);
    console.log(enteredEmail);

    //3. Clear inputs
    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputStyles()}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Entered Name Must not be empty</p>
        )}
      </div>

      <div className={emailInputStyles()}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Entered email must be a valid.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
