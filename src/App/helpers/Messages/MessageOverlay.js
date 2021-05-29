import styles from './MessageOverlay.module.css';

const MessageOverlay = function () {
  return <div className={`${styles.overlay} ${styles.hide}`}></div>;
};

export default MessageOverlay;
