import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonWrapper = styled.div``;

const ButtonLink = styled(Link)`
  display: block;
  padding: 10.4px;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: #0995ff; // --powder-100
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.6);
  color: #fff;

  &:hover {
    background-color: #0162bf;
  }
`;

export default function AskButton() {
  return (
    <ButtonWrapper>
      <ButtonLink to="/ask">Ask Question</ButtonLink>
    </ButtonWrapper>
  );
}
