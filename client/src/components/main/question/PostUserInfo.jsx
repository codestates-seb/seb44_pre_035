import styled from "styled-components";
import getProfile from "../../../profile/getProfile";

export default function PostUserInfo({ nickname }) {
  return (
    <Wrapper>
      <Image src={getProfile()} />
      <Content>{nickname} </Content>
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
