import styled from "styled-components";
import EditAnswer from "../../components/ask/Edit/editAnswer/EditAnswer";

export default function EditAnswerPage() {
  return (
    <Container>
      <EditAnswer>
        <Wrapper>
          <EditAnswer.Title title="Edit a answer" />
          <EditAnswer.Inputs />
        </Wrapper>
      </EditAnswer>
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
