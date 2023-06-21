import styled from "styled-components";
import AskButton from "../../share/AskButton";
import QuestionList from "../../components/main/questions/QuestionList";
import { useLocation } from "react-router-dom";
import { dummyQuestions } from "../../dummy/dummyQuestions";

export default function Search() {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");

  const searchResult = dummyQuestions.filter(
    (question) =>
      question.title.toLowerCase().includes(keyword) |
      question.content.toLowerCase().includes(keyword),
  );

  console.log(searchResult); // redux에 searchResult 저장하기
  // redux에서 searchResult 가져와서 렌더링

  return (
    <Container>
      <PageHeader>
        <PageTitle>Search Results</PageTitle>
        <AskButton />
      </PageHeader>
      <QuestionList questions={searchResult} />
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
