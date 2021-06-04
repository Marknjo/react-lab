import { useEffect, useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTouched, setEntredNameIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEntredNameIsTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEntredNameIsTouched(true);

    //1. Validation
    if (!enteredNameIsValid) {
      //stop code excution and show the error/feedback
      return;
    }

    //2. Submission
    console.log(enteredName);

    //3. Clear input
    setEnteredName(''); //The ideal methods of clearing input

    //4. setTouched to false
    setEntredNameIsTouched(false);
  };

  const nameInputStyles = enteredNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Entered Name Must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
