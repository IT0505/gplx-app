import styles from './Button.module.scss';
import Link from 'next/link';
import useToken from '../../api/useToken';
import { useState, useEffect } from 'react';

export const NormalButton = ({ children, type }) => {
  return (
    <button type={type} className={styles.normalButton}>
      {children}
    </button>
  );
};

export const UserButton = () => {
  const { token, deleteToken } = useToken();
  const [session, setSession] = useState();

  useEffect(() => {
    setSession(token);
  }, []);

  return session ? (
    <Link href='/'>
      <a
        className={styles.userButton}
        onClick={() => {
          deleteToken();
        }}
      >
        Logout
      </a>
    </Link>
  ) : (
    <Link href='/login'>
      <a className={styles.userButton}>Login</a>
    </Link>
  );
};
