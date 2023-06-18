import styled from "styled-components";

function SubmitButton({ button }) {
  return (
    <Wrapper>
      <Button>{button}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* border: 1px solid red; */
`;

const Button = styled.button`
  font-size: 13px;
  font-weight: 400;
  color: #fff;

  background-color: #0995ff; // --powder-100
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.6);

  border: 1px solid transparent;
  border-radius: 3px;
  padding: 10.4px;

  &:hover {
    background-color: #0162bf;
  }
`;

export default SubmitButton;
