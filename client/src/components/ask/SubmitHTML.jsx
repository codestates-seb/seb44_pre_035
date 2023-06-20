import styled, { css } from "styled-components";
import Writer from "../../share/Writer";

function SubmitHTML({ title, comment, name, setBody, body }) {
  return (
    <Wrapper SubmitHTML="true" direction="column">
      <InputTitle text="title">{title}</InputTitle>
      <InputTitle text="sub">{comment}</InputTitle>
      {body.length < 20 && (
        <InputTitle text="valiation">Minimum 20 characters</InputTitle>
      )}
      <Writer name={name} setBody={setBody} />
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

    ${(props) =>
    props.text === "valiation" &&
    css`
      font-size: 12px;
      font-weight: 400;
      color: red;
    `}
`;

export default SubmitHTML;
