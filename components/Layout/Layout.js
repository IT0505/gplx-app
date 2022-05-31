import styles from './Layout.module.scss';
import Navigation from '../Navigation/Navigation';
import Link from 'next/link';
import Image from 'next/image';
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

export const LayoutSimple = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Link href='/'>
        <a className={styles.logo}>
          <Image
            src='/img/Logo.png'
            alt='gplx'
            layout='fill'
            objectFit='contain'
          ></Image>
        </a>
      </Link>
      {children}
    </div>
  );
};
