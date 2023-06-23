import React from "react";
import styled from "styled-components";
import MyPage_header from "../../components/mypage/MyPage_header";
import MyPage_menu from "../../components/mypage/MyPage_menu";
import Mypage_Nav from "../../components/mypage/MyPage_Nav";

/** 전체영역(메인 Nav + 컨텐츠) 컴포넌트 */
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  white-space: normal;
`;
/** 컨테이너 컴포넌트 */
const Container = styled.div`
  width: 100%;
`;
/** 컨텐츠 묶음 컴포넌트(header, menu, Maincontainer) */
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  font-size: 0.8rem;
`;
/** 좌측 setting Nav + 우측 컨텐츠 묶음 컴포넌트 */
const MainContainer = styled.div`
  display: flex;
`;

const MypageSetting = () => {
  return (
    <React.Fragment>
      <MainDiv>
        <Container>
          <Content>
            <MyPage_header />
            <MyPage_menu />
            <MainContainer>
              <Mypage_Nav />
            </MainContainer>
          </Content>
        </Container>
      </MainDiv>
    </React.Fragment>
  );
};

export default MypageSetting;
