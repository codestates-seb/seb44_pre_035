import React from "react";
import styled from "styled-components";
import MyPage_header from "../../components/mypage/MyPage_header";

/**마이페이지 Nav와 컨텐츠(좌,우) 감싸는 Div */
const MainDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1264px;
`;
/**마이페이지 컨텐츠만 감싸는 Div */
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
  return (
    <React.Fragment>
      <MainDiv>
        <Container>
          <Content>
            <MyPage_header />
            <MainContent>
              <Section></Section>
            </MainContent>
          </Content>
        </Container>
      </MainDiv>
    </React.Fragment>
  );
}
