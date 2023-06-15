import styled, { css } from "styled-components";

export const Text = styled.div`
  ${(props) =>
    props.title &&
    css`
      font-size: 21px;
      line-height: 27px;

      margin-bottom: 10px;
    `}

  ${(props) =>
    props.text &&
    css`
      font-size: 15px;
      line-height: 20px;

      margin-bottom: 10px;
    `}

    ${(props) =>
    props.steps &&
    css`
      font-size: 13px;
      font-weight: 600;
      line-height: 17px;

      margin-bottom: 10px;
    `}
`;

export const List = styled.li`
  font-size: 13px;
  list-style: circle;

  margin-left: 30px;
`;
