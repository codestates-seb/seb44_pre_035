import { Link } from "react-router-dom";
import SubmitButton from "../../components/ask/SubmitButton";
import SubmitInput from "../../components/ask/SubmitInput";
import Footer from "../../share/Footer";
import { Container, Title, Wrapper } from "./Container.styled";

export default function Edit() {
  return (
    <Container background="true" align="column">
      {/* 상단 네비게이션 */}
      <div direction="column">top nav</div>

      <Container contents="true" direction="column">
        <Wrapper title="true">
          <Title>Edit a question</Title>
        </Wrapper>
        <SubmitInput title="Title" htmlFor="input-title" />
        <SubmitInput title="Body" htmlFor="input-problem" />
        <SubmitInput title="Tags" htmlFor="input-tags" />
      </Container>
      <Container contents="true" direction="row">
        <SubmitButton button="Post your question" />
        <Link to="/">
          <SubmitButton button="Cancel" />
        </Link>
      </Container>

      <Footer />
    </Container>
  );
}
