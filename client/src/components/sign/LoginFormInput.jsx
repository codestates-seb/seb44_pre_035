import styled from "styled-components";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";
import LoginButton from "./LoginButton";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginFormInput = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitButton = (e) => {
    e.preventDefault();

    const header = {
      headers: {
        "Content-Type": `application/json`,
      },
    };

    const reqbody = JSON.stringify({
      username: loginEmail,
      password: loginPassword,
    });

    axios
      .post("", reqbody, header)
      .then((res) => {
        window.alert(`${res.data.username}로 로그인 하셨습니다.`);
        localStorage.setItem("token", JSON.stringify(res.headers));
        navigate("../../");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        window.alert("로그인 정보가 일치하지 않습니다");
        setLoginEmail("");
        setLoginPassword("");
      });
  };

  return (
    <LoginForm onSubmit={(e) => handleSubmitButton(e)}>
      <EmailForm loginEmail={loginEmail} setLoginEmail={setLoginEmail} />
      <PasswordForm
        loginPassword={loginPassword}
        setLoginPassword={setLoginPassword}
      />
      <LoginButton type={"login"} />
    </LoginForm>
  );
};

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`;

export default LoginFormInput;
