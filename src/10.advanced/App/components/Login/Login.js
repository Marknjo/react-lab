import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

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
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      //console.log('Checking form validity');
      setFormIsValid(passwordIsValid && emailIsValid);
    }, 500);

    //clear timeout
    return () => {
      //console.log('Cleaning');
      clearTimeout(identifier);
    };
  }, [passwordIsValid, emailIsValid]);

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
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'USER_BLUR',
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'USER_PASS_BLUR' });
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.actions}>
          <Input
            ref={emailInputRef}
            type="email"
            id="email"
            label="E-Mail"
            isValid={emailState.isValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />

          <Input
            ref={passwordInputRef}
            type="password"
            id="password"
            label="Password"
            isValid={passwordState.isValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />

          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
