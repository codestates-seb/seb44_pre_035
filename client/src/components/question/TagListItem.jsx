import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: block;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  background-color: #e1ecf4; // --powder-100
  border-radius: 3px;
  color: #39739e; // --powder-700
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export default function TagListItem({ tag }) {
  return <Wrapper to={`/questions/tagged/${tag}`}>{tag}</Wrapper>;
}
