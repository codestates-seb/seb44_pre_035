import styled from "styled-components";
import EditTitle from "./EditTitle";
import EditInputs from "./EditInputs";

export default function Edit({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  height: 100%;
  /* border: 1px solid red; */
`;

Edit.Title = EditTitle;
Edit.Inputs = EditInputs;
