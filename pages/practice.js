import QnASection from '../components/QnASection/QnASection';
import { useState, useEffect } from 'react';
import { APIGetListQuestions } from '../api/practiceApi';
import { useRouter } from 'next/router';

export default function Practice() {
  const { query } = useRouter();
  const [listQuestion, setListQuestion] = useState();
  useEffect(() => {
    APIGetListQuestions(query).then((res) => {
      console.log(res.data);
      setListQuestion(res.data);
    });
  }, []);

  return !listQuestion ? (
    <div>Loading...</div>
  ) : (
    <QnASection
      status={{
        isLogin: true,
      }}
      listQuestion={listQuestion}
    />
  );
}
