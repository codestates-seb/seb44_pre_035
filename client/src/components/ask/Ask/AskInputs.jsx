/* eslint-disable no-undef */
import styled from "styled-components";
import SubmitInput from "../SubmitInput";
import SubmitHTML from "../SubmitHTML";
import SubmitButton from "../SubmitButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postQuestion } from "../api/postAPI";

const AskInputs = () => {
  const [ask, setAsk] = useState({ title: "", content: "" });
  const [body, setBody] = useState({ problem: "", try: "" });

  // eslint-disable-next-line no-unused-vars
  const nav = useNavigate();

  console.log("ask:", ask, "//", "body", body);

  const handleChange = (e) => {
    setAsk((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (body.problem.length < 20 && body.try.length < 20) {
      alert(
        "Make sure the problem input and try input contains more than 20 characters.",
      );
    } else {
      postQuestion(ask);
      nav("/");
    }
  };

  useEffect(() => {
    setAsk((prev) => ({ ...prev, content: body.problem + "<br>" + body.try }));
  }, [body.problem, body.try]);

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
          comment="Introduce the problem and expand on what you put in the title."
          name="problem"
          setBody={setBody}
        />
        <SubmitHTML
          title="What did you try and what were you expecting?"
          comment="Describe what you tried, what you expected to happen, and what actually resulted."
          name="try"
          setBody={setBody}
        />
        <SubmitInput
          title="tags"
          comment="Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
        />
      </Wrapper>
      <Wrapper>
        <SubmitButton button="Post your question" handleSubmit={handleSubmit} />
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
