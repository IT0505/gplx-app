import styles from './ListChoice.module.scss';
import { MDGroup_quest } from '../../utils/dataConfig';
import { useRouter } from 'next/router';
export const ListChoice = () => {
  const router = useRouter();

  const handleChoice = (index) => {
    router.push({
      pathname: '/practice',
      query: { id: index },
    });
  };

  return (
    <div className={styles.listChoice}>
      {MDGroup_quest.map((item, index) => (
        <div
          className={styles.choiceItem}
          key={index}
          onClick={() => handleChoice(index + 1)}
        >
          <h1>{index + 1}</h1>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};
