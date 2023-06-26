import styled from "styled-components";
import { Link } from "react-router-dom";

import QuestionListItemStatus from "./QuestionListItemStatus";
// import TagList from "../TagList";
import QuestionListItemUserInfo from "./QuestionListItemUserInfo";
import TagList from "../TagList";

export default function QuestionListItem({ item }) {
  return (
    <Wrapper>
      <QuestionListItemStatus item={item} />
      <Content>
        <ContentTitle>
          <Link to={`/question/${item.questionId}`}>{item.title}</Link>
        </ContentTitle>
        <ContentExcerpt>
          {item.content.replace(/(<([^>]+)>)/gi, "")}
        </ContentExcerpt>
        <ContentMeta>
          {item.tags && <TagList tags={item.tags} />}
          <QuestionListItemUserInfo />
        </ContentMeta>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid #e3e6e8;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  & > div:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const ContentTitle = styled.div`
  & a {
    font-size: 17px;
    font-weight: 500;
    color: #0074cc; // --powder-700;

    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    padding-right: 20px;

    &:hover {
      color: #0a95ff;
    }
  }
`;

const ContentExcerpt = styled.div`
  font-size: 13px;

  line-height: 17px;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding-right: 20px;
`;

const ContentMeta = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-right: 20px;
`;
