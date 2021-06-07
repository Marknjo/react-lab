import styles from './PageHeaderWrapper.module.css';

const PageHeaderWrapper = function ({ children, className }) {
  return (
    <section className={`${styles.summary} ${className}`}>{children}</section>
  );
};

export default PageHeaderWrapper;
