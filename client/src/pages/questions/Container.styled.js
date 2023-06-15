import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;

  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  align-items: center;

  /* border: 1px solid red; */

  ${(props) =>
    props.background &&
    css`
      background-color: #f8f9f9};
    `}

  ${(props) =>
    props.contents &&
    css`
      width: 850px;
    `}
`;

export const Wrapper = styled.div`
  text-align: left;

  width: 850px;
  padding: 24px;
  margin: 10px 0;
  /* border: 1px solid blue; */

  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  justify-content: center;

  ${(props) =>
    props.title &&
    css`
      height: 130px;
    `};

  ${(props) =>
    props.helpMessage &&
    css`
      background-color: #ebf4fb;

      height: 250px;
      border: 1px solid #a6ceed;
      border-radius: 3px;
    `};

  ${(props) =>
    props.SubmitInput &&
    css`
      background-color: white;

      border: 1px solid #c9c9c9;
    `};
`;
