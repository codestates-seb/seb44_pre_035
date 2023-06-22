import styled from "styled-components";
import MyActivityTitle from "./MyActivityTitle";

const MyActivityMyAnswer = () => {
  return (
    <MyActivityMyAnswerContainer>
      <AnswerContainer>
        <MyActivityTitle title="My anwers" />
        <AnswerContent>
          <div className="text">
            Your answers section is currently blank. Would you like to add one?{" "}
            <span className="blue">Edit answer</span>
          </div>
        </AnswerContent>
      </AnswerContainer>
    </MyActivityMyAnswerContainer>
  );
};

const MyActivityMyAnswerContainer = styled.div`
  flex-grow: 1;
  margin: 0rem 1.2rem 1.2rem 2rem;
`;

const AnswerContainer = styled.div`
  width: 48.225rem;
  height: 13.546rem;
`;
const AnswerContent = styled.div`
  margin-top: 0.7rem;
  width: 100%;
  height: 10rem;
  background-color: #f8f9f9;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    width: 31.6rem;
    font-size: 13px;
    color: #6a737c;
    margin: 0.7rem;
    line-height: 1.4rem;

    .blue {
      color: #0074cc;
    }
  }
`;

export default MyActivityMyAnswer;
