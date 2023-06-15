import { Wrapper } from "../../pages/questions/Container.styled";
import { Input, Label } from "./SubmitInput.styled";

function SubmitInput({ title, comment, htmlFor }) {
  return (
    <Wrapper direction="column">
      <Label htmlFor={htmlFor} fontSize="15px" bold="true">
        {title}
      </Label>
      <Label htmlFor={htmlFor} fontSize="15px">
        {comment}
      </Label>
      <Input type="text" id={htmlFor} />
    </Wrapper>
  );
}

export default SubmitInput;
