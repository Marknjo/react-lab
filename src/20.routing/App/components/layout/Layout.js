import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = function ({ children }) {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
