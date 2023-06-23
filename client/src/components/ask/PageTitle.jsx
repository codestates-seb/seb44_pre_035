import styled from "styled-components";

export default function PageTitle({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  height: 130px;
`;

const Title = styled.div`
  font-size: 27px;
  font-weight: 600;

  /* border: 1px solid red; */
`;
