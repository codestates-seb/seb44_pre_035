import { Wrapper } from "../../pages/questions/Container.styled";
import { Button } from "./SubmitButton.styled";

function SubmitButton({ button }) {
  return (
    <Wrapper direction="row">
      <Button>{button}</Button>
    </Wrapper>
  );
}

export default SubmitButton;
