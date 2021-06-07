import styles from './PageHeaderWrapper.module.css';

const PageHeaderWrapper = function ({ children }) {
  return <section className={styles.summary}>{children}</section>;
};

export default PageHeaderWrapper;
