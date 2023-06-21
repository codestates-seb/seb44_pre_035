import styled from "styled-components";
import PageTitle from "../PageTitle";

export default function AskTitle = ({ title }) => {
  return (
    <Wrapper>
      <PageTitle title={title} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 1px solid red; */
`;

