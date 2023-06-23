import styled from "styled-components";
import AskButton from "../../share/AskButton";
import QuestionList from "../../components/main/questions/QuestionList";
import { useState, useEffect } from "react";
import { getQuestions } from "../../api/mainAPI";

import { useLocation } from "react-router-dom";


export default function Main() {
  const [questions, setQuestions] = useState([]);
  const [totalQuestionsInfo, setTotalQuestionsInfo] = useState({
    page: 1,
    size: 5,
    totalElements: 0,
    totalPages: 0,
  });
  const { search } = useLocation();
  const requestInfo = {
    page: Number(new URLSearchParams(search).get("page")) || 1,
    size: 2,
    criteria: "modifiedAt",
    sort: new URLSearchParams(search).get("tab") || "DESC",
  };

  useEffect(() => {
    getQuestions(requestInfo).then((res) => {
      console.log(res);
      setQuestions(res.data.data);
      setTotalQuestionsInfo(res.data.pageInfo);
    });
  }, [requestInfo.sort, requestInfo.page]);

  return (
    <Container>
      <PageHeader>
        <PageTitle>All Questions</PageTitle>
        <AskButton />
      </PageHeader>
      <QuestionList
        totalQuestionsInfo={totalQuestionsInfo}
        questions={questions}
        sort={requestInfo.sort}
        page={requestInfo.page}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 16px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const PageTitle = styled.h1`
  font-size: 27px;
`;
