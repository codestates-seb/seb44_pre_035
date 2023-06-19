import styled from "styled-components";

import AskButton from "../../share/AskButton";
import { useParams } from "react-router-dom";
import { dummyQuestions } from "../../dummy/dummyQuestions";
import { dummyAnswers } from "../../dummy/dummyAnswers";
import Writer from "../../share/Writer";
import PostContainer from "../../components/main/question/PostContainer";
import QuestionStatus from "../../components/main/question/QuestionStatus";
import PostButton from "../../components/main/question/PostButton";

export default function Question() {
  const { id: questionId } = useParams("id");
  const question = dummyQuestions.find(
    (item) => item.Question_id === Number(questionId),
  );
  const answers = dummyAnswers.filter(
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
      <PageContent>
        <PostContainer post={question} />
      </PageContent>
      <AnswerHeader>
        <AnswerStatus>{answers.length} Answers</AnswerStatus>
      </AnswerHeader>
      <AnswerContent>
        {answers.map((answer) => (
          <PostContainer key={answer.Answer_id} post={answer} />
        ))}
      </AnswerContent>
      <AnswerWriter>
        <AnswerHeader>
          <AnswerStatus>Your Answer</AnswerStatus>
        </AnswerHeader>
        <Writer />
        <PostButton />
      </AnswerWriter>
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
  padding-bottom: 24px;
  border-bottom: 1px solid #e3e6e8;
  margin-bottom: 24px;
`;

const PageTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 27px;
  margin-bottom: 8px;
`;

const PageContent = styled.div``;

const AnswerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const AnswerStatus = styled.div`
  font-size: 19px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const AnswerContent = styled.div``;

const AnswerWriter = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    margin-top: 24px;
  }
`;