import styles from './Layout.module.scss';
import Navigation from '../Navigation/Navigation';
// import Footer from '../Footer/Footer';

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export const LayoutLogin = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
