import styles from './AnswerSection.module.scss';
import { useState } from 'react';

export default function AnswerSection({ answer, setAnswered, answered }) {
  const handleAnswerIndex = (index) => {
    switch (index) {
      case 0:
        return 'A';
      case 1:
        return 'B';
      case 2:
        return 'C';
      case 3:
        return 'D';
    }
  };

  const handleAnswerResult = (index) => {
    if (index == answer.true_answer) {
      setAnswered(true, index);
      console.log('answer true');
    } else {
      setAnswered(false, index);

      console.log('answer false');
    }
  };

  const handleAnswerVisual = (index) => {
    if (index == answered.index) {
      // check if current question is answered
      if (answered.isCorrect) {
        // check if answer correct or not
        return styles.true;
      } else return styles.false;
    } else return '';
  };

  return (
    <div className={styles.answerSection}>
      <div className={styles.title}>Chọn đáp án</div>
      <div className={styles.ansList}>
        {answer.list.map((data, index) => (
          <div
            key={index}
            className={`${styles.ansWrap} ${handleAnswerVisual(index)}`}
            onClick={() => {
              if (!answered.isAnswered) handleAnswerResult(index);
            }}
          >
            <div className={styles.bubble}>{handleAnswerIndex(index)}</div>
            <div className={styles.answer}>{data}</div>
          </div>
        ))}
      </div>
      {!answered.isCorrect && answered.isAnswered && (
        <div className={styles.trueAns}>
          Câu trả lời đúng: {handleAnswerIndex(answer.true_answer)}
        </div>
      )}
    </div>
  );
}
