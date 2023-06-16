import { Wrapper } from "../../pages/questions/Container.styled";
import Writer from "../../share/Writer";
import { Label } from "./SubmitInput.styled";

function SubmitHTML({ title, comment, htmlFor }) {
  return (
    <Wrapper SubmitHTML="true" direction="column">
      <Label title="true" htmlFor={htmlFor}>
        {title}
      </Label>
      <Label text="true" htmlFor={htmlFor}>
        {comment}
      </Label>
      <Writer />
    </Wrapper>
  );
}

export default SubmitHTML;
