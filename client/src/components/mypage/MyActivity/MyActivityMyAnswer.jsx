import styled from "styled-components";
import MyActivityTitle from "./MyActivityTitle";
import MyActivityList from "./MyActivityList";

const MyActivityMyAnswer = () => {
  return (
    <MyActivityMyAnswerContainer>
      <MyActivityTitle title="My anwers" />
      <MyActivityList contents="My anwers" />
    </MyActivityMyAnswerContainer>
  );
};

const MyActivityMyAnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* border: 1px solid red; */
`;

export default MyActivityMyAnswer;
