import styles from './QnASection.module.scss'
import QuestionNav from './components/QuestionNav/QuestionNav'
import QuestionSection from './components/QuestionSection/QuestionSection'
import AnswerSection from './components/AnswerSection/AnswerSection'
import { useState, useEffect } from 'react'

export default function QnASection({ data }) {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
  })

  return (
    <>
      <div className={styles.examSection}>
        <div className="container v2">
          <div className={styles.examSectionInner}>
            <div className={styles.qaWrap}>
              <QuestionSection question={data[currentIndex].question} index={currentIndex + 1} />
              <AnswerSection answer={data[currentIndex].ans} />
            </div>
            <QuestionNav set={setCurrentIndex} length={data.length} />
          </div>
        </div>
      </div>
    </>
  )
}