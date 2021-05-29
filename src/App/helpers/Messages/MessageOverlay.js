import styles from './MessageOverlay.module.css';

const MessageOverlay = function ({ isError }) {
  return (
    <div
      className={`${styles.overlay} ${isError.valid ? '' : styles.hide}`}
    ></div>
  );
};

export default MessageOverlay;
