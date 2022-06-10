import QnASection from '../components/QnASection/QnASection';
import React from 'react';
import { APIGetListQuestions } from '../api/examApi';
import { useState, useEffect } from 'react';
import { Loading } from '../components/Loading/Loading';
import { LayoutSimple } from '../components/Layout/Layout'

export default function Exam() {
  const [examTemplate, setExamTemplate] = useState();

  useEffect(() => {
    APIGetListQuestions().then((res) => {
      setExamTemplate(res.data);
    });
  }, []);

  return !examTemplate ? (
    <Loading isReview={false}></Loading>
  ) : (
    <LayoutSimple>
      <QnASection
        status={{
          isExam: true,
        }}
        listQuestion={examTemplate.list_question}
        templateId={examTemplate.exam_template_id}
      />
    </LayoutSimple>
  );
}
