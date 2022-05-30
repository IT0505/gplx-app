import styles from './Navigation.module.scss';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import Submenu from './components/Submenu/Submenu';
import Link from 'next/link';
import SocialIcon from './components/SocialIcon/SocialIcon';
import { UserButton } from '../Button/Button';
import { MDNavigation } from '../../utils/dataConfig';
import { LoginContext } from '../../pages/_app';

export default function Navigation() {
  const { login } = useContext(LoginContext);

  const { logoSrc, logoAlt, navigationList, socialIcons } = MDNavigation;

  const [navigationOpen, setNavigationOpen] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    window.addEventListener('load', (e) => {
      if (window.pageYOffset <= 200) {
        setTop(true);
      } else setTop(false);
    });
    window.addEventListener('scroll', () => {
      if (window.pageYOffset <= 200) {
        setTop(true);
      } else setTop(false);
    });
  }, [top]);

  return (
    <div className={`${styles.navigation} ${!top && styles.nonTop}`}>
      <div className='container'>
        <div className={styles.navigationInner}>
          <Link href='/'>
            <a className={styles.logo}>
              <Image src={logoSrc} alt={logoAlt} layout='responsive'></Image>
            </a>
          </Link>
          <div
            className={`${styles.navigationRight} ${
              navigationOpen && styles.open
            }`}
          >
            <button
              type='button'
              className={styles.closeButton}
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <i className='fa-solid fa-xmark'></i>
            </button>
            <Link href='/'>
              <a className={styles.logo1}>
                <Image src={logoSrc} alt={logoAlt} layout='responsive'></Image>
              </a>
            </Link>

            {navigationList.map((item, index) => (
              <div className={styles.menuItemWrap} key={index}>
                {item.url ? (
                  <Link href={item.url}>
                    <a className={styles.menuItem}>{item.title}</a>
                  </Link>
                ) : (
                  <>
                    <input
                      className={styles.checkbox}
                      type='checkbox'
                      id={item.title}
                      name={item.title}
                    ></input>
                    <label className={styles.icon} htmlFor={item.title}>
                      <i className='fa-solid fa-angle-right'></i>
                    </label>
                    <p className={styles.menuItem}>{item.title}</p>
                    <Submenu
                      submenu={item.submenu}
                      className={styles.submenu}
                    />
                  </>
                )}
              </div>
            ))}

            <div className={styles.socialIconWrap}>
              {socialIcons.map((item, index) => (
                <SocialIcon data={item} key={index} style={'style1'} />
              ))}
            </div>
            <UserButton login={login} />
          </div>
          <button
            type='button'
            className={styles.menuButton}
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>
      </div>
    </div>
  );
}
