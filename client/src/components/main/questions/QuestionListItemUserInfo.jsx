import styled from "styled-components";
import getProfile from "../../../profile/getProfile";

export default function QuestionListItemUserInfo({ nickname }) {
  return (
    <Wrapper>
      <Image src={getProfile()} />
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
