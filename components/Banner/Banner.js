import styles from './Banner.module.scss';
import Parallax from '../Parallax/Parallax';
import { MDBanner } from '../../utils/dataConfig';
import { NormalButton } from '../Button/Button';

export default function Banner() {
  const { title, title1, title2, backgroundImage } = MDBanner;
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
            <NormalButton>Thi ngay</NormalButton>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
