import HelpMessage from "../../components/ask/HelpMessage";
import SubmitButton from "../../components/ask/SubmitButton";
import SubmitInput from "../../components/ask/SubmitInput";
import { Title } from "./Ask.styled";
import { Container, Wrapper } from "./Container.styled";

export default function Ask() {
  return (
    <Container direction="column">
      {/* 상단 네비게이션 */}
      <Wrapper direction="column">top nav</Wrapper>

      <Container direction="row">
        {/* 사이드 네비게이션 */}
        <Wrapper direction="column">side nav</Wrapper>

        <Container direction="column">
          <Wrapper>
            <Title>Ask a public question</Title>
          </Wrapper>
          <HelpMessage />
          <SubmitInput
            title="Title"
            comment="Be specific and imagine you’re asking a question to another person."
            htmlFor="input-title"
          />
          <SubmitInput
            title="What are the details of your problem?"
            comment="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
            htmlFor="input-problem"
          />
          <SubmitInput
            title="What did you try and what were you expecting?"
            comment="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
            htmlFor="input-try"
          />
          <SubmitInput
            title="Tags"
            comment="Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
            htmlFor="input-tags"
          />
          <SubmitButton button="Post your question" />
        </Container>
      </Container>

      {/* footer */}
      <Wrapper direction="column">footer</Wrapper>
    </Container>
  );
}
