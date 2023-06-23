import styled from "styled-components";
import AskButton from "../../share/AskButton";
import QuestionList from "../../components/main/questions/QuestionList";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchQuestion } from "../../api/mainAPI";
import { LIST_TYPE } from "../../components/main/utils";
// import axios from "axios";

export default function Search() {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");
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
    criteria: "modifiedAt",
    sort: new URLSearchParams(search).get("tab") || "DESC",
  };

  useEffect(() => {
    searchQuestion(keyword, requestInfo).then((res) => {
      setSearchResult(res.data.data);
      setTotalSearchResultInfo(res.data.pageInfo);
    });
  }, [keyword, requestInfo.sort, requestInfo.page]);

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
        sort={requestInfo.sort}
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
