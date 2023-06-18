import styled from "styled-components";
import MyInfoProfileImg from "./MyInfoProfileImg";
import MyInfoProfileInfo from "./MyInfoProfileInfo";

const MyInfo = ({ children }) => {
  return <MyInfoContainer>{children}</MyInfoContainer>;
};

const MyInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 25%;

  /* border: 1px solid red; */
`;

MyInfo.ProfileImg = MyInfoProfileImg;
MyInfo.ProfileInfo = MyInfoProfileInfo;

export default MyInfo;
