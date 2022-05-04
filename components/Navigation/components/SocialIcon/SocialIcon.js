import styles from './SocialIcon.module.scss';
import Link from 'next/link';
export default function SocialIcon({ data, style }) {
  const { url, icon } = data;
  return (
    <Link href={url}>
      <a className={`${styles.socialIcon} ${styles[style]}`}>
        <i className={icon}></i>
      </a>
    </Link>
  );
}
