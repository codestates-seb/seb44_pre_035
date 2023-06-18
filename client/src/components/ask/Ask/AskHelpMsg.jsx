import styled, { css } from "styled-components";

const AskHelpMsg = () => {
  return (
    <Container>
      <Wrapper>
        <Title title="main">Writing a good question</Title>
        <div>
          You’re ready to ask a programming-related question and this form will
          help guide you through the process.
          <br />
          Looking to ask a non-programming question? See the topics here to find
          a relevant site.
        </div>
      </Wrapper>
      <Wrapper>
        <Title title="sub">Steps</Title>
        <Ul>
          <Li>Summarize your problem in a one-line title.</Li>
          <Li>Describe your problem in more detail.</Li>
          <Li>Describe what you tried and what you expected to happen.</Li>
          <Li>
            Add “tags” which help surface your question to members of the
            community.
          </Li>
          <Li>Review your question and post it to the site.</Li>
        </Ul>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: rgb(235, 244, 251);

  border: 1px solid rgb(166, 206, 237);
  border-radius: 3px;

  padding: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* border: 1px solid red; */
`;

const Title = styled.div`
  ${(props) =>
    props.title === "main" &&
    css`
      font-size: 21px;
      font-weight: 400;
    `}

  ${(props) =>
    props.title === "sub" &&
    css`
      font-size: 13px;
      font-weight: 600;
    `}
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;

  padding-left: 35px;
`;

const Li = styled.li`
  font-size: 13px;

  list-style: circle;
`;

export default AskHelpMsg;
