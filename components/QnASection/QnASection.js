import styles from './QnASection.module.scss';
import QuestionNav from './components/QuestionNav/QuestionNav';
import QuestionSection from './components/QuestionSection/QuestionSection';
import AnswerSection from './components/AnswerSection/AnswerSection';
import { useState } from 'react';
// import { listQuestion } from '../../utils/dataConfig';

export default function QnASection({ status, listQuestion, templateId }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExamDone, setIsExamDone] = useState(false);

  const listTemp = [];
  for (let i = 0; i < listQuestion.length; i++) {
    listTemp.push({
      isAnswered: false,
      isCorrect: false,
      index: -1,
    });
  }

  const [listAnswered, setListAnswered] = useState(listTemp);
  const setAnswered = (isCorrect, index) => {
    let temp = [...listAnswered];
    temp[currentIndex] = {
      isAnswered: true,
      isCorrect: isCorrect,
      index: index,
    };
    setListAnswered(temp);
  };

  return (
    <div className={styles.examSection}>
      <div className='container v2'>
        <div className={styles.examSectionInner}>
          <div className={styles.qaWrap}>
            <QuestionSection
              question={listQuestion[currentIndex].question}
              index={currentIndex + 1}
              status={status}
              setIsExamDone={setIsExamDone}
              listAnswered={listAnswered}
              questionId={listQuestion[currentIndex].id}
              templateId={templateId}
            />
            <AnswerSection
              answer={listQuestion[currentIndex].answer}
              setAnswered={setAnswered}
              status={status}
              isExamDone={isExamDone}
              answered={listAnswered[currentIndex]}
            />
          </div>
          <QuestionNav
            setCurrentIndex={setCurrentIndex}
            length={listQuestion.length}
            status={status}
            isExamDone={isExamDone}
            currentIndex={currentIndex}
            listAnswered={listAnswered}
          />
        </div>
      </div>
    </div>
  );
}
