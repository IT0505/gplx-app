import styles from './Button.module.scss';
import Link from 'next/link';

export const NormalButton = ({ children }) => {
  return <button className={styles.normalButton}>{children}</button>;
};

export const UserButton = ({ login, type }) => {
  return login ? (
    <button type={type} className={styles.userButton}>
      Logout
    </button>
  ) : (
    <Link href='/login'>
      <a className={styles.userButton}>Login</a>
    </Link>
  );
};
