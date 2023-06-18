import styled from "styled-components";
import MyInfo from "../../../components/mypage/MyInfo/MyInfo";
import MyActivity from "../../../components/mypage/MyActivity/MyActivity";

export default function Mypage() {
  return (
    <MyPageContainer>
      <MyInfo>
        <MyInfoWrapper>
          <MyInfo.ProfileImg />
          <MyInfo.ProfileInfo />
        </MyInfoWrapper>
      </MyInfo>
      <MyActivity>
        <MyActivityWrapper>
          <MyActivity.MyQuestion />
          <MyActivity.MyAnswer />
          <MyActivity.MyVote />
        </MyActivityWrapper>
      </MyActivity>
    </MyPageContainer>
  );
}

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;
  padding: 24px;

  /* border: 1px solid red; */
`;

const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;

  /* border: 1px solid red; */
`;

const MyActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  /* border: 1px solid red; */
`;
