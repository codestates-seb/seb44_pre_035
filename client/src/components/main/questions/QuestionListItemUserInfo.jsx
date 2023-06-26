import styled from "styled-components";
import { getProfile, getNickname } from "../../../profile/getRandomAccount";

export default function QuestionListItemUserInfo() {
  return (
    <Wrapper>
      <Image src={getProfile()} />
      <Content>{getNickname()}</Content>
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
