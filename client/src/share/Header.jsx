import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useState, useEffect } from "react";
import HeaderLayout from "../share/HeaderLayout";
import logo from "../img/logo.svg";
import SearchForm from "./SearchForm";

export default function Header() {
  const [clickedMenu, setClickedMenu] = useState(false); // 임시 로그인
  const handleClickMenu = (menu) => {
    if (menu === clickedMenu) setClickedMenu(null);
    else setClickedMenu(menu);
    console.log(clickedMenu);
  };

  const cookies = new Cookies();
  const [isToken, setIsToken] = useState(false);

  const Token = cookies.get("token");
  useEffect(() => {
    // setIsToken(true);

    Token ? setIsToken(true) : setIsToken(false);
  }, [Token]);
  console.log(isToken);
  const navigate = useNavigate();

  const logOut = () => {
    cookies.remove("token"); // 쿠키를 삭제
    setIsToken(false);
    localStorage.removeItem("userId");
    navigate("/"); // 메인 페이지로 이동
  };

  return (
    <HeaderLayout>
      <HeaderWrapper>
        <HeaderTopbarContainer>
          <Logo to="/">
            <img src={logo} alt="logo" />
          </Logo>
          {isToken ? (
            <>
              <HeadBtnContainer>
                <button className="forTeams_btn">Products</button>
              </HeadBtnContainer>
              <SearchForm></SearchForm>
              <RightContainer>
                <ProfileImgContain>
                  <Link to="/users/:id">
                    <ProfileImg />
                  </Link>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "black",
                      marginLeft: "5px",
                      marginTop: "15px",
                    }}
                  >
                    1
                  </div>
                  <span
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      color: "#d2b08f",
                      marginLeft: "7px",
                      marginTop: "-12.5px",
                    }}
                  >
                    .
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#d2b08f",
                      marginTop: "15px",
                    }}
                  >
                    2
                  </span>
                </ProfileImgContain>
                <>
                  <Button>
                    <svg
                      aria-hidden="true"
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="#53595F"
                      style={{ marginTop: "15px", marginLeft: "10px" }}
                    >
                      <path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"></path>
                    </svg>
                  </Button>
                  <Button>
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="green"
                      style={{ marginTop: "15px", marginLeft: "10px" }}
                    >
                      <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"></path>
                    </svg>
                  </Button>
                  <Button>
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#53595F"
                      style={{ marginTop: "15px", marginLeft: "10px" }}
                    >
                      <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z"></path>
                    </svg>
                  </Button>
                  <Button>
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#53595F"
                      style={{ marginTop: "15px", marginLeft: "10px" }}
                    >
                      <path d="m8.9844-0.013672a1 1 0 0 0 -0.98438 1.0137v0.38281l-0.55273-0.27734a1 1 0 0 0 -0.48242 -0.11133 1 1 0 0 0 -0.41211 1.9004l1.4473 0.72266v3.6523l-3.1621-1.8262 0.097656-1.6152a1 1 0 0 0 -0.95117 -1.0742 1 1 0 0 0 -1.0449 0.95508l-0.037109 0.61719-0.33008-0.19141a1 1 0 0 0 -0.57422 -0.14062 1 1 0 0 0 -0.42578 1.8711l0.33203 0.19141-0.51758 0.3418a1 1 0 1 0 1.1016 1.668l1.3516-0.89258 3.1621 1.8262-3.1621 1.8262-1.3516-0.89258a1 1 0 0 0 -0.56445 -0.17383 1 1 0 0 0 -0.53711 1.8418l0.51758 0.3418-0.33203 0.19141a1 1 0 1 0 1 1.7305l0.33008-0.19141 0.037109 0.61719a1 1 0 1 0 1.9961 -0.11914l-0.097656-1.6152 3.1621-1.8262v3.6523l-1.4473 0.72266a1 1 0 0 0 0.89453 1.7891l0.55273-0.27734v0.38281a1 1 0 1 0 2 0v-0.38281l0.55273 0.27734a1 1 0 1 0 0.89453 -1.7891l-1.4473-0.72266v-3.6523l3.1621 1.8262-0.097656 1.6152a1 1 0 1 0 1.9961 0.11914l0.037109-0.61719 0.33008 0.19141a1 1 0 1 0 1 -1.7305l-0.33203-0.19141 0.51758-0.3418a1 1 0 0 0 -0.56641 -1.8418 1 1 0 0 0 -0.53516 0.17383l-1.3516 0.89258-3.1621-1.8262 3.1621-1.8262 1.3516 0.89258a1 1 0 1 0 1.1016 -1.668l-0.51758-0.3418 0.33203-0.19141a1 1 0 0 0 -0.45508 -1.8711 1 1 0 0 0 -0.54492 0.14062l-0.33008 0.19141-0.037109-0.61719a1 1 0 0 0 -0.97461 -0.95508 1 1 0 0 0 -1.0215 1.0742l0.097656 1.6152-3.1621 1.8262v-3.6523l1.4473-0.72266a1 1 0 1 0 -0.89453 -1.7891l-0.55273 0.27734v-0.38281a1 1 0 0 0 -1.0156 -1.0137z"></path>
                    </svg>
                  </Button>
                  <Button onClick={() => handleClickMenu("community")}>
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#53595F"
                      style={{ marginTop: "15px", marginLeft: "10px" }}
                    >
                      <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                    </svg>
                    {clickedMenu === "community" ? (
                      <CommunityDropdown>
                        <DropdownSubTitle>CURRENT COMMUNITY</DropdownSubTitle>
                        <DropdownSubContent>
                          <DropdownSubContainer>
                            <svg
                              cursor="pointer"
                              aria-hidden="true"
                              width="16"
                              height="16"
                              viewBox="0 0 32 37"
                              style={{
                                marginRight: "10px",
                                marginLeft: "10px",
                              }}
                            >
                              <path
                                d="M 26 33 v -9 h 4 v 13 H 0 V 24 h 4 v 9 h 22 Z"
                                fill="#c2c3c4"
                              />
                              <path
                                d="m 21.5 0 l -2.7 2 l 9.9 13.3 l 2.7 -2 L 21.5 0 Z M 26 18.4 L 13.3 7.8 l 2.1 -2.5 l 12.7 10.6 l -2.1 2.5 Z M 9.1 15.2 l 15 7 l 1.4 -3 l -15 -7 l -1.4 3 Z m 14 10.79 l 0.68 -2.95 l -16.1 -3.35 L 7 23 l 16.1 2.99 Z M 23 30 H 7 v -3 h 16 v 3 Z"
                                fill="#F77F2B"
                              />
                            </svg>
                            <div
                              style={{ marginRight: "75px", fontWeight: "800" }}
                              className="name"
                            >
                              Stack Overflow
                            </div>
                            <span
                              style={{ marginLeft: "17px" }}
                              className="discription loginout"
                            >
                              help
                            </span>
                            <span
                              style={{ marginLeft: "17px" }}
                              className="discription loginout"
                            >
                              chat
                            </span>
                            {/* <Link to="/"> */}
                            <div
                              className="discription loginout"
                              style={{ marginLeft: "17px" }}
                              role="presentation"
                              onClick={logOut}
                            >
                              log out
                            </div>
                            {/* </Link> */}
                          </DropdownSubContainer>
                          <DropdownSubContainer>
                            <div
                              style={{
                                color: "grey",
                                fontSize: "18px",
                                fontWeight: "300",
                                marginLeft: "15px",
                              }}
                            >
                              ㄴ
                            </div>
                            <svg
                              cursor="pointer"
                              aria-hidden="true"
                              width="16"
                              height="16"
                              viewBox="0 0 32 37"
                              style={{
                                marginRight: "10px",
                                marginLeft: "10px",
                              }}
                            >
                              <path
                                d="M 26 33 v -9 h 4 v 13 H 0 V 24 h 4 v 9 h 22 Z"
                                fill="grey"
                              />
                              <path
                                d="m 21.5 0 l -2.7 2 l 9.9 13.3 l 2.7 -2 L 21.5 0 Z M 26 18.4 L 13.3 7.8 l 2.1 -2.5 l 12.7 10.6 l -2.1 2.5 Z M 9.1 15.2 l 15 7 l 1.4 -3 l -15 -7 l -1.4 3 Z m 14 10.79 l 0.68 -2.95 l -16.1 -3.35 L 7 23 l 16.1 2.99 Z M 23 30 H 7 v -3 h 16 v 3 Z"
                                fill="grey"
                              />
                            </svg>
                            <div
                              style={{ marginLight: "75px" }}
                              className="name"
                            >
                              Meta Stack Overflow
                            </div>
                          </DropdownSubContainer>
                        </DropdownSubContent>
                        <DropdownSubTitle>
                          YOUR COMMUNITIES{" "}
                          <span style={{ marginLeft: "200px" }}>edit</span>
                        </DropdownSubTitle>
                        <Communitues>
                          <DropdownSubContainerBottom>
                            <svg
                              cursor="pointer"
                              aria-hidden="true"
                              width="16"
                              height="16"
                              viewBox="0 0 32 37"
                              style={{
                                marginRight: "10px",
                                marginLeft: "10px",
                              }}
                            >
                              <path
                                d="M 26 33 v -9 h 4 v 13 H 0 V 24 h 4 v 9 h 22 Z"
                                fill="#c2c3c4"
                              />
                              <path
                                d="m 21.5 0 l -2.7 2 l 9.9 13.3 l 2.7 -2 L 21.5 0 Z M 26 18.4 L 13.3 7.8 l 2.1 -2.5 l 12.7 10.6 l -2.1 2.5 Z M 9.1 15.2 l 15 7 l 1.4 -3 l -15 -7 l -1.4 3 Z m 14 10.79 l 0.68 -2.95 l -16.1 -3.35 L 7 23 l 16.1 2.99 Z M 23 30 H 7 v -3 h 16 v 3 Z"
                                fill="#F77F2B"
                              />
                            </svg>
                            <div
                              style={{ marginRight: "75px" }}
                              className="name"
                            >
                              Stack Overflow
                            </div>
                          </DropdownSubContainerBottom>
                        </Communitues>
                      </CommunityDropdown>
                    ) : null}
                  </Button>
                </>
              </RightContainer>
            </>
          ) : (
            <>
              <HeadBtnContainer>
                <button className="about_btn">About</button>
              </HeadBtnContainer>
              <HeadBtnContainer>
                <button className="forTeams_btn">Products</button>
              </HeadBtnContainer>
              <HeadBtnContainer>
                <button className="forTeams_btn">For Teams</button>
              </HeadBtnContainer>
              <SearchForm />
              <LoginContainer className="LogSinb">
                <Link to="/login">
                  <LoginBtn
                    width="59.45px"
                    height="32px"
                    fontSize="13px"
                    fontWeight="400"
                  >
                    Log in
                  </LoginBtn>
                </Link>
                <Link to="/signup">
                  <SignupBtn
                    to="signup"
                    width="64.44px"
                    height="33px"
                    fontSize="13px"
                    fontWeight="400"
                  >
                    Sign up
                  </SignupBtn>
                </Link>
              </LoginContainer>
            </>
          )}
        </HeaderTopbarContainer>
      </HeaderWrapper>
    </HeaderLayout>
  );
}

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 56px;
  border-top: 3px solid #f48224;
  border-bottom: 1px solid #c8ccd0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 2;
