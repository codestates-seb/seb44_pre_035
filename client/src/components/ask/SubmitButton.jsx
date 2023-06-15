import { Wrapper } from "../../pages/questions/Container.styled";
import { Button } from "./SubmitButton.styled";

function SubmitButton({ button }) {
  return (
    <Wrapper button="true" direction="row">
      <Button>{button}</Button>
    </Wrapper>
  );
}

export default SubmitButton;
