import Button from '../../UI/Button';
import Card from '../../UI/Card';
import styles from './Message.module.css';

const Message = function () {
  return (
    <Card className={`${styles.modal} ${styles.hide}`}>
      <h2 className={styles['modal__title']}>Invalid Input</h2>
      <div className={styles['modal__content']}>
        <p className={styles['modal__text']}>Message</p>
        <Button className={styles['modal__close-btn']}>Okay</Button>
      </div>
    </Card>
  );
};

export default Message;
