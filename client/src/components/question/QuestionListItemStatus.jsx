import styled from "styled-components";
import { dummyAnswers } from "../../dummy/dummyAnswers";

const Wrapper = styled.div`
  width: 110px;
  height: 100%;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: end;
  gap: 8px;

  & > div:not(:first-child) span {
    color: #6a737c;
  }
`;

const ListItem = styled.div`
  width: fit-content;
  font-size: 13px;
  display: flex;
  gap: 5px;
`;

const FirstText = styled.span`
  font-weight: 600;
`;

const LastText = styled.span``;

export default function QuestionListItemStatus({ item }) {
  const numberOfAnswer = dummyAnswers.filter(
    (answer) => answer.Question_id === item.Question_id,
  ).length;

  return (
    <Wrapper>
      <ListItem>
        <FirstText>{item.vote}</FirstText>
        <LastText>{"votes"}</LastText>
      </ListItem>
      <ListItem>
        <FirstText>{numberOfAnswer}</FirstText>
        <LastText>{"answers"}</LastText>
      </ListItem>
      <ListItem>
        <FirstText>{item.view}</FirstText>
        <LastText>{"views"}</LastText>
      </ListItem>
    </Wrapper>
  );
}
