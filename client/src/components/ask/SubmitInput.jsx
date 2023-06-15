import { Wrapper } from "../../pages/questions/Container.styled";
import { Input, Label } from "./SubmitInput.styled";

function SubmitInput({ title, comment, htmlFor, placeholder }) {
  return (
    <Wrapper SubmitInput="true" direction="column">
      <Label title="true" htmlFor={htmlFor}>
        {title}
      </Label>
      <Label text="true" htmlFor={htmlFor}>
        {comment}
      </Label>
      <Input id={htmlFor} placeholder={placeholder} />
    </Wrapper>
  );
}

export default SubmitInput;
