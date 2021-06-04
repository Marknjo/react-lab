import useInput from '../hook/use-input';

const nameValidationLogic = value =>
  value.trim() !== '' && value.trim().length > 3;

const emailValidationLogic = value =>
  value.trim().includes('@') && value.trim().length > 8 && value.trim() !== '';

const BasicForm = props => {
  //Handle form inputs using the useInput logic
  //1. First Name inputs Logic
  const {
    value: enteredFirstNameValue,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    inputBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
    reset: resetFirstNameInput,
    defaultOrErrorStyles: firstNameFieldStyles,
  } = useInput(nameValidationLogic);

  //2. LastName input logic
  const {
    value: enteredLastNameValue,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    inputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: resetLastNameInput,
    defaultOrErrorStyles: lastNameFieldStyles,
  } = useInput(nameValidationLogic);

  //3. Email Address input logic
  const {
    value: enteredEmailValue,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailChangehandler,
    reset: resetEmailInput,
    defaultOrErrorStyles: emailFieldStyles,
  } = useInput(emailValidationLogic);

  //Form validity
  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  //Form submittion the logic
  const submitFormHandler = event => {
    //1.prevent form submission
    event.preventDefault();

    //Validations: FirstName, LastName & Email
    if (
      !formIsValid ||
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    }

    //3. Submit data after all validations have passed (For nor console log)
    console.log(enteredFirstNameValue);
    console.log(enteredLastNameValue);
    console.log(enteredEmailValue);

    //4. Reset form fields
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameFieldStyles()}>
          <label htmlFor="firstname">First Name</label>

          <input
            type="text"
            id="firstname"
            name="firstname"
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
            value={enteredFirstNameValue}
          />

          {firstNameInputHasError && (
            <p className="error-text">First name field is invalid.</p>
          )}
        </div>

        <div className={lastNameFieldStyles()}>
          <label htmlFor="lastname">Last name</label>

          <input
            type="text"
            name="lastname"
            id="lastname"
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
            value={enteredLastNameValue}
          />

          {lastNameInputHasError && (
            <p className="error-text">Last name field is invalid.</p>
          )}
        </div>
      </div>

      <div className={emailFieldStyles()}>
        <label htmlFor="emal">E-Mail Address</label>
        <input
          type="text"
          id="emal"
          name="email"
          onBlur={emailInputBlurHandler}
          onChange={emailChangehandler}
          value={enteredEmailValue}
        />

        {emailInputHasError && <p className="error-text">Invalid email!</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
