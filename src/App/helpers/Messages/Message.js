import Button from '../../UI/Button';
import Card from '../../UI/Card';
import styles from './Message.module.css';

const Message = function () {
  return (
    <Card className={`${styles.modal}`}>
      <h2 className={styles['modal__title']}>Invalid Input</h2>
      <p className={styles['modal__content']}>Message</p>
      <Button className={styles['modal__close-btn']}>Okay</Button>
    </Card>
  );
};

export default Message;
