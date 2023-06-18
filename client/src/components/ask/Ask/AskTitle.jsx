import styled from "styled-components";
import PageTitle from "../PageTitle";

const AskTitle = ({ title }) => {
  return (
    <Wrapper>
      <PageTitle title={title} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 1px solid red; */
`;

export default AskTitle;
