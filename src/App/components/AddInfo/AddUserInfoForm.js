import Card from '../../UI/Card';
import styles from './AddUserInfoForm.module.css';

const AddUserInfoForm = function () {
  return (
    <Card>
      <form className={styles['form-control']}>
        <div className="form-control__group">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" id="username" />
        </div>
        <div className="form-control__group">
          <label htmlFor="age">Username</label>
          <input name="age" type="number" id="age" />
        </div>
      </form>
    </Card>
  );
};

export default AddUserInfoForm;
