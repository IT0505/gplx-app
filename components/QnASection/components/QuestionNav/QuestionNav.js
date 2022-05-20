import { useState } from 'react';
import styles from './QuestionNav.module.scss';

export default function QuestionNav({ setCurrentIndex, length, currentIndex, listAnswered }) {

  const handleNavVisual = (index) => {
    let tempStr = ""
    if(listAnswered[index].isAnswered){
      if(listAnswered[index].isCorrect)
        tempStr += styles.true + " "
      else
        tempStr += styles.false + " "
    }
    
    if(index == currentIndex)
      tempStr += styles.active
    return tempStr
  }

  const items = [];
  for (let i = 0; i < length; i++) {
    items.push(
      <div
        key={i}
        className={`${styles.item} ${handleNavVisual(i)}`}
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
