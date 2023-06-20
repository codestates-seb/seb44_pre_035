import styled from "styled-components";
import profileImage from "../../../img/profile_img.png";

export default function QuestionListItemUserInfo({ userId }) {
  console.log(userId);

  return (
    <Wrapper>
      <Image src={profileImage} />
      <Content>{userId} hahagarden</Content>
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
