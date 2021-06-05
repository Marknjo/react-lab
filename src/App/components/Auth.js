import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../Hooks/use-input';
import { authActions } from '../store/auth';

import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const [formHasErrors, setFormHasErrors] = useState(false);
  //Handle inputs
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailField,
    defaultOrErrorStyles: emailErrorStyles,
  } = useInput(
    value =>
      value.trim() !== '' &&
      value.trim().length > 8 &&
      value.trim().includes('@')
  );

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    valueChangeHandler: passwordChangeHandler,
    reset: resetPasswordField,
    defaultOrErrorStyles: passwordErrorStyles,
  } = useInput(value => value.trim() !== '' && value.trim().length > 5);

  //form validity
  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  //submit form: Authenticate dispatch
  const formSubmitHandler = event => {
    //1. prevent default
    event.preventDefault();
    //2. Check for form validations
    if (!formIsValid || emailHasError || passwordHasError) {
      setFormHasErrors(true);
      return;
    }
    //3. dispatch user validate: isAuthenticated to store
    console.log(emailValue);
    console.log(passwordValue);
    dispatch(authActions.login());
    //4. Reset form fields
    resetEmailField();
    resetPasswordField();
    setFormHasErrors(false);
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          {formHasErrors || emailHasError || passwordHasError ? (
            <div className={classes.control}>
              <p>Username or password invalid! Try Again</p>
            </div>
          ) : (
            ''
          )}

          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={emailValue}
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
              className={emailErrorStyles(`${classes['invalid']}`, null)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordValue}
              onBlur={passwordBlurHandler}
              onChange={passwordChangeHandler}
              className={passwordErrorStyles(`${classes['invalid']}`, null)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
