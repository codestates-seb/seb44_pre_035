import styled from "styled-components";
import LoginButton from "../../components/sign/Login/LoginButton";
import LoginInputForm from "../../components/sign/Login/LoginFormInput";
import logo_stack from "../../img/logo_stack.svg";
import copyButton from "../../img/copyButton.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Cookies } from "react-cookie";
const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 120%;
  margin-bottom: 16px;
`;
const Logowrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  cursor: pointer;
  img {
    width: 32px;
    height: 37px;
  }
`;
const FormWrapper = styled.div`
  width: 132%;
  height: 160%;
  margin-bottom: 29px;
  padding: 24px;
  border-radius: 7px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
`;
const RedirectionDiv1 = styled.div`
  padding: 16px;
  margin-bottom: 24px;
  font-size: 13px;
  text-align: center;
`;
const RedirectionLink = styled(Link).attrs()`
  text-align: center;
  color: #0074cc;
  text-decoration: none;
  font-size: 13px;
  &:hover,
  &:focus,
  &:active {
    color: #0074cc;
  }
`;
const RedirectionDiv2 = styled.div`
  margin-top: 12px;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  vertical-align: baseline;
  > :last-child {
    text-align: center;
    color: #0074cc;
    text-decoration: none;
    font-size: 13px;
    &:hover,
    &:focus,
    &:active {
      color: #0074cc;
    }
  }
`;

const Login = () => {
  const userId = localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null;
  const cookie = new Cookies();
  const Token = cookie.get("token");
  const handleButtonClick = () => {
    console.log("action");
  };
  useEffect(() => {
    if (userId !== null && Token) {
      window.location.replace("/");
    }
  }, [userId, Token]);

  if (userId === undefined) {
    return null; // 또는 오류 대체 컴포넌트를 반환할 수 있습니다.
  }

  return (
    <Page>
      <LoginWrapper>
        <Logowrapper>
          <img src={logo_stack} alt="logo_stack" />
        </Logowrapper>
        <ButtonWrapper>
          <LoginButton onClick={handleButtonClick} type={"google"} />
          <LoginButton onClick={handleButtonClick} type={"github"} />
          <LoginButton onClick={handleButtonClick} type={"facebook"} />
        </ButtonWrapper>
        <FormWrapper>
          <LoginInputForm />
        </FormWrapper>
        <RedirectionDiv1>
          Don't have an account?{" "}
          <RedirectionLink to="../users/signup">Sign up</RedirectionLink>
          <RedirectionDiv2>
            Are you an empolyer?{" "}
            <a href="/">
              Sign up on Talent
              <img src={copyButton} alt="" />
            </a>
          </RedirectionDiv2>
        </RedirectionDiv1>
      </LoginWrapper>
    </Page>
  );
};

export default Login;