`;

const HeaderTopbarContainer = styled.div`
  width: 160rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
`;

const ProfileImg = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 3px;
  border: 1px solid orange;
  background-color: orange;
  cursor: pointer;
  margin-top: 11px;
  margin-left: 12px;
`;

const HeadBtnContainer = styled.div`
  /* background-color: var(--_na-item-bg);
  color: var(--_na-item-fc); */
  font: unset;
  font-size: 1.3rem;
  /* padding: var(--_na-item-p);
  white-space: var(--_na-item-ws); */
  align-items: center;
  border: none;
  border-radius: 1000px;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  position: relative;
  user-select: auto;

  @media screen and (max-width: 820px) {
    display: none;
  }

  .about_btn {
    width: 70px;
    height: 29px;
    background-color: #f8f9f9;
    color: #525960;
    font-size: 13px;
    font-weight: 400;
    border: none;
    border-radius: 20px;
    margin-left: 10px;
    &:hover {
      background-color: #e3e5e8;
      color: black;
      cursor: pointer;
    }
  }
  .forTeams_btn {
    width: 7.5rem;
    height: 2.9rem;
    background-color: #f8f9f9;
    color: #525960;
    font-size: 1.3rem;
    font-weight: 40rem;
    margin-left: 0.5rem;
    border: none;
    border-radius: 20px;
    &:hover {
      background-color: #e3e5e8;
      color: black;
      cursor: pointer;
    }
  }
`;

