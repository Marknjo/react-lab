import { useEffect, useRef, useState } from 'react';

const SimpleInput = props => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEntredNameIsTouched] = useState(false);

  const namedInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEntredNameIsTouched(true);

    //1. Validation
    if (enteredName.trim() === '') {
      //stop code excution and show the error/feedback
      setEnteredNameIsValid(false);
      return;
    }

    //2. Submission
    console.log(enteredName);

    const entredValue = nameInputRef.current.value;
    console.log(entredValue);

    //3. Clear input
    setEnteredName(''); //The ideal methods of clearing input
    //nameInputRef.current.value = ''; //Works too but we are manipulating state directly - imperative, instaed we need to delegate that function to react using the set** function;

    //4. setTouched to false
    setEntredNameIsTouched(false);
    setEnteredNameIsValid(true);
  };

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Valid name.');
    }
  }, [enteredNameIsValid]);

  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const nameInputStyles = enteredNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={namedInputChangeHandler}
          value={enteredName}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Entered Name Must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
