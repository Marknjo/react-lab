import Button from '../../UI/Button';
import Card from '../../UI/Card';
import styles from './Message.module.css';

const Message = function ({ isError, onCloseModal }) {
  //1. close modal by click okay button
  const handleClickHandler = closeModal => {
    onCloseModal(closeModal);
  };

  //2. close modal by clicking overlay
  //3. close modal by clicking esc button
  const handleEscapeKey = event => {
    if (event.key === 'Escape') {
      onCloseModal({
        valid: false,
        message: '',
      });
    }
    event.stopImmediatePropagation();
  };

  window.addEventListener('keydown', handleEscapeKey);
  //window.onKeyDown = handleEscapeKey;

  return (
    <Card className={`${styles.modal} ${isError.valid ? '' : styles.hide}`}>
      <h2 className={styles['modal__title']}>Invalid Input</h2>
      <div className={styles['modal__content']}>
        <p className={styles['modal__text']}>{isError.message}</p>
        <Button
          className={styles['modal__close-btn']}
          onHandleClick={handleClickHandler}
        >
          Okay
        </Button>
      </div>
    </Card>
  );
};

export default Message;
