import Card from '../../UI/Card';
import Button from '../../UI/Button';
import styles from './AddUserInfoForm.module.css';
import FormInput from './FormInput';
import { useState } from 'react';

const AddUserInfoForm = function ({
  onHandleErrorMessages,
  usersInfo,
  onFetchSubmittedFormInfo,
}) {
  //data validation state

  //1. handle username & Age submission
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  //handle username submission
  const usernameInputHandler = value => {
    setUsername(value);
  };
  //handle age sumission
  const ageInputHandler = value => {
    setAge(value);
  };

  //2. Handle the whole form submission
  //handler form Submit
  const handleAddUserInfoHandler = event => {
    event.preventDefault();

    //3. Do data validation
    //4. Validate no imput submission
    //5. Validate a single input is not submitted
    if (!username || !age) {
      onHandleErrorMessages({
        valid: true,
        message:
          '💥 Please enter a valid name and age (fields must not be empty!) 😞',
      });
      return;
    }

    //6. Validate negative age submission
    if (!isFinite(age) || +age === 0 || +age < 1) {
      onHandleErrorMessages({
        valid: true,
        message:
          '💥 Please enter a valid age (Age must be a positive number i.e. 1, 9, or 20 .etc) 😞',
      });
      return;
    }

    //send data
    const data = {
      id: Math.random().toString().slice(2, 15),
      username,
      age,
    };

    //set invalid if the submitted user is the same as the one in the
    // @todo:  implement filtering multiple users
    /* usersInfo.forEach(user => {
      if (user.username === username) {
        return  onHandleErrorMessages(prevState => ({
          ...prevState,
          valid: true,
          message:
            "Can't have the same username in the list. Add a unique user!",
        }));
      }
    }); */

    onFetchSubmittedFormInfo(data);
  };

  //form input descriptions
  const inputUsernameDt = {
    name: 'username',
    id: 'username',
    label: 'Username',
    type: 'text',
  };
  const inputAgeDt = {
    name: 'age',
    id: 'age',
    label: 'Age (Years)',
    type: 'number',
  };

  return (
    <Card>
      <form
        className={styles['form-control']}
        onSubmit={handleAddUserInfoHandler}
      >
        <FormInput
          value={username}
          onGetInputValue={usernameInputHandler}
          inputDesc={inputUsernameDt}
        />
        <FormInput
          value={age}
          onGetInputValue={ageInputHandler}
          inputDesc={inputAgeDt}
        />

        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUserInfoForm;
