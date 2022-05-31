import QnASection from '../components/QnASection/QnASection';
import React from 'react';
import { APIGetListQuestions } from '../api/examApi';
import { useState, useEffect } from 'react';
import { Loading } from '../components/Loading/Loading';
import { LayoutSimple } from '../components/Layout/Layout'

export default function Exam() {
  const [listQuestion, setListQuestion] = useState();

  useEffect(() => {
    APIGetListQuestions().then((res) => {
      setListQuestion(res.data);
    });
  }, []);

  return !listQuestion ? (
    <div>Loading...</div>
  ) : (
    <LayoutSimple>
      <QnASection
        status={{
          isExam: true,
        }}
        listQuestion={listQuestion}
      />
    </LayoutSimple>
  );
}
