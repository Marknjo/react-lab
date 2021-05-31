import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (lastState, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return {
        value: action.val,
        isValid: action.val.includes('@'),
      };

    case 'USER_BLUR':
      return {
        value: lastState.value,
        isValid: lastState.value.includes('@'),
      };

    default:
      return { value: '', isValid: false };
  }
};

const passwordReducer = (lastState, action) => {
  switch (action.type) {
    case 'USER_PASS':
      return {
        value: action.val,
        isValid: action.val.trim().length > 6,
      };

    case 'USER_PASS_BLUR':
      return {
        value: lastState.value,
        isValid: lastState.value.trim().length > 6,
      };

    default:
      return {
        value: '',
        isValid: false,
      };
  }
};

const Login = props => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  /* const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(); */
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  /* useEffect(() => {
    const identifier = setTimeout(() => {
      //console.log('Checking form validity');
      setFormIsValid(
        enteredPassword.trim().length > 6 && enteredEmail.includes('@')
      );
    }, 500);

    //clear timeout
    return () => {
      //console.log('Cleaning');
      clearTimeout(identifier);
    };
  }, [enteredPassword, enteredEmail]); */

  const emailChangeHandler = event => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const passwordChangeHandler = event => {
    dispatchPassword({
      type: 'USER_PASS',
      val: event.target.value,
    });
    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'USER_BLUR',
    });
    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'USER_PASS_BLUR' });
  };

  const submitHandler = event => {
    event.preventDefault();

    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
