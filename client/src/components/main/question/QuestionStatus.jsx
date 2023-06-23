import styled from "styled-components";

export default function QuestionStatus({ question }) {
  return (
    <Wrapper>
      <ListItem>
        <FirstText>{"Asked"}</FirstText>
        <LastText>{question.createdAt?.slice(0, 16)}</LastText>
      </ListItem>
      <ListItem>
        <FirstText>{"Modified"}</FirstText>
        <LastText>{question.modifiedAt?.slice(0, 16)}</LastText>
      </ListItem>
      <ListItem>
        <FirstText>{"Viewed"}</FirstText>
        <LastText>{`${question.views} times`}</LastText>
      </ListItem>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 110px;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: end;
  gap: 16px;
`;

const ListItem = styled.div`
  font-size: 13px;
  display: flex;
  gap: 5px;
`;

const FirstText = styled.span`
  color: #6a737c;
`;

const LastText = styled.span`
  width: max-content;
`;
