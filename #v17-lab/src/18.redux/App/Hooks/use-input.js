import { useState } from 'react';

const useInput = function (validateValue) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = event => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  /**
   * Error CSS Styles name
   * @param {String | null} [defaultInputStyleName?] Default css style name i.e. form-control
   * @param {String} [invalidInputStyleName?] Invalid css style name i.e. invalid
   * @returns String
   */
  const defaultOrErrorStyles = (
    defaultInputStyleName = 'form-control',
    invalidInputStyleName = 'invalid'
  ) => {
    return hasError
      ? invalidInputStyleName
        ? `${defaultInputStyleName} ${invalidInputStyleName}`
        : defaultInputStyleName
      : invalidInputStyleName
      ? defaultInputStyleName
      : '';
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    defaultOrErrorStyles,
  };
};

export default useInput;
