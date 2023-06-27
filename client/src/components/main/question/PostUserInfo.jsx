import styled from "styled-components";
import { getProfile, getNickname } from "../../../profile/getRandomAccount";

export default function PostUserInfo() {
  return (
    <Wrapper>
      <Image src={getProfile()} />
      <Content>{getNickname()} </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 5px;
  border-radius: 3px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;
