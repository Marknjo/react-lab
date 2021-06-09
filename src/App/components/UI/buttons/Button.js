import styles from './Button.module.css';

const Button = function ({
  children,
  className,
  onClick = null,
  type = 'button',
}) {
  const clickHandler = () => {
    onClick && onClick();
  };

  return (
    <button
      className={`${styles.btn} ${className}`}
      type={type}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
