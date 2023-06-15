import styled from "styled-components";

import Layout from "../../share/Layout";
import QuestionListItem from "../../components/question/QuestionListItem";
import { dummyQuestions } from "../../dummy/dummyQuestions";

const Container = styled.div``;

const QuestionList = styled.div``;

export default function Main() {
  return (
    <div>
      메인 페이지
      <Layout />
      <Container>
        <QuestionList>
          {dummyQuestions.map((question) => (
            <QuestionListItem key={question.Question_id} item={question} />
          ))}
        </QuestionList>
      </Container>
    </div>
  );
}
