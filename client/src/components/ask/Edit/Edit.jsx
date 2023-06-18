import styled from "styled-components";
import EditTitle from "./EditTitle";
import EditInput from "./EditInput";

const Edit = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  height: 100%;
  /* border: 1px solid red; */
`;

Edit.Title = EditTitle;
Edit.Input = EditInput;

export default Edit;
