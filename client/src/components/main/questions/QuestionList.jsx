import styled from "styled-components";
import QuestionListItem from "./QuestionListItem";
import { Link, useLocation } from "react-router-dom";

export default function QuestionList({ questions }) {
  const { search } = useLocation();
  const filter = new URLSearchParams(search).get("tab") || "Newest";
  const page = Number(new URLSearchParams(search).get("page")) || 1;

  return (
    <Wrapper>
      <ListHeader>
        <ListStatus>{questions.length} questions</ListStatus>
        <ListFilter>
          <ListFilterItem
            to="/?tab=Newest"
            $currentFilter={filter === "Newest"}
          >
            Newest
          </ListFilterItem>
          <ListFilterItem
            to="/?tab=Unanswered"
            $currentFilter={filter === "Unanswered"}
          >
            Unanswered
          </ListFilterItem>
        </ListFilter>
      </ListHeader>
      {questions.map((question) => (
        <QuestionListItem key={question.questionId} item={question} />
      ))}
      <Pagination>
        <PageButton to={`?tab=${filter}&page=${page <= 1 ? 1 : page - 1}`}>
          Prev
        </PageButton>
        {[1, 2, 3, 4, 5].map((num) => (
          <PageButton
            key={num}
            to={`?tab=${filter}&page=${num}`}
            $currentPage={num === page}
          >
            {num}
          </PageButton>
        ))}
        <PageButtonDiv>...</PageButtonDiv>
        <PageButton to={`?tab=${filter}&page=100`}>100</PageButton>
        <PageButton to={`?tab=${filter}&page=${page >= 100 ? 100 : page + 1}`}>
          Next
        </PageButton>
      </Pagination>
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

const ListFilter = styled.div`
  display: flex;
`;

const ListFilterItem = styled(Link)`
  font-size: 12px;
  padding: 9.6px;
  border: 1px solid #838c95;
  background-color: ${(props) =>
    props.$currentFilter ? "#e3e6e8" : "transparent"};

  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &:not(:first-child) {
    border-left: none;
  }
`;

const Pagination = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: center;
  gap: 5px;
`;

const PageButton = styled(Link)`
  width: fit-content;
  min-width: 26px;
  height: 26px;
  line-height: 26px;
  padding: 0 8px;
  background-color: ${(props) =>
    props.$currentPage ? "#f48224" : "transparent"};
  color: ${(props) => (props.$currentPage ? "#fff" : "inherit")};
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  font-size: 13px;
  display: flex;
  justify-content: center;
`;

const PageButtonDiv = styled(PageButton).attrs({ as: "div" })`
  border: none;
`;
