import styled from "styled-components";

import Layout from "../../share/Layout";
import QuestionListItem from "../../components/question/QuestionListItem";
import { dummyQuestions } from "../../dummy/dummyQuestions";
import AskButton from "../../share/AskButton";

const Container = styled.div`
  padding: 16px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PageTitle = styled.h1`
  font-size: 27px;
`;

const QuestionList = styled.div``;

export default function Main() {
  return (
    <div>
      메인 페이지
      <Layout />
      <Container>
        <PageHeader>
          <PageTitle>All Questions</PageTitle>
          <AskButton />
        </PageHeader>
        <QuestionList>
          {dummyQuestions.map((question) => (
            <QuestionListItem key={question.Question_id} item={question} />
          ))}
        </QuestionList>
      </Container>
    </div>
  );
}
