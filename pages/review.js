import QnASection from '../components/QnASection/QnASection';
import { useState, useEffect } from 'react';
import useToken from '../api/useToken';
import { APIGetListQuestions } from '../api/reviewApi';
import { useRouter } from 'next/router';
import { LayoutSimple } from '../components/Layout/Layout';
import { Loading } from '../components/Loading/Loading'

export default function Practice() {
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

  const [listQuestion, setListQuestion] = useState();
  useEffect(() => {
    APIGetListQuestions({ id: sessionStorage.getItem('token') }).then((res) => {
      console.log(res.data);
      setListQuestion(res.data);
    });
  }, []);

  const { token } = useToken();

  return !listQuestion ? (
    <Loading isReview={true}></Loading>
  ) : (
    <LayoutSimple>
      <QnASection
        status={{
          isReview: true,
        }}
        listQuestion={listQuestion}
      />
    </LayoutSimple>
  );
}
