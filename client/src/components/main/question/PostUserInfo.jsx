import styled from "styled-components";
import profileImage from "../../../img/profile_img.png";

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

export default function PostUserInfo({ userId }) {
  console.log(userId);

  return (
    <Wrapper>
      <Image src={profileImage} />
      <Content>{userId} hahagarden</Content>
    </Wrapper>
  );
}
