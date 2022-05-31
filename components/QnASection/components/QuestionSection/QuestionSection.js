import { useState, useEffect } from 'react';
import { APIGetListQuestions, APISaveReview } from '../../../../api/reviewApi';
import styles from './QuestionSection.module.scss';

export default function QuestionSection({
  question,
  index,
  status,
  listAnswered,
}) {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 25,
    seconds: 0,
  });

  const [result, setResult] = useState({
    examDone: false,
    score: 0,
    content: 'Your score is: ',
  });

  const calculateResult = () => {
    let score = 0;
    for (let i = 0; i < listAnswered.length; i++) {
      if (listAnswered[i].isAnswered) if (listAnswered[i].isCorrect) score++;
    }
    setResult({ ...result, score: score, examDone: true });
  };

  const calculateTimeLeft = (minutes, seconds) => {
    if (minutes != 0 || seconds != 0) {
      if (seconds != 0) seconds--;
      else {
        minutes--;
        seconds = 59;
      }
      setTimeLeft({ minutes: minutes, seconds: seconds });
    } else calculateResult();
  };

  const displayTimer = () => {
    return `00:${
      timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes
    }:${timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}`;
  };

  useEffect(() => {
    if (status.isExam) {
      const timer = setTimeout(() => {
        calculateTimeLeft(timeLeft.minutes, timeLeft.seconds);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleSaveReview = (index) => {
    APISaveReview({
      user_id: sessionStorage.getItem('token'),
      quest_id: index,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={styles.questionSection}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Câu hỏi {index}</h1>
        {status.isLogin && (
          <span
            className={styles.markButton}
            onClick={() => handleSaveReview(index)}
          >
            <i className='fi fi-sr-pennant'></i>
          </span>
        )}
        {result.examDone && (
          <span className={styles.result}>
            {result.content + result.score + '/' + listAnswered.length}
          </span>
        )}
        {status.isExam && (
          <span className={styles.timer}>{displayTimer()}</span>
        )}
      </div>
      <div className={styles.inner}>{question.content}</div>
      {question.image && (
        <figure className={styles.questionImage}>
          <img src={question.image} alt='question image' />
        </figure>
      )}
    </div>
  );
}
