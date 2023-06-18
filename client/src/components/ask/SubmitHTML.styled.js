import styled, { css } from "styled-components";

export const Label = styled.label`
  size: ${(props) => props.fontSize};
  text-align: left;

  ${(props) =>
    props.title &&
    css`
      font-size: 15px;
      font-weight: 600;
      line-height: 20px;

      margin-bottom: 3px;
    `};

  ${(props) =>
    props.text &&
    css`
      font-size: 13px;
      line-height: 15px;

      margin-bottom: 5px;
    `};
`;
