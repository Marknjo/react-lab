import Card from '../../UI/Card';
import styles from './AddUserInfoForm.module.css';

const AddUserInfoForm = function () {
  return (
    <Card>
      <form className={styles['form-control']}>
        <div className={styles['form-control__group']}>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" id="username" />
        </div>
        <div className={styles['form-control__group']}>
          <label htmlFor="age">Age (Years)</label>
          <input name="age" type="number" id="age" />
        </div>
      </form>
    </Card>
  );
};

export default AddUserInfoForm;
