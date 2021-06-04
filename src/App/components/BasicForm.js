import useInput from '../hook/use-input';

const BasicForm = props => {
  //Handle form inputs using the useInput logic
  //1. First name inputs Logic
  const {
    value: enteredFirstnameValue,
    isValid: enteredFirstnameIsValid,
    hasError: firstnameInputHasError,
    inputBlurHandler: firstnameBlurHandler,
    valueChangeHandler: firstnameChangeHandler,
    reset: resetFirstnameInput,
    defaultOrErrorStyles: firstnameFieldStyles,
  } = useInput(value => value.trim() !== '' && value.trim().length > 3);

  //2. Lastname input logic
  const {
    value: enteredLastnameValue,
    isValid: enteredLastnameIsValid,
    hasError: lastnameInputHasError,
    inputBlurHandler: lastnameBlurHandler,
    valueChangeHandler: lastnameChangeHandler,
    reset: resetLastnameInput,
    defaultOrErrorStyles: lastnameFieldStyles,
  } = useInput(value => value.trim() !== '' && value.trim().length > 3);

  //3. Email Address input logic
  const {
    value: enteredEmailValue,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailChangehandler,
    reset: resetEmailInput,
    defaultOrErrorStyles: emailFieldStyles,
  } = useInput(
    value =>
      value.trim().includes('@') &&
      value.trim().length > 8 &&
      value.trim() !== ''
  );

  //Form validity
  let formIsValid = false;
  if (firstnameInputHasError && lastnameInputHasError && emailInputHasError) {
    formIsValid = true;
  }

  //Form submittion the logic
  const submitFormHandler = event => {
    //1.prevent form submission
    event.preventDefault();

    //2.1. Validate First name input
    //(Last name and first name have a similar way of validation)
    //2.2. Validate Last name input
    //2.3. validate email input
    if (
      !enteredFirstnameIsValid ||
      !enteredLastnameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    }

    //3. Submit data after all validations have passed (For nor console log)
    console.log(enteredFirstnameValue);
    console.log(enteredLastnameValue);
    console.log(enteredEmailValue);

    //4. Reset form fields
    resetFirstnameInput();
    resetLastnameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstnameFieldStyles()}>
          <label htmlFor="firstname">First Name</label>

          <input
            type="text"
            id="firstname"
            name="firstname"
            onBlur={firstnameBlurHandler}
            onChange={firstnameChangeHandler}
            value={enteredFirstnameValue}
          />

          {firstnameInputHasError && (
            <p className="error-text">First Name field is invalid.</p>
          )}
        </div>

        <div className={lastnameFieldStyles()}>
          <label htmlFor="lastname">Last Name</label>

          <input
            type="text"
            name="lastname"
            id="lastname"
            onBlur={lastnameBlurHandler}
            onChange={lastnameChangeHandler}
            value={enteredLastnameValue}
          />

          {lastnameInputHasError && (
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
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
