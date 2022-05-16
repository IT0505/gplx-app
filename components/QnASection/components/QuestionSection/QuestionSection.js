import styles from './QuestionSection.module.scss'

export default function QuestionSection({ question, index }) {
	return (
		<div className={styles.questionSection}>
			<div className={styles.title}>Câu hỏi {index}</div>
			<div className={styles.inner}>{question.content}</div>
			{question.image && (
				<figure className={styles.questionImage}>
					<img src={question.image} alt="question image" />
				</figure>
			)}
		</div>
	)
}