import styles from './Card.module.css';

const Card = function ({ children }) {
  return <section className={styles.card}>{children}</section>;
};

export default Card;
