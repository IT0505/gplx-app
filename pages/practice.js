import QnASection from '../components/QnASection/QnASection';
import { useState, useEffect } from 'react';
import { APIGetListQuestions } from '../api/practiceApi';
import { useRouter } from 'next/router';
import { LayoutSimple } from '../components/Layout/Layout';

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
    <LayoutSimple>
      <QnASection
        status={{
          isLogin: true,
        }}
        listQuestion={listQuestion}
      />
    </LayoutSimple>
  );
}
