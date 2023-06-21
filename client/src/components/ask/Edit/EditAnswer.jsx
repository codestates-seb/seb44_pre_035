import styled from "styled-components";
import EditTitle from "./EditTitle";
import EditAnswerInputs from "./EditAnswerInputs";

export default function EditAnswer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  height: 100%;
  /* border: 1px solid red; */
`;

EditAnswer.Title = EditTitle;
EditAnswer.Inputs = EditAnswerInputs;
