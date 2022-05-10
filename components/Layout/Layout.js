import styles from './Layout.module.scss';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div>
        <Navigation />
        {children}
      </div>
      <Footer />
    </div>
  );
}
