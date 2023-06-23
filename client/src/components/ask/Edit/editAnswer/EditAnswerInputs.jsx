import { Link, useParams } from "react-router-dom";
import { dummyAnswers } from "../../../../dummy/dummyAnswers";
import { useEffect, useState } from "react";
import SubmitHTML from "../../SubmitHTML";
import SubmitButton from "../../SubmitButton";
import styled from "styled-components";

export default function EditAnswerInputs() {
  const { answerId } = useParams();
  // eslint-disable-next-line no-unused-vars
  const answer = dummyAnswers.find(
    (item) => item.Question_id === Number(answerId),
  );

  const [body, setBody] = useState({
    body: "",
  });

  // console.log("body", body);

  const handleSubmit = () => {
    if (body.body.length < 20) {
      alert(
        "Please make sure there is no [Minimum 20 characters] in the input.",
      );
    }
    // eslint-disable-next-line no-undef
    EditAnswer(body);
  };

  useEffect(() => {
    setBody((prev) => ({ ...prev, body: body.body }));
  }, [body.body]);

  // useEffect(() => {
  //   setBody((prev) => ({ ...prev, body: answer.content }));
  // }, []);

  return (
    <Container>
      <InputsWrapper>
        <SubmitHTML name="body" setBody={setBody} question={body.body} />
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
