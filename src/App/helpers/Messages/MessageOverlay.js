import styles from './MessageOverlay.module.css';

const MessageOverlay = function ({ isError, onCloseModal }) {
  const clickHandler = event => {
    onCloseModal({
      valid: false,
      message: '',
    });

    event.stopPropagation();
  };

  return (
    <div
      className={`${styles.overlay} ${isError.valid ? '' : styles.hide}`}
      onClick={clickHandler}
    ></div>
  );
};

export default MessageOverlay;
