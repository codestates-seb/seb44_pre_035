import styled from "styled-components";
import AskTitle from "./AskTitle";
import AskHelpMsg from "./AskHelpMsg";
import AskInputs from "./AskInputs";

const Ask = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  height: 100%;
  /* border: 1px solid red; */
`;

Ask.Title = AskTitle;
Ask.HelpMsg = AskHelpMsg;
Ask.Input = AskInputs;

export default Ask;
