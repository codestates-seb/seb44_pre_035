/* eslint-disable no-undef */
import styled from "styled-components";
import SubmitInput from "../SubmitInput";
import SubmitHTML from "../SubmitHTML";
import SubmitButton from "../SubmitButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postQuestion } from "../../../api/postAPI";
import SubmitTag from "../SubmitTag";

export default function AskInputs() {
  const [ask, setAsk] = useState({ title: "", content: "", tags: [] });
  const [body, setBody] = useState({ problem: "", try: "" });

  console.log("*******ask", ask);

  const nav = useNavigate();

  // const handleAddTag = (e) => {
  //   if (e.target.value.length !== 0 && e.key === "Enter") {
  //     setTags((prev) => [...prev, e.target.value]);
  //   }
  // };

  const handleChange = (e) => {
    setAsk((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (body.problem.length < 20 && body.try.length < 20) {
      alert(
        "Make sure the problem input and try input contains more than 20 characters.",
      );
      return;
    }

    try {
      await postQuestion(ask);
      alert("Post successful :)");
      nav("/");
    } catch (error) {
      alert("Post failed :(");
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
        <SubmitTag
          title="tags"
          comment="Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
          setAsk={setAsk}
        />
      </Wrapper>
      <Wrapper>
        <SubmitButton button="Post your question" handleSubmit={handleSubmit} />
      </Wrapper>
    </Container>
  );
}

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
