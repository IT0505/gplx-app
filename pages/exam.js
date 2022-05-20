import QnASection from '../components/QnASection/QnASection';

export default function Exam() {

  const status = {
    isLogin: true,
    isExam: true
  }

  return <QnASection status={status}/>;
}
