import styled from "styled-components";

import AskButton from "../../../share/AskButton";
import PostContainer from "../../../components/main/question/PostContainer";
import QuestionStatus from "../../../components/main/question/QuestionStatus";

export default function SectionQuestion({ question, handleDeletePost }) {
  return (
    <Wrapper>
      <QuestionHeader>
        <PageTitleBox>
          <PageTitle>{question.title}</PageTitle>
          <QuestionStatus question={question} />
        </PageTitleBox>
        <AskButton />
      </QuestionHeader>
      <QuestionContent>
        <PostContainer post={question} handleDeletePost={handleDeletePost} />
      </QuestionContent>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 24px 16px;
  padding-bottom: 0;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #e3e6e8;
  margin-bottom: 24px;
`;

const PageTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 27px;
  margin-bottom: 8px;

  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  padding-right: 20px;
`;

const QuestionContent = styled.div``;
