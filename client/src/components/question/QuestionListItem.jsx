import styled from "styled-components";
import { Link } from "react-router-dom";

import Tags from "./Tags";
import QuestionStatus from "./QuestionStatus";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #e3e6e8;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & > div:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const ContentTitle = styled.div`
  & a {
    font-size: 17px;
    color: #0074cc; // --powder-700;

    &:hover {
      color: #0a95ff;
    }
  }
`;

const ContentExcerpt = styled.div`
  font-size: 13px;

  p {
    line-height: 17px;
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

export default function QuestionListItem({ item }) {
  return (
    <Wrapper>
      <QuestionStatus item={item} />
      <Content>
        <ContentTitle>
          <Link to={`/questions/${item.Question_id}`}>{item.title}</Link>
        </ContentTitle>
        <ContentExcerpt>
          <p>{item.content}</p>
        </ContentExcerpt>
        <Tags tags={item.tags} />
      </Content>
    </Wrapper>
  );
}
