import styled, { css } from "styled-components";

export const Label = styled.label`
  size: ${(props) => props.fontSize};
  text-align: left;

  ${(props) =>
    props.bold &&
    css`
      font-weight: 600;
    `};
`;

export const Input = styled.input``;
