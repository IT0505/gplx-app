import styles from './QnASection.module.scss';
import QuestionNav from './components/QuestionNav/QuestionNav';
import QuestionSection from './components/QuestionSection/QuestionSection';
import AnswerSection from './components/AnswerSection/AnswerSection';
import { useState, useEffect } from 'react';
import { listQuestion as lst } from '../../utils/dataConfig';

import { APIGetListQuestions } from '../../api/examApi';

export default function QnASection({ status }) {
  const [listQuestion, setListQuestion] = useState();
  const listTemp = [];

  useEffect(() => {
    if (status.isExam) {
      APIGetListQuestions().then((res) => {
        console.log(res.data);
        setListQuestion(res.data);
        for (let i = 0; i < res.data.length; i++) {
          listTemp.push({
            isAnswered: false,
            isCorrect: false,
            index: -1,
          });
        }
        setListAnswered(listTemp);
      });
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [listAnswered, setListAnswered] = useState();

  const setAnswered = (isCorrect, index) => {
    let temp = [...listAnswered];
    temp[currentIndex] = {
      isAnswered: true,
      isCorrect: isCorrect,
      index: index,
    };
    setListAnswered(temp);
  };

  if (!listQuestion || !listAnswered) {
    return <div className='App'>Loading...</div>;
  }

  return (
    <div className={styles.examSection}>
      <div className='container v2'>
        <div className={styles.examSectionInner}>
          <div className={styles.qaWrap}>
            <QuestionSection
              question={listQuestion[currentIndex].question}
              index={currentIndex + 1}
              status={status}
              listAnswered={listAnswered}
            />
            <AnswerSection
              answer={listQuestion[currentIndex].answer}
              setAnswered={setAnswered}
              answered={listAnswered[currentIndex]}
            />
          </div>
          <QuestionNav
            setCurrentIndex={setCurrentIndex}
            length={listQuestion.length}
            currentIndex={currentIndex}
            listAnswered={listAnswered}
          />
        </div>
      </div>
    </div>
  );
}
