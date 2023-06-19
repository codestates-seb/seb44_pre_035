import styled from "styled-components";
import SubmitInput from "../SubmitInput";
import SubmitHTML from "../SubmitHTML";
import SubmitButton from "../SubmitButton";
import { useState } from "react";

const AskInputs = () => {
  const [ask, setAsk] = useState({ title: "", problem: "", try: "", tags: "" });

  const handleChange = (e) => {
    setAsk((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(ask);

  return (
    <Container>
      <Wrapper>
        <SubmitInput
          title="Title"
          comment="Be specific and imagine you’re asking a question to another person."
          name="title"
          handleChange={handleChange}
        />
        <SubmitHTML
          title="What are the details of your problem?"
          comment="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
          name="problem"
          setAsk={setAsk}
        />
        <SubmitHTML
          title="What did you try and what were you expecting?"
          comment="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
          name="try"
          setAsk={setAsk}
        />
        <SubmitInput
          title="tags"
          comment="Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
          name="tags"
          handleChange={handleChange}
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
