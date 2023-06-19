import styled from "styled-components";
import SubmitInput from "../SubmitInput";
import SubmitHTML from "../SubmitHTML";
import SubmitButton from "../SubmitButton";
import { useState } from "react";

const AskInputs = () => {
  const [inputs, setInputs] = useState({
    Question_id: "",
  });

  console.log(inputs, setInputs);

  return (
    <Container>
      <Wrapper>
        <SubmitInput
          title="Title"
          comment="Be specific and imagine you’re asking a question to another person."
        />
        <SubmitHTML
          title="What are the details of your problem?"
          comment="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        />
        <SubmitHTML
          title="What did you try and what were you expecting?"
          comment="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
        />
        <SubmitInput
          title="Tags"
          comment="Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
        />
      </Wrapper>
      <Wrapper>
        <SubmitButton button="Past your question" />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* border: 1px solid red; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* border: 1px solid red; */
`;

export default AskInputs;
