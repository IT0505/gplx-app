import styles from './Loading.module.scss';
export const Loading = ({ isReview }) => {
  return (
    <div className={styles.loading}>
      {isReview ? 
        <div className={styles.content}>You don't have any marked question yet!</div>
        : (
        <div className={styles.loadingInner}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      )}
    </div>
  );
};
