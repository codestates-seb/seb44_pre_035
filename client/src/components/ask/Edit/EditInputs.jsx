import styled from "styled-components";
import SubmitButton from "../SubmitButton";
import SubmitHTML from "../SubmitHTML";
import SubmitInput from "../SubmitInput";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditInputs = () => {
  const [ask, setAsk] = useState({ title: "", body: "" });
  const [body, setBody] = useState({ body: "" });

  console.log("ask:", ask, "//", "body", body);

  const handleChange = (e) => {
    setAsk((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const EditQuestion = async (body) => {
    await axios
      .put("/questions/{question-id}", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        alert("Failed to post question.");
      });
  };

  const handleSubmit = () => {
    if (body.body.length < 20) {
      alert(
        "Please make sure there is no [Minimum 20 characters] in the input.",
      );
    }
    EditQuestion(ask);
  };

  useEffect(() => {
    setAsk((prev) => ({ ...prev, body: body.body }));
  }, [body.body]);

  return (
    <Container>
      <InputsWrapper>
        <SubmitInput title="Title" name="title" handleChange={handleChange} />
        <SubmitHTML
          title="Body"
          name="body"
          body="{body.body}"
          setBody={setBody}
        />
        <SubmitInput title="Tags" />
      </InputsWrapper>
      <ButtonsWrapper>
        <SubmitButton button="Edit your question" handleSubmit={handleSubmit} />
        <CancelButton to="/">Cancel</CancelButton>
      </ButtonsWrapper>
    </Container>
  );
};

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

export default EditInputs;
