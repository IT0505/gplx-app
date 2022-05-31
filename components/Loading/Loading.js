import styles from './Loading.module.scss';
export const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingInner}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};
