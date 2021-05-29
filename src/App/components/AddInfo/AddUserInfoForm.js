import Card from '../../UI/Card';
import Button from '../../UI/Button';
import styles from './AddUserInfoForm.module.css';
import FormInput from './FormInput';

const AddUserInfoForm = function () {
  //form input descriptions
  const inputUsername = {
    name: 'username',
    id: 'username',
    label: 'Username',
    type: 'text',
  };
  const inputAge = {
    name: 'age',
    id: 'age',
    label: 'Age (Years)',
    type: 'number',
  };

  return (
    <Card>
      <form className={styles['form-control']}>
        <FormInput inputDesc={inputUsername} />
        <FormInput inputDesc={inputAge} />

        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUserInfoForm;
