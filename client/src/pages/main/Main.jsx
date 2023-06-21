import styled from "styled-components";
import AskButton from "../../share/AskButton";
import QuestionList from "../../components/main/questions/QuestionList";
import { dummyQuestions } from "../../dummy/dummyQuestions";

export default function Main() {
  return (
    <Container>
      <PageHeader>
        <PageTitle>All Questions</PageTitle>
        <AskButton />
      </PageHeader>
      <QuestionList questions={dummyQuestions} />
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
