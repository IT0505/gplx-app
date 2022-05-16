import { useState } from 'react';
import styles from './QuestionNav.module.scss';

export default function QuestionNav({ setCurrentIndex, length, currentIndex }) {
  const [preItemId, setPreItemId] = useState('item0');

  const items = [];
  for (let i = 0; i < length; i++) {
    items.push(
      <div
        id={'item' + i}
        key={i}
        className={
          i == currentIndex ? styles.item + ' ' + styles.active : styles.item
        }
        onClick={() => setCurrentIndex(i)}
      >
        {i + 1}
      </div>
    );
  }

  return (
    <div className={styles.questionNav}>
      <div className={styles.title}>Danh sách câu hỏi</div>
      <div className={styles.inner}>{items}</div>
    </div>
  );
}
