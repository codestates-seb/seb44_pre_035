import styled from "styled-components";

const MyInfoProfileImg = () => {
  return (
    <MyInfoProfileImgContainer>
      <ProfileImg src="/src/img/askubuntu.png" alt="Profile Img" />
    </MyInfoProfileImgContainer>
  );
};

const MyInfoProfileImgContainer = styled.div`
  border-radius: 5px;

  box-shadow: 0px 0px 10px gray;

  height: 150px;
  width: 150px;
`;

const ProfileImg = styled.img``;

export default MyInfoProfileImg;
