import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-weight: 600;
  font-size: 25px;
  line-height: 27px;
`;

export const Container = styled.div`
  text-align: left;

  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  align-items: center;

  ${(props) =>
    props.background &&
    css`
      background-color: #fafafa;
    `}

  ${(props) =>
    props.contents &&
    css`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 52px;
      left: -70px;

      overflow: auto;
    `}

    ${(props) =>
    props.button &&
    css`
      width: 700px;
    `}
`;

export const Wrapper = styled.div`
  text-align: left;

  width: 700px;
  padding: 24px;
  margin: 10px 0;

  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};

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
      border-radius: 3px;

      border: 1px solid #c9c9c9;
    `};

  ${(props) =>
    props.SubmitHTML &&
    css`
      height: 370px;
      background-color: white;
      border-radius: 3px;

      border: 1px solid #c9c9c9;
    `};

  ${(props) => props.button && css``}
`;
