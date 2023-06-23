import styled, { css } from "styled-components";

function SubmitInput({ title, comment, name, handleChange, question }) {
  return (
    <Wrapper SubmitInput="true" direction="column">
      <InputTitle text="title">{title}</InputTitle>
      <InputTitle text="sub">{comment}</InputTitle>
      <Input name={name} onChange={handleChange} defaultValue={question} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 1px solid #d1d1d1;
  border-radius: 3px;
  padding: 24px;
`;

const InputTitle = styled.label`
  /* border: 1px solid red; */

  ${(props) =>
    props.text === "title" &&
    css`
      font-size: 15px;
      font-weight: 600;
    `}

  ${(props) =>
    props.text === "sub" &&
    css`
      font-size: 12px;
      font-weight: 400;
    `}
`;

const Input = styled.input`
  border: 1px solid#969696;
  border-radius: 3px;
`;

export default SubmitInput;
