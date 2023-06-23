import styled from "styled-components";
import profileImage from "../../../img/profile_img.png";

export default function PostUserInfo({ userId }) {
  return (
    <Wrapper>
      <Image src={profileImage} />
      <Content>{userId} hahagarden</Content>
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
