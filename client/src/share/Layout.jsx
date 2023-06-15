import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Nav from "./Nav";

/* 전체 레이아웃 */
const LayoutArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: auto;
`;
/* 전체 레이아웃 */
const LayoutContainer = styled.div`
  display: flex;
  width: 1250px;
  min-height: 100vh;
  border: solid 1px #ebecee;
`;
/* 사이드바 컨테이너 */
const SideContainer = styled.div`
  width: 30%;
  min-height: 100%;
  border: solid 1px #ebecee;
`;
/* Nav 컨테이너 */
const NavContainer = styled.div`
  width: 190px;
  min-height: 100%;
  border: solid 1px #ebecee;
`;
/* Main 컨테이너 */
const MainContainer = styled.div`
  width: 80%;
  min-height: 100%;
  border: solid 1px #ebecee;
`;

export default function Layout() {
  return (
    <div>
      <Header />
      <LayoutArea>
        <LayoutContainer>
          <NavContainer>
            <Nav />
          </NavContainer>
          <MainContainer></MainContainer>
          <SideContainer>
            <Sidebar />
          </SideContainer>
        </LayoutContainer>
      </LayoutArea>
      <Footer />
    </div>
  );
}
