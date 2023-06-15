import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};

  text-align: left;

  border: 1px solid red;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};

  text-align: left;

  padding: 10px;

  border: 1px solid blue;
`;
