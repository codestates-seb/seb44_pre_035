import styled from "styled-components";
import PostSidebar from "./PostSidebar";
import PostUserInfo from "./PostUserInfo";
import TagList from "../TagList";
import PostController from "./PostController";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e3e6e8;
  margin-bottom: 24px;
`;

const Content = styled.div`
  padding-right: 16px;
  font-size: 15px;

  & p {
    margin-bottom: 16px;
  }

  & p:last-child {
    margin-bottom: 24px;
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

export default function PostContainer({ post }) {
  return (
    <Wrapper>
      <PostSidebar />
      <Content>
        <p>{post.content}</p>
        {post.tags && <PostTags tags={post.tags} />}
        <ContentMeta>
          <PostController />
          <PostUserInfo userId={post.user_id} />
        </ContentMeta>
      </Content>
    </Wrapper>
  );
}
