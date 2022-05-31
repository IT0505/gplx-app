import { useState } from 'react';
import styles from './QuestionNav.module.scss';

export default function QuestionNav({ setCurrentIndex, length, status, isExamDone, currentIndex, listAnswered }) {

  const handleNavVisual = (index) => {
    let tempStr = ""

    if (status.isExam) {
      if (listAnswered[index].isAnswered) {
        if (isExamDone) {
          if (listAnswered[index].isCorrect)
            tempStr += styles.true + " "
          else
            tempStr += styles.false + " "
        }
        else tempStr += styles.choosen + " "
      }
    }
    else {
      if (listAnswered[index].isAnswered) {
        if (listAnswered[index].isCorrect)
          tempStr += styles.true + " "
        else
          tempStr += styles.false + " "
      }
    }

    // if(listAnswered[index].isAnswered){
    //   if(status.isExam)
    //     tempStr += styles.choosen + " "
    //   else if(status.isExamDone)
    //     tempStr += styles.false + " "
    //   else if(listAnswered[index].isCorrect)
    //     tempStr += styles.true + " "
    //   else
    //     tempStr += styles.false + " "
    // }

    if (index == currentIndex)
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
