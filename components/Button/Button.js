import styles from './Button.module.scss';
import Link from 'next/link';

export const NormalButton = ({ children, type }) => {
  return (
    <button type={type} className={styles.normalButton}>
      {children}
    </button>
  );
};

export const UserButton = ({ login }) => {
  return login ? (
    <button className={styles.userButton}>Logout</button>
  ) : (
    <Link href='/login'>
      <a className={styles.userButton}>Login</a>
    </Link>
  );
};
