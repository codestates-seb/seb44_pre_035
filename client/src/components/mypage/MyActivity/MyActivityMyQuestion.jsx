import styled from "styled-components";
import MyActivityTitle from "./MyActivityTitle";
import MyActivityList from "./MyActivityList";

const MyActivityMyQuestion = () => {
  return (
    <MyActivityMyQuestionContainer>
      <MyActivityTitle title="My questions" />
      <MyActivityList contents="My questions" />
    </MyActivityMyQuestionContainer>
  );
};

const MyActivityMyQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* border: 1px solid red; */
`;

export default MyActivityMyQuestion;
