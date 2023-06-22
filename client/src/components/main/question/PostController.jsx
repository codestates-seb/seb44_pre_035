import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PostController({ post }) {
  const handleDeletePost = () => {};
  const postType = post.answerId ? "answer" : "question";

  return (
    <Wrapper>
      {postType === "question" ? (
        <Button to={`/edit/${post.questionId}`}>Edit</Button>
      ) : postType === "answer" ? (
        <Button to={`/editAnswer/${post.answerId}`}>Edit</Button>
      ) : null}
      <Button as="button" type="button" onClick={handleDeletePost}>
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
