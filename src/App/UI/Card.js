import styles from './Card.module.css';

const Card = function ({ children, className }) {
  return (
    <section className={`${styles.card} ${className}`}>{children}</section>
  );
};

export default Card;
