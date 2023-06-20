import styled from "styled-components";
import SubmitInput from "../SubmitInput";
import SubmitHTML from "../SubmitHTML";
import SubmitButton from "../SubmitButton";
import { useEffect, useState } from "react";
import axios from "axios";
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

  const postQuestion = async (body) => {
    await axios
      .post("/questions/ask", body)
      .then((res) => {
        console.log(res.data);
        nav("/");
      })
      .catch((err) => {
        console.log(err.message);
        alert("Failed to post question.");
      });
  };

  const handleSubmit = () => {
    if (body.problem.length < 20 && body.try.length < 20) {
      alert(
        "Make sure that the characters in the problem input and the try input are 20 or more.",
      );
    }
    postQuestion(ask);
  };

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
          comment="Introduce the problem and expand on what you put in the title."
          name="problem"
          setBody={setBody}
          body={body.problem}
        />
        <SubmitHTML
          title="What did you try and what were you expecting?"
          comment="Describe what you tried, what you expected to happen, and what actually resulted."
          name="try"
          setBody={setBody}
          body={body.try}
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
