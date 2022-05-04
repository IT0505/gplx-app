import styles from './Submenu.module.scss';
import { fadeInUp } from 'react-animations';
import Link from 'next/link';

import { StyleSheet, css } from 'aphrodite';

const classes = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: '0.5s',
  },
});

export default function Submenu({ submenu, className }) {
  return (
    <div className={`${styles.submenu} ${className} ${css(classes.fadeInUp)}`}>
      {submenu.map((item, index) => (
        <div className={styles.subItemWrap} key={index}>
          {item.url ? (
            <Link href={item.url}>
              <a className={styles.subItem}>{item.title}</a>
            </Link>
          ) : (
            <>
              <input
                className={styles.checkbox}
                type='checkbox'
                id={item.id}
                name={item.id}
              ></input>
              <label className={styles.icon} htmlFor={item.id}>
                <i className='fa-solid fa-angle-right'></i>
              </label>
              <p className={styles.subItem}>{item.title}</p>
              <Submenu submenu={item.submenu} className={styles.submenu} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
