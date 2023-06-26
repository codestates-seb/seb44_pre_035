import styled from "styled-components";
import PostSidebar from "./PostSidebar";
import PostUserInfo from "./PostUserInfo";
import TagList from "../TagList";
import PostController from "./PostController";
import ReactQuill from "react-quill";
import { POST_TYPE } from "../utils";
import Comment from "./Comment";

export default function PostContainer({
  post,
  handleDeletePost,
  requestGetQuestion,
}) {
  const postType = post.answerId ? POST_TYPE.ANSWER : POST_TYPE.QUESTION;

  return (
    <Wrapper>
      <PostSidebar />
      <Content>
        <ReactQuill value={post.content} readOnly={true} theme={"bubble"} />
        {post.tags && <PostTags tags={post.tags} />}
        <ContentMeta>
          <ContentMetaPart>
            {postType === POST_TYPE.ANSWER && (
              <AnswerStatus>
                <FirstText>answered</FirstText>
                <LastText>{post.modifiedAt?.slice(0, 16)}</LastText>
              </AnswerStatus>
            )}
            <PostController
              post={post}
              postType={postType}
              handleDeletePost={handleDeletePost}
            />
          </ContentMetaPart>
          <PostUserInfo
            nickname={post.nickname}
            profileImagePath={post.profileImagePath}
          />
        </ContentMeta>
        {post.commentList && (
          <Comment
            questionId={post.questionId}
            answerId={post.answerId}
            comments={post.commentList}
            requestGetQuestion={requestGetQuestion}
          />
        )}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e3e6e8;
  margin-bottom: 24px;
`;

const Content = styled.div`
  width: calc(100% - 56px);
  padding-right: 16px;
  font-size: 15px;
  flex-grow: 1;

  .ql-editor {
    width: 100%;
    min-height: 100px;
    padding: 0;
  }
`;

const PostTags = styled(TagList)`
  margin-bottom: 24px;
`;

const ContentMetaPart = styled.div`
  display: flex;
  align-items: flex-end;
`;

const AnswerStatus = styled.div`
  font-size: 13px;
  display: flex;
  gap: 5px;
  margin-right: 10px;
`;

const FirstText = styled.span`
  color: #6a737c;
`;

const LastText = styled.span`
  width: max-content;
`;

const ContentMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
