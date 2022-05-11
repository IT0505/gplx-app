import ServiceItem from './components/ServiceItem/ServiceItem';
import styles from './Service.module.scss';
import { MDService } from '../../utils/dataConfig';

export default function Service() {
  const { mainContent } = MDService;
  return (
    <div className={styles.service}>
      <div className='container'>
        <div className={styles.serviceInner}>
          {mainContent.map((item, index) => (
            <ServiceItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
