import styles from './UserButton.module.scss';
import Link from 'next/link';

const login = true;
export default function UserButton() {
  return login ? (
    <button className={styles.userButton}>Logout</button>
  ) : (
    <Link href='/login'>
      <a className={styles.userButton}>Login</a>
    </Link>
  );
}
