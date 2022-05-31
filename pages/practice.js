import QnASection from '../components/QnASection/QnASection';
import { useState, useEffect } from 'react';
import { APIGetListQuestions } from '../api/practiceApi';
import { useRouter } from 'next/router';
import { LayoutSimple } from '../components/Layout/Layout';

export default function Practice() {
  const { query, isReady } = useRouter();
  const [listQuestion, setListQuestion] = useState();

  useEffect(() => {
    if (isReady) {
      APIGetListQuestions(query).then((res) => {
        console.log(res.data);
        setListQuestion(res.data);
      });
    }
  }, [isReady]);

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
