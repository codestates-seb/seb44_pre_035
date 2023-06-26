import styled from "styled-components";
import SubmitButton from "../SubmitButton";
import SubmitHTML from "../SubmitHTML";
import SubmitInput from "../SubmitInput";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { EditQuestion } from "../../../api/postAPI";
import { getQuestion } from "../../../api/mainAPI";
import SubmitTag from "../SubmitTag";

export default function EditInputs() {
  const { questionId } = useParams("questionId");
  const nav = useNavigate();
  const [ask, setAsk] = useState({
    title: "",
    content: "",
  });

  const [body, setBody] = useState({ content: "" });

  // console.log("ask:", ask, "//", "body", body);

  const handleChange = (e) => {
    setAsk((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      await EditQuestion(questionId, ask);
      alert("Edit successful :)");
      nav(`/question/${questionId}`);
    } catch (error) {
      alert("Edit failed :(");
    }
  };

  useEffect(() => {
    setAsk((prev) => ({ ...prev, content: body.content }));
  }, [body.content]);

  useEffect(() => {
    getQuestion(questionId).then((res) => {
      setAsk((prev) => ({ ...prev, title: res.data.data.title }));
      setAsk((prev) => ({ ...prev, content: res.data.data.content }));
    });
  }, []);

  return (
    <Container>
      <InputsWrapper>
        <SubmitInput
          title="Title"
          name="title"
          handleChange={handleChange}
          question={ask.title}
        />
        <SubmitHTML
          title="Body"
          name="content"
          setBody={setBody}
          question={ask.content}
        />
        <SubmitTag title="tags" />
      </InputsWrapper>
      <ButtonsWrapper>
        <SubmitButton button="Edit your question" handleSubmit={handleSubmit} />
        <CancelButton to="/">Cancel</CancelButton>
      </ButtonsWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* border: 1px solid red; */
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* border: 1px solid red; */
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CancelButton = styled(Link)`
  font-size: 13px;
  font-weight: 400;
  color: #fff;

  background-color: #0995ff; // --powder-100
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.6);

  border: 1px solid transparent;
  border-radius: 3px;
  padding: 10.4px;

  &:hover {
    background-color: #0162bf;
  }
`;
