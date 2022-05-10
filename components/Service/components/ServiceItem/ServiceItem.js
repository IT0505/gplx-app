import styles from './ServiceItem.module.scss';

export default function ServiceItem({ data }) {
  const { title, description, faClass } = data;
  return (
    <div className={styles.serviceItem}>
      <div className={styles.iconWrap}>
        <i className={faClass}></i>
      </div>
      <div className={styles.textWrap}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
