import styles from './Button.module.css';

const Button = function ({ className, children, onHandleClick }) {
  const clickHandler = event => {
    if (onHandleClick) {
      onHandleClick({
        valid: false,
        message: '',
      });
    }

    event.stopPropagation();
  };

  return (
    <div className={`${styles['form-control__btn']} ${className}`}>
      <button onClick={clickHandler} type="submit">
        {children}
      </button>
    </div>
  );
};

export default Button;
