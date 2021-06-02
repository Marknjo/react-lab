import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = function () {
  return <div className={styles.backdrop}>{/* Backdrop */}</div>;
};

const ModalOverlay = function ({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElements = document.getElementById('overlays');

const Modal = function ({ children }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElements)}

      {ReactDOM.createPortal(
        <ModalOverlay>{children} </ModalOverlay>,
        portalElements
      )}
    </>
  );
};

export default Modal;
