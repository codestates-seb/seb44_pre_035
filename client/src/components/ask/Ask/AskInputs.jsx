/* eslint-disable no-undef */
import styled from "styled-components";
import SubmitInput from "../SubmitInput";
import SubmitHTML from "../SubmitHTML";
import SubmitButton from "../SubmitButton";
import { useEffect, useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const AskInputs = () => {
  // eslint-disable-next-line no-unused-vars
  const [ask, setAsk] = useState({ title: "", body: "" });
  const [body, setBody] = useState({ problem: "", try: "" });

  // eslint-disable-next-line no-unused-vars
  const nav = useNavigate();

  console.log("ask:", ask, "//", "body", body);

  const handleChange = (e) => {
    setAsk((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const postQuestion = async (body) => {
  //   try {
  //     const response = await axios.post("/questions/ask", body);
  //     return response;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const handleSubmit = async () => {
  //   const response = await postQuestion(ask);

  //   if (response.status !== 201) {
  //     alert("Question posting failed");
  //   }
  //   nav("/");
  // };

  useEffect(() => {
    setAsk((prev) => ({ ...prev, body: body.problem + "<br>" + body.try }));
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
          comment="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
          name="problem"
          setBody={setBody}
        />
        <SubmitHTML
          title="What did you try and what were you expecting?"
          comment="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
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
