import styles from './Button.module.scss';
import Link from 'next/link';

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
