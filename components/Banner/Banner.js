import styles from './Banner.module.scss';
import Parallax from '../Parallax/Parallax';
import { MDBanner } from '../../utils/dataConfig';
import { NormalButton } from '../Button/Button';
import Link from 'next/link';

export default function Banner() {
  const { title, title1, title2, backgroundImage, url } = MDBanner;
  return (
    <Parallax
      className={`${styles.banner} overlay`}
      backgroundImage={backgroundImage}
    >
      <div className='container'>
        <div className={styles.bannerInner}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.title}>{title1}</h3>
          </div>
          <div className={styles.rightContent}>
            <h3 className={styles.title}>{title2}</h3>
            <Link href={url}>
              <a>
                <NormalButton>Thi ngay</NormalButton>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