const MenuDropdown = styled.div`
  width: 375px;
  position: absolute;
  top: 47px;
  right: 86px;
  background-color: white;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;
const CommunityDropdown = styled(MenuDropdown)``;
const RightContainer = styled.div`
  height: 4.7rem;

  display: flex;
`;
const ProfileImgContain = styled.div`
  display: flex;
  width: 82.3px;
  cursor: pointer;
  &:hover {
    background-color: #e3e5e8;
  }
`;

const Logo = styled(Link)`
  height: 100%;
  padding: 0 8px;
  display: flex;
  align-items: center;

  img {
    width: 150px;
    height: 30px;
  }

  &:hover {
    background-color: #f1f2f3;
  }
`;
const Bluebutton = styled.button`
  background: #0995ff;
  color: #ffffff;
  font-weight: bold;
  border: 1px solid #0995ff;
  border-radius: 4px;
  box-shadow: inset 0 1px 0 0 #ffffff;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  :hover {
    background: #0063bf;
  }
  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
    :hover {
      background-color: #0995ff;
    }
  }
`;
const SkyblueButton = styled.button`
  background: #e1ecf4;
  color: #3a739d;
  border-radius: 4px;
  border: ${(props) => props.border || "1px solid #3a739d"};
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  margin-right: 0.5rem;
  margin-left: -2rem;
  :hover {
    background: #b3d3ea;
  }
