import { useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
const InputElement = styled.input`
  width: ${(props) => props.width || "26.8rem"};
  display: flex;
  padding: 7px 9px;
  width: 100%;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  box-shadow: none;
  border-width: 1px;
  border-color: #babfc4;
  opacity: 0.77;
  border-radius: 3px;
  ${(props) => (props.isValid ? "hsl(210, 8%, 75%)" : "hsl(358,68%,59%)")};
  border-radius: 3px;

  &:focus {
    border: 1px solid
      ${(props) => (props.isValid ? "#38a9f0" : "hsl(358,68%,59%)")};
    box-shadow: 0px 0px 0px 4px
      ${(props) =>
        props.isValid
          ? "hsla(206, 100%, 40%, 0.15)"
          : "hsla(358,62%,47%,0.15)"};
    outline: 0;
  }
`;
const Input = ({
  width,
  fieldName,
  validation,
  id,
  placeholder,
  handleKeyup,
  type,
  error,
  defaultValue,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [isValid, setIsValid] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const { register, setValue } = useFormContext();

  // eslint-disable-next-line no-unused-vars
  const onKeyUp = (e) => {
    handleKeyup(e);
  };
  return (
    <InputElement
      type={type || "text"}
      id={id}
      width={width}
      placeholder={placeholder || null}
      isValid={error ? false : true}
      {...(fieldName ? { ...register(fieldName, validation) } : null)}
      onKeyUp={handleKeyup ? handleKeyup : null}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
