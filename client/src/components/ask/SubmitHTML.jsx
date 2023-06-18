import { Wrapper } from "../../pages/questions/Container.styled";
import Writer from "../../share/Writer";
import { Label } from "./SubmitInput.styled";

function SubmitHTML({ title, comment }) {
  return (
    <Wrapper SubmitHTML="true" direction="column">
      <Label title="true">{title}</Label>
      <Label text="true">{comment}</Label>
      <Writer />
    </Wrapper>
  );
}

export default SubmitHTML;
