import styles from './Button.module.scss';
import Link from 'next/link';
import useToken from '../../api/useToken';
import { useRouter } from 'next/router';

export const NormalButton = ({ children, type }) => {
  return (
    <button type={type} className={styles.normalButton}>
      {children}
    </button>
  );
};

export const UserButton = ({ login }) => {
  const router = useRouter();
  const { deleteToken } = useToken();
  return login ? (
    <a
      className={styles.userButton}
      onClick={() => {
        deleteToken();
        router.push('/');
      }}
    >
      Logout
    </a>
  ) : (
    <Link href='/login'>
      <a className={styles.userButton}>Login</a>
    </Link>
  );
};
