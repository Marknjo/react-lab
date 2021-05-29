import styles from './Button.module.css';

const Button = function ({ className, children }) {
  return (
    <div className={`${styles['form-control__btn']} ${className}`}>
      <button type="submit">{children}</button>
    </div>
  );
};

export default Button;
