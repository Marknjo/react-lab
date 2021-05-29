import styles from './Button.module.css';

const Button = function ({ children }) {
  return (
    <div className={styles['form-control__btn']}>
      <button type="submit">{children}</button>
    </div>
  );
};

export default Button;
