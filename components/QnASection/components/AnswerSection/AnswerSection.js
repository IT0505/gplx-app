import styles from './AnswerSection.module.scss'

export default function AnswerSection({ answer }) {

	const handleAnswerIndex = (index) => {
		switch (index) {
			case 0: return 'A';
			case 1: return 'B';
			case 2: return 'C';
			case 3: return 'D';
		}
	}

	return (
		<div className={styles.answerSection}>
			<div className={styles.title}>Chọn đáp án</div>
			<div className={styles.ansList}>
				{answer.list.map((data, index) => (
					<div key={index} className={styles.ansWrap}>
						<div className={styles.bubble}>{handleAnswerIndex(index)}</div>
						<div className={styles.answer}>{data}</div>
					</div>
				))}
			</div>
		</div>
	)
}