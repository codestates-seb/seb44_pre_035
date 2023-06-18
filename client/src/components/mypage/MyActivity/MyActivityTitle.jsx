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
  font-size: 21px;
  font-weight: 400;

  /* border: 1px solid red; */
`;

export default MyActivityTitle;
