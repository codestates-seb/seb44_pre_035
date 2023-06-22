import styled from "styled-components";

const MyActivityTitle = ({ title }) => {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  /* border: 1px solid red; */
`;

const Title = styled.h1`
  height: 1.5rem;
  font-size: 1.7rem;
  /* border: 1px solid red; */
`;

export default MyActivityTitle;
