import styled from "styled-components";
import MyActivityTitle from "./MyActivityTitle";
import MyActivityList from "./MyActivityList";

const MyActivityMyVote = () => {
  return (
    <MyActivityMyVoteContainer>
      <MyActivityTitle title="My votes" />
      <MyActivityList contents="My votes" />
    </MyActivityMyVoteContainer>
  );
};

const MyActivityMyVoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* border: 1px solid red; */
`;

export default MyActivityMyVote;
