import styled from "styled-components";

export const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.bold};

  margin: 5px;
`;

export const List = styled.li`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.bold};
  list-style: circle;

  margin-left: 25px;
`;
