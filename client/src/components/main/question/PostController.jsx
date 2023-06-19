import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PostController() {
  const handleDeletePost = () => {};

  return (
    <Wrapper>
      <Button to="/edit">Edit</Button>
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
