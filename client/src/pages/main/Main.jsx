import styled from "styled-components";
import AskButton from "../../share/AskButton";
import QuestionList from "../../components/main/questions/QuestionList";
import { useState, useEffect } from "react";
import { getQuestions, getQuestionsAnswered } from "../../api/mainAPI";

import { useLocation } from "react-router-dom";
import { LIST_TYPE, SORT_TYPE, TAB_TYPE } from "../../components/main/utils";

export default function Main() {
  const [questions, setQuestions] = useState([]);
  const [totalQuestionsInfo, setTotalQuestionsInfo] = useState({
    page: 1,
    size: 5,
    totalElements: 0,
    totalPages: 0,
  });
  const { search } = useLocation();
  const tab = new URLSearchParams(search).get("tab") || TAB_TYPE.ALL;
  const requestInfo = {
    page: Number(new URLSearchParams(search).get("page")) || 1,
    size: 2,
    criteria: [SORT_TYPE.NEWEST, SORT_TYPE.OLDEST].includes(
      new URLSearchParams(search).get("sort"),
    )
      ? "modifiedAt"
      : [SORT_TYPE.HIGHVIEWS, SORT_TYPE.LOWVIEWS].includes(
          new URLSearchParams(search).get("sort"),
        )
      ? "views"
      : "modifiedAt",
    sort: [SORT_TYPE.NEWEST, SORT_TYPE.HIGHVIEWS].includes(
      new URLSearchParams(search).get("sort"),
    )
      ? "DESC"
      : [SORT_TYPE.OLDEST, SORT_TYPE.LOWVIEWS].includes(
          new URLSearchParams(search).get("sort"),
        )
      ? "ASC"
      : "DESC",
  };

  useEffect(() => {
    switch (tab) {
      case TAB_TYPE.ALL:
        getQuestions(requestInfo).then((res) => {
          setQuestions(res.data.data);
          setTotalQuestionsInfo(res.data.pageInfo);
        });
        break;
      case TAB_TYPE.ANSWERED:
        getQuestionsAnswered(requestInfo, "Y").then((res) => {
          setQuestions(res.data.data);
          setTotalQuestionsInfo(res.data.pageInfo);
        });
        break;
      case TAB_TYPE.UNANSWERED:
        getQuestionsAnswered(requestInfo, "N").then((res) => {
          setQuestions(res.data.data);
          setTotalQuestionsInfo(res.data.pageInfo);
        });
        break;
    }
  }, [tab, requestInfo.sort, requestInfo.page]);

  return (
    <Container>
      <PageHeader>
        <PageTitle>All Questions</PageTitle>
        <AskButton />
      </PageHeader>
      <QuestionList
        listType={LIST_TYPE.QUESTION}
        totalQuestionsInfo={totalQuestionsInfo}
        questions={questions}
        tab={tab}
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
