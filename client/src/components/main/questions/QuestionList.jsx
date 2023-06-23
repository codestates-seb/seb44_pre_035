import styled from "styled-components";
import QuestionListItem from "./QuestionListItem";
import { Link, useLocation } from "react-router-dom";
import { LIST_TYPE } from "../utils";

export default function QuestionList({
  listType,
  totalQuestionsInfo,
  questions,
  sort,
  page,
}) {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");

  const NUMBER_OF_PAGE_BUTTON = 5; // 설정 페이지 버튼 수
  const pageNumbers =
    // 총 페이지 수가 설정 페이지 버튼 수보다 작으면 총 페이지 수만큼만 생성
    totalQuestionsInfo.totalPages < NUMBER_OF_PAGE_BUTTON
      ? Array.from(
          {
            length:
              totalQuestionsInfo.totalPages < 1
                ? 1
                : totalQuestionsInfo.totalPages,
          },
          (value, index) => index + 1,
        )
      : // 현재 페이지 버튼이 가운데 오도록 생성
      page > Math.floor(NUMBER_OF_PAGE_BUTTON / 2) &&
        page <=
          totalQuestionsInfo.totalPages - Math.floor(NUMBER_OF_PAGE_BUTTON / 2)
      ? Array.from(
          { length: NUMBER_OF_PAGE_BUTTON },
          (value = page - Math.floor(NUMBER_OF_PAGE_BUTTON / 2), index) =>
            value + index,
        )
      : // 마지막 페이지 버튼이 나오면 버튼 목록 고정
      page >
        totalQuestionsInfo.totalPages - Math.floor(NUMBER_OF_PAGE_BUTTON / 2)
      ? Array.from(
          { length: NUMBER_OF_PAGE_BUTTON },
          (
            value = totalQuestionsInfo.totalPages - NUMBER_OF_PAGE_BUTTON,
            index,
          ) => value + index + 1,
        )
      : // 현재 페이지가 앞 페이지일 때 설정 페이지 버튼 수만큼 생성
        Array.from(
          { length: NUMBER_OF_PAGE_BUTTON },
          (value, index) => index + 1,
        );

  return (
    <Wrapper>
      <ListHeader>
        <ListStatus>{totalQuestionsInfo.totalElements} questions</ListStatus>
        <ListFilter>
          <ListFilterItem to="/?tab=DESC" $currentSort={sort === "DESC"}>
            Newest
          </ListFilterItem>
          <ListFilterItem to="/?tab=ASC" $currentSort={sort === "ASC"}>
            Oldest
          </ListFilterItem>
        </ListFilter>
      </ListHeader>
      {questions.map((question) => (
        <QuestionListItem key={question.questionId} item={question} />
      ))}
      <Pagination>
        <PageButton
          to={`?${
            listType === LIST_TYPE.SEARCH ? `keyword=${keyword}&` : ""
          }tab=${sort}&page=${page <= 1 ? 1 : page - 1}`}
        >
          Prev
        </PageButton>
        {pageNumbers.map((num) => (
          <PageButton
            key={num}
            to={`?${
              listType === LIST_TYPE.SEARCH ? `keyword=${keyword}&` : ""
            }tab=${sort}&page=${num}`}
            $currentPage={num === page}
          >
            {num}
          </PageButton>
        ))}
        {totalQuestionsInfo.totalPages > NUMBER_OF_PAGE_BUTTON && (
          <>
            <PageButtonDiv>...</PageButtonDiv>
            <PageButton
              to={`?${
                listType === LIST_TYPE.SEARCH ? `keyword=${keyword}&` : ""
              }tab=${sort}&page=${totalQuestionsInfo.totalPages}`}
            >
              {totalQuestionsInfo.totalPages}
            </PageButton>
          </>
        )}

        <PageButton
          to={`?${
            listType === LIST_TYPE.SEARCH ? `keyword=${keyword}&` : ""
          }tab=${sort}&page=${
            page >= totalQuestionsInfo.totalPages
              ? totalQuestionsInfo.totalPages
              : page + 1
          }`}
        >
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
    props.$currentSort ? "#e3e6e8" : "transparent"};

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
