import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = function ({ closeModal }) {
  return (
    <div onClick={closeModal} className={styles.backdrop}>
      {/* Backdrop */}
    </div>
  );
};

const ModalOverlay = function ({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElements = document.getElementById('overlays');

const Modal = function ({ children, onCloseModal }) {
  const closeModalHandler = event => {
    if (event.key === 'Escape') {
      onCloseModal();
    }

    event.stopImmediatePropagation();
  };

  window.addEventListener('keydown', closeModalHandler);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={onCloseModal} />,
        portalElements
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>{children} </ModalOverlay>,
        portalElements
      )}
    </>
  );
};

export default Modal;
