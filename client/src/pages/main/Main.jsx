import styled from "styled-components";

import Layout from "../../share/Layout";
import AskButton from "../../share/AskButton";
import QuestionList from "../../components/question/QuestionList";

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
        <QuestionList />
      </Container>
    </div>
  );
}