`;
export function ButtonSblue({ children, width, height, fontSize, fontWeight }) {
  return (
    <SkyblueButton
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </SkyblueButton>
  );
}
export function ButtonBlue({
  children,
  border,
  width,
  height,
  fontSize,
  fontWeight,
  type,
  disabled,
}) {
  return (
    <Bluebutton
      type={type ? type : "submit"}
      border={border}
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      disabled={disabled}
    >
      {children}
    </Bluebutton>
  );
}

const LoginBtn = styled(ButtonSblue)``;
const SignupBtn = styled(ButtonBlue)``;
const Button = styled.div`
  display: flex;
  width: 4rem;
  cursor: pointer;
  &:hover {
    background-color: #e3e5e8;
  }
`;

const DropdownSubTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 11px;
  font-weight: 700;
  color: #0074cc;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: #f1f2f3;
  &:hover {
    cursor: pointer;
    color: hsl(206, 100%, 52%);
  }
`;

const DropdownSubContent = styled.div`
  width: 100%;
  height: 68px;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-left: 8px; */
  .name {
    color: #0074cc;
  }
  .discription {
    color: #3b4045;
    padding: 2px 0;
    &:hover {
      cursor: pointer;
    }
  }
  .loginout {
    color: #0074cc;
    &:hover {
      color: hsl(206, 100%, 52%);
    }
  }
`;

const Communitues = styled.div`
  width: 100%;
  height: 34px;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding-left: 8px; */
  .name {
    color: #0074cc;
  }
  .discription {
    color: #3b4045;
    padding: 2px 0;
    &:hover {
      cursor: pointer;
    }
  }
  .loginout {
    color: #0074cc;
    &:hover {
      color: hsl(206, 100%, 52%);
    }
  }
`;
const DropdownSubContainer = styled.div`
  width: 375px;
  height: 34px;
  padding-top: 10px;
  background-color: #f5f8fb;
  display: flex;
  /* justify-content: center; */
  &:hover {
    background-color: #e3ecf3;
  }
`;
const DropdownSubContainerBottom = styled.div`
  width: 375px;
  height: 34px;
  padding-top: 10px;
  background-color: white;
  display: flex;
  /* justify-content: center; */
  &:hover {
    background-color: #e4e6e8;
  }
`;

const LoginContainer = styled.div`
  @media screen and (max-width: 590px) {
    display: none;
  }
`;
