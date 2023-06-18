import styled from "styled-components";
import Edit from "../../components/ask/Edit/Edit";

export default function EditPage() {
  return (
    <Container>
      <Edit>
        <Wrapper>
          <Edit.Title title="Edit a question" />
          <Edit.Input />
        </Wrapper>
      </Edit>
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
