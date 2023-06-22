import { Link } from "react-router-dom";
import styled from "styled-components";
import { POST_TYPE } from "../utils";

export default function PostController({ post, handleDeletePost }) {
  const postType = post.answerId ? POST_TYPE.ANSWER : POST_TYPE.QUESTION;

  return (
    <Wrapper>
      {postType === POST_TYPE.QUESTION ? (
        <Button to={`/edit/${post.questionId}`}>Edit</Button>
      ) : postType === POST_TYPE.ANSWER ? (
        <Button to={`/editAnswer`}>Edit</Button>
      ) : null}
      <Button
        as="button"
        type="button"
        onClick={() => handleDeletePost(postType, post[`${postType}Id`])}
      >
        Delete
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled(Link)`
  color: #6a737c;

  &:hover {
    color: #838c95;
  }

  &:not(:first-child) {
    margin-left: 10px;
  }
`;
