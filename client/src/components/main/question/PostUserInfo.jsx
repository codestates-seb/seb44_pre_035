import styled from "styled-components";

export default function PostUserInfo({ nickname, profileImagePath }) {
  return (
    <Wrapper>
      <Image src={profileImagePath} />
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
