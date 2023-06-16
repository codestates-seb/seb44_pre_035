import { Link } from "react-router-dom";
import SubmitButton from "../../components/ask/SubmitButton";
import SubmitInput from "../../components/ask/SubmitInput";
import { Container, Title, Wrapper } from "./Container.styled";
import SubmitHTML from "../../components/ask/SubmitHTML";

export default function Edit() {
  return (
    <>
      <Container background="true" align="column">
        <Container contents="true" direction="column">
          <Wrapper title="true">
            <Title>Edit a question</Title>
          </Wrapper>
          <SubmitInput title="Title" htmlFor="input-title" />
          <SubmitHTML title="Body" htmlFor="input-problem" />
          <SubmitInput title="Tags" htmlFor="input-tags" />
        </Container>
        <Container contents="true" direction="row">
          <SubmitButton button="Post your question" />
          <Link to="/">
            <SubmitButton button="Cancel" />
          </Link>
        </Container>
      </Container>
    </>
  );
}
