import styled from "styled-components";
import { dummyQuestions } from "../../dummy/dummyQuestions";
import QuestionListItem from "./QuestionListItem";
import { Link, useLocation } from "react-router-dom";

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
    props.filterSelected ? "#e3e6e8" : "transparent"};

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

export default function QuestionList() {
  const { search } = useLocation();
  const filter = new URLSearchParams(search).get("tab");

  return (
    <Wrapper>
      <ListHeader>
        <ListStatus>{dummyQuestions.length} questions</ListStatus>
        <ListFilter>
          <ListFilterItem
            to="/?tab=Newest"
            filterSelected={filter === "Newest"}
          >
            Newest
          </ListFilterItem>
          <ListFilterItem
            to="/?tab=Unanswered"
            filterSelected={filter === "Unanswered"}
          >
            Unanswered
          </ListFilterItem>
        </ListFilter>
      </ListHeader>
      {dummyQuestions.map((question) => (
        <QuestionListItem key={question.Question_id} item={question} />
      ))}
    </Wrapper>
  );
}
