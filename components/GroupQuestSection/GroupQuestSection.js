import { ListChoice } from '../ListChoice/ListChoice';
import styles from './GroupQuestSection.module.scss';

export const GroupQuestSection = () => {
  return (
    <div className={styles.groupQuestSection}>
      <div className='container'>
        <div className={styles.groupQuestSectionInner}>
          <ListChoice></ListChoice>
        </div>
      </div>
    </div>
  );
};
