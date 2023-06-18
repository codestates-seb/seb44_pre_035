import styled from "styled-components";
import SubmitButton from "../SubmitButton";
import SubmitHTML from "../SubmitHTML";
import SubmitInput from "../SubmitInput";
import { Link } from "react-router-dom";

const EditInput = () => {
  return (
    <Container>
      <InputsWrapper>
        <SubmitInput title="Title" />
        <SubmitHTML title="Body" />
        <SubmitHTML
          title="What did you try and what were you expecting?"
          comment="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
        />
        <SubmitInput title="Tags" />
      </InputsWrapper>
      <ButtonsWrapper>
        <SubmitButton button="Past your question" />
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

export default EditInput;
