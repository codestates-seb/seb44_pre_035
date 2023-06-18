import styled from "styled-components";
import MyActivityMyQuestion from "./MyActivityMyQuestion";
import MyActivityMyAnswer from "./MyActivityMyAnswer";
import MyActivityMyVote from "./MyActivityMyVote";

const MyActivity = ({ children }) => {
  return <MyActivityCotainer>{children}</MyActivityCotainer>;
};

const MyActivityCotainer = styled.div`
  height: 100%;

  /* border: 1px solid red; */
`;

MyActivity.MyQuestion = MyActivityMyQuestion;
MyActivity.MyAnswer = MyActivityMyAnswer;
MyActivity.MyVote = MyActivityMyVote;

export default MyActivity;
