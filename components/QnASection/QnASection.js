import styles from './QnASection.module.scss';
import QuestionNav from './components/QuestionNav/QuestionNav';
import QuestionSection from './components/QuestionSection/QuestionSection';
import AnswerSection from './components/AnswerSection/AnswerSection';
import { useState } from 'react';
import { listQuestion } from '../../utils/dataConfig';

export default function QnASection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listTemp = []
  for(let i=0; i<listQuestion.length; i++) {
    listTemp.push(false)
  }

  const [listAnswered, setListAnswered] = useState(listTemp)


  const setAnswered = () => {
    let temp = [...listAnswered]
    temp[currentIndex] = true;
    setListAnswered(temp)
  }

  return (
    <div className={styles.examSection}>
      <div className='container v2'>
        <div className={styles.examSectionInner}>
          <div className={styles.qaWrap} onClick={() => {console.log(listAnswered)}}>
            <QuestionSection
              question={listQuestion[currentIndex].question}
              index={currentIndex + 1}
            />
            <AnswerSection 
              answer={listQuestion[currentIndex].ans}
              setAnswered = {setAnswered}
              listAnswered = {listAnswered[currentIndex]}
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
