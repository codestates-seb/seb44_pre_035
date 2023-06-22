import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MyPage_header from "../../components/mypage/MyPage_header";
import MyPage_menu from "../../components/mypage/MyPage_menu";
import MyPage_profile from "../../components/mypage/MyPage_profile";

/**마이페이지 Nav와 컨텐츠(좌,우) 감싸는 Div */
const MainDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1264px;
`;
/**마이페이지 컨텐츠 Div */
const Container = styled.div`
  width: 100%;
`;
/**마이페이지 Content */
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  font-size: 0.8rem;
`;
const PlsLoginDiv = styled.div`
  padding: 24px;
  height: calc(100vh - 23.4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
/**마이페이지 MainContent */
const MainContent = styled.div`
  display: flex;
`;
/**마이페이지 MainContent */
const Section = styled.div`
  width: 100%;
`;
/**Mypage 컴포넌트 */
export default function Mypage() {
  const state = useSelector((state) => state.log);
  if (
    !(
      state.value === 1 ||
      state.value === "1" ||
      state.value === 0 ||
      state.value === "0"
    )
  ) {
    window.location.reload();
  }
  return (
    <React.Fragment>
      <MainDiv>
        <Container>
          {state.value === 1 || state.value === "1" ? (
            <Content>
              <MyPage_header />
              <MyPage_menu />
              <MainContent>
                <Section>
                  {" "}
                  <MyPage_profile />
                </Section>
              </MainContent>
            </Content>
          ) : (
            <PlsLoginDiv>로그인이 필요한 페이지입니다.</PlsLoginDiv>
          )}
        </Container>
      </MainDiv>
    </React.Fragment>
  );
}
