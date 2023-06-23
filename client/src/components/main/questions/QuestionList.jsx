import styled from "styled-components";
import QuestionListItem from "./QuestionListItem";
import ListPagination from "./ListPagination";
import ListFilter from "./ListFilter";
import { useLocation } from "react-router-dom";

export default function QuestionList({
  listType,
  totalQuestionsInfo,
  questions,
  sort,
  page,
}) {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");

  return (
    <Wrapper>
      <ListHeader>
        <ListStatus>{totalQuestionsInfo.totalElements} questions</ListStatus>
        <ListFilter listType={listType} sort={sort} keyword={keyword} />
      </ListHeader>
      {questions.map((question) => (
        <QuestionListItem key={question.questionId} item={question} />
      ))}
      <ListPagination
        listType={listType}
        totalQuestionsInfo={totalQuestionsInfo}
        sort={sort}
        page={page}
        keyword={keyword}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #e3e6e8;
`;

const ListStatus = styled.div`
  font-size: 17px;
  display: flex;
  align-items: center;
`;
