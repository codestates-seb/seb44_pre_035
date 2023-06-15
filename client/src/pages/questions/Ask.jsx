import HelpMessage from "../../components/ask/HelpMessage";
import SubmitButton from "../../components/ask/SubmitButton";
import SubmitHTML from "../../components/ask/SubmitHTML";
import SubmitInput from "../../components/ask/SubmitInput";
import Footer from "../../share/Footer";
import { Container, Title, Wrapper } from "./Container.styled";

export default function Ask() {
  return (
    <Container background="true" align="column">
      {/* 상단 네비게이션 */}
      <div direction="column">top nav</div>

      <Container contents="true" direction="column">
        <Wrapper title="true">
          <Title>Ask a public question</Title>
        </Wrapper>
        <HelpMessage />
        <SubmitInput
          title="Title"
          comment="Be specific and imagine you’re asking a question to another person."
          placeholder="e.g Is there an R function for finding the index of an element in a vector?"
          htmlFor="input-title"
        />
        <SubmitHTML
          title="What are the details of your problem?"
          comment="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
          htmlFor="input-problem"
        />
        <SubmitHTML
          title="What did you try and what were you expecting?"
          comment="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
          htmlFor="input-try"
        />
        <SubmitInput
          title="Tags"
          comment="Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
          htmlFor="input-tags"
          placeholder="e.g (reactjs postgresql xml)"
        />
        <SubmitButton button="Post your question" />
      </Container>

      <Footer />
    </Container>
  );
}
