import styled from "styled-components";

export default function QuestionListItemStatus({ item }) {
  return (
    <Wrapper>
      <ListItem>
        <FirstText>{item.vote}</FirstText>
        <LastText>{"votes"}</LastText>
      </ListItem>
      <ListItem>
        <FirstText>{item.answers}</FirstText>
        <LastText>{"answers"}</LastText>
      </ListItem>
      <ListItem>
        <FirstText>{item.views}</FirstText>
        <LastText>{"views"}</LastText>
      </ListItem>
    </Wrapper>
  );
}

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
