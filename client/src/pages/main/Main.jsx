import styled from "styled-components";
import AskButton from "../../share/AskButton";
import QuestionList from "../../components/main/questions/QuestionList";
import { useState, useEffect } from "react";
import { getQuestions } from "../../api/mainAPI";
export default function Main() {
  const [questions, setQuestions] = useState([]);
  // const requestInfo = { page: 1, size: 15, criteria: "", sort: "" };

  useEffect(() => {
    getQuestions().then((res) => setQuestions(res.data.data));
  }, []);

  return (
    <Container>
      <PageHeader>
        <PageTitle>All Questions</PageTitle>
        <AskButton />
      </PageHeader>
      <QuestionList questions={questions} />
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
