import styles from './AnswerSection.module.scss';
import { useState } from 'react';

export default function AnswerSection({ answer, setAnswered, status, isExamDone, answered }) {
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
    if (status.isExam && !isExamDone) {
      if (index == answer.true_answer) {
        setAnswered(true, index);
      } else {
        setAnswered(false, index);
      }
    }
    else if (!answered.isAnswered) {
      if (index == answer.true_answer) {
        setAnswered(true, index);
      } else {
        setAnswered(false, index);
      }
    }
  };

  const handleAnswerVisual = (index) => {
    if (index == answered.index) { // check if current question is answered and answer index equal with answered index
      if (answered.isCorrect) { // check if answer correct or not
        return styles.true
      } else return styles.false
    }
    else return ''
  };

  const handleAnswerVisualExam = (index) => {
    if (index == answered.index) {
      if (isExamDone) {
        if (answered.isCorrect) { // check if answer correct or not
          return styles.true
        } else return styles.false
      }
      else return styles.choosen
    }
    return ''
  }

  const handleShowTrueAnswer = () => {
    if (answered.isAnswered)
      return !answered.isCorrect
  }

  const handleShowTrueAnswerExam = () => {
    if (isExamDone) {
      if (answered.isAnswered) {
        return !answered.isCorrect
      }
      else return true
    }
  }

  return (
    <div className={styles.answerSection}>
      <div className={styles.title}>Chọn đáp án</div>
      <div className={styles.ansList}>
        {answer.list.map((data, index) => (
          <div
            key={index}
            className={`${styles.ansWrap} ${status.isExam ? handleAnswerVisualExam(index) : handleAnswerVisual(index)}`}
            onClick={() => {handleAnswerResult(index)}}
          >
            <div className={styles.bubble}>{handleAnswerIndex(index)}</div>
            <div className={styles.answer}>{data}</div>
          </div>
        ))}
      </div>
      {(status.isExam ? handleShowTrueAnswerExam() : handleShowTrueAnswer()) && (
        <div className={styles.trueAns}>
          Câu trả lời đúng: {handleAnswerIndex(answer.true_answer)}
        </div>
      )}
    </div>
  );
}
