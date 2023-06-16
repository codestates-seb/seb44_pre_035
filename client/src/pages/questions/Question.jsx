import styled from "styled-components";

import AskButton from "../../share/AskButton";
import { useParams } from "react-router-dom";
import { dummyQuestions } from "../../dummy/dummyQuestions";
import QuestionStatus from "../../components/question/QuestionStatus";

const Container = styled.div`
  padding: 24px 16px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #e3e6e8;
`;

const PageTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 27px;
  margin-bottom: 8px;
`;

export default function Question() {
  const { id: questionId } = useParams("id");
  const question = dummyQuestions.find(
    (item) => item.Question_id === Number(questionId),
  );

  return (
    <Container>
      <PageHeader>
        <PageTitleBox>
          <PageTitle>{question.title}</PageTitle>
          <QuestionStatus question={question} />
        </PageTitleBox>
        <AskButton />
      </PageHeader>
    </Container>
  );
}
