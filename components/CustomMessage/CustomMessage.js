import styles from './CustomMessage.module.scss';

export const RedErrorMessage = ({ children }) => {
  return (
    <div className={styles.errorMessage}>
      {children} <i className='fa-solid fa-triangle-exclamation'></i>
    </div>
  );
};
