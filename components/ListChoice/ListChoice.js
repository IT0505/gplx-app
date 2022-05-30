import styles from './ListChoice.module.scss';
import { MDGroup_quest } from '../../utils/dataConfig';
export const ListChoice = () => {
  return (
    <div className={styles.listChoice}>
      {MDGroup_quest.map((item, index) => (
        <div className={styles.choiceItem} key={index}>
          <h1>{index + 1}</h1>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};
