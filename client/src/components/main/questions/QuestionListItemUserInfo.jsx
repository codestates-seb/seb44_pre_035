import styled from "styled-components";

export default function QuestionListItemUserInfo({
  nickname,
  profileImagePath,
}) {
  return (
    <Wrapper>
      <Image src={profileImagePath} />
      <Content>{nickname}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5px;
`;

const Image = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  border-radius: 3px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;
