import styled from "styled-components";
import PostSidebar from "./PostSidebar";
import PostUserInfo from "./PostUserInfo";
import TagList from "../TagList";
import PostController from "./PostController";
import ReactQuill from "react-quill";

export default function PostContainer({ post, handleDeletePost }) {
  return (
    <Wrapper>
      <PostSidebar />
      <Content>
        <ReactQuill value={post.content} readOnly={true} theme={"bubble"} />
        {post.tags && <PostTags tags={post.tags} />}
        <ContentMeta>
          <PostController post={post} handleDeletePost={handleDeletePost} />
          <PostUserInfo userId={post.user_id} />
        </ContentMeta>
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
  padding-right: 16px;
  font-size: 15px;
  flex-grow: 1;

  .ql-editor {
    min-height: 100px;
    padding: 0;
  }
`;

const PostTags = styled(TagList)`
  margin-bottom: 24px;
`;

const ContentMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
