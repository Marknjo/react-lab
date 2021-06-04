import { useRef, useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState();
  const nameInputRef = useRef();

  const namedInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    //1. Validation

    //2. Submission
    console.log(enteredName);

    const entredValue = nameInputRef.current.value;
    console.log(entredValue);

    //3. Clear input
    setEnteredName(''); //The ideal methods of clearing input
    //nameInputRef.current.value = ''; //Works too but we are manipulating state directly - imperative, instaed we need to delegate that function to react using the set** function;
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={namedInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
