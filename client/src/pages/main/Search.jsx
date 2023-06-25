import styled from "styled-components";
import AskButton from "../../share/AskButton";
import QuestionList from "../../components/main/questions/QuestionList";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchQuestion, searchQuestionsAnswered } from "../../api/mainAPI";
import { LIST_TYPE, SORT_TYPE, TAB_TYPE } from "../../components/main/utils";

export default function Search() {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");
  const tab = new URLSearchParams(search).get("tab") || TAB_TYPE.ALL;
  const sort = new URLSearchParams(search).get("sort") || SORT_TYPE.NEWEST;
  const [searchResult, setSearchResult] = useState([]);
  const [totalSearchResultInfo, setTotalSearchResultInfo] = useState({
    page: 1,
    size: 5,
    totalElements: 0,
    totalPages: 0,
  });

  const requestInfo = {
    page: Number(new URLSearchParams(search).get("page")) || 1,
    size: 2,
    criteria: [SORT_TYPE.NEWEST, SORT_TYPE.OLDEST].includes(sort)
      ? "modifiedAt"
      : [SORT_TYPE.HIGHVIEWS, SORT_TYPE.LOWVIEWS].includes(sort)
      ? "views"
      : "modifiedAt",
    sort: [SORT_TYPE.NEWEST, SORT_TYPE.HIGHVIEWS].includes(sort)
      ? "DESC"
      : [SORT_TYPE.OLDEST, SORT_TYPE.LOWVIEWS].includes(sort)
      ? "ASC"
      : "DESC",
  };

  useEffect(() => {
    switch (tab) {
      case TAB_TYPE.ALL:
        searchQuestion(keyword, requestInfo).then((res) => {
          setSearchResult(res.data.data);
          setTotalSearchResultInfo(res.data.pageInfo);
        });
        break;
      case TAB_TYPE.ANSWERED:
        searchQuestionsAnswered(keyword, requestInfo, "Y").then((res) => {
          setSearchResult(res.data.data);
          setTotalSearchResultInfo(res.data.pageInfo);
        });
        break;
      case TAB_TYPE.UNANSWERED:
        searchQuestionsAnswered(keyword, requestInfo, "N").then((res) => {
          setSearchResult(res.data.data);
          setTotalSearchResultInfo(res.data.pageInfo);
        });
        break;
    }
  }, [tab, keyword, requestInfo.sort, requestInfo.page]);

  // redux에 searchResult 저장하기
  // redux에서 searchResult 가져와서 렌더링

  return (
    <Container>
      <PageHeader>
        <PageTitle>Search Results</PageTitle>
        <AskButton />
      </PageHeader>
      <QuestionList
        listType={LIST_TYPE.SEARCH}
        totalQuestionsInfo={totalSearchResultInfo}
        questions={searchResult}
        tab={tab}
        sort={sort}
        page={requestInfo.page}
      />
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
