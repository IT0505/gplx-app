import styles from './Banner.module.scss';
import Parallax from '../Parallax/Parallax';
import { MDBanner } from '../../utils/dataConfig';
import Button from '../Button/Button';

export default function Banner() {
  const { title, title1, title2 } = MDBanner;
  return (
    <Parallax
      className={styles.banner}
      backgroundImage='/img/408464bde9871fc229045a3dab96794a.jpg'
    >
      <div className='container'>
        <div className={styles.bannerInner}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.title}>{title1}</h3>
          </div>
          <div className={styles.rightContent}>
            <h3 className={styles.title}>{title2}</h3>
            <Button>Thi ngay</Button>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
