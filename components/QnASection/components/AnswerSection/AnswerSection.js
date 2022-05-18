import styles from './AnswerSection.module.scss'
import { useState } from 'react';

export default function AnswerSection({ answer, setAnswered, listAnswered }) {

	const handleAnswerIndex = (index) => {
		switch (index) {
			case 0: return 'A';
			case 1: return 'B';
			case 2: return 'C';
			case 3: return 'D';
		}
	}

  const handleAnswerResult = (index) => {
    if(index == answer.true_ans){
      setAnswered()
      console.log('answer true')
    }
    else{
      setAnswered()
      console.log('answer false')
    }
  }

	return (
		<div className={styles.answerSection}>
			<div className={styles.title}>Chọn đáp án</div>
			<div className={styles.ansList}>
				{answer.list.map((data, index) => (
					<div key={index} className={styles.ansWrap} onClick={() => handleAnswerResult(index)}>
						<div className={styles.bubble}>{handleAnswerIndex(index)}</div>
						<div className={styles.answer}>{data}</div>
					</div>
				))}
			</div>
		</div>
	)
}