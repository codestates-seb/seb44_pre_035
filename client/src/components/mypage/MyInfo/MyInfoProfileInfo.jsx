import styled from "styled-components";

const MyInfoProfileInfo = () => {
  return (
    <MyInfoProfileInfoContainer>
      <ProfileName>NickName</ProfileName>
      <ProfileEmail>abc123@gmail.com</ProfileEmail>
    </MyInfoProfileInfoContainer>
  );
};

const MyInfoProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  /* border: 1px solid red; */
`;

const ProfileName = styled.div`
  font-size: 34px;

  /* border: 1px solid red; */
`;

const ProfileEmail = styled.div`
  font-size: 24px;

  /* border: 1px solid red; */
`;

export default MyInfoProfileInfo;
