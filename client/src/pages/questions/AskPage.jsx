import styled from "styled-components";
import Ask from "../../components/ask/Ask/Ask";

export default function AskPage() {
  return (
    <Container>
      <Ask>
        <Wrapper>
          <Ask.Title title="Ask a public question" />
          <Ask.HelpMsg />
          <Ask.Input />
        </Wrapper>
      </Ask>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;

  /* border: 1px solid red; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 24px;

  /* border: 1px solid red; */
`;
