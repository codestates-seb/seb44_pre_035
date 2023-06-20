import { useState } from "react";
import styled from "styled-components";
import SignupButton from "./SignupButton";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../api/userAPI";
import Input from "../../../share/Input";
import AlertWarning from "./AlertWarning";
import ModalComponent from "../../../share/Modal";
import { FormProvider, useForm } from "react-hook-form";

const ContentDiv = styled.div`
  margin: 6px 0;
  width: 100%;
`;
// eslint-disable-next-line no-unused-vars
const DisplayNameInput = styled.input.attrs({
  type: "text",
})`
  display: flex;
  padding: 7px 9px;
  width: 100%;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  box-shadow: none;
  border-width: 1px;
  border-color: #babfc4;
  opacity: 0.77;
  border-radius: 3px;
`;
const DisplayNameLabel = styled.label`
  display: flex;
  padding: 0 2px;
  text-align: left;
  font-size: 15px;
  line-height: 34px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  font-weight: bold;
  vertical-align: bottom;
`;

const EmailLabel = styled.label`
  display: flex;
  padding: 0 2px;
  text-align: left;
  font-size: 15px;
  line-height: 34px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  font-weight: bold;
  vertical-align: bottom;
`;

const PasswordLabel = styled.label`
  display: flex;
  padding: 0 2px;
  text-align: left;
  font-size: 15px;
  line-height: 34px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  font-weight: bold;
  vertical-align: bottom;
`;
const LinkSpan = styled.span`
  color: #0074ce;
  cursor: pointer;
`;
const Msgdiv = styled.div`
  font-size: 13px;
  margin-top: 10px;
  text-align: left;
  margin-bottom: 10px;
  opacity: 0.67;
`;
const InputContainer = styled.div`
  margin: 1rem 0;
`;
const ValidationMessage = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 1rem;
`;

const SignupLayout = () => {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    callback: false,
  });
  const navigate = useNavigate();

  const initialValue = {
    nickname: "",
    userEmail: "",
    userPassword: "",
  };
  const methods = useForm(initialValue);
  const error = methods?.formState?.errors;
  const onSubmit = async (data) => {
    signUp(data);
    setModal({
      open: true,
      title: "회원가입을 성공했습니다.",
      message: `환영합니다 ${data.nickname}님!`,
      callback: function () {
        navigate("/login");
      },
    });
  };
  console.log("userName");

  const pass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const nameValidation = {
    required: "입력해 주세요.",
  };
  const emailValidation = {
    required: "입력해 주세요.",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "이메일 형식에 맞지 않습니다.",
    },
  };
  const passwordValidation = {
    required: "입력해 주세요.",
    pattern: {
      value: pass,
      message: "8자리이상, 숫자,문자,특수문자가 들어가야됩니다.",
    },
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ModalComponent
          open={modal.open}
          setModal={setModal}
          message={modal.message}
          title={modal.title}
          callback={modal.callback}
        />
        <ContentDiv>
          <DisplayNameLabel htmlFor="displayNameInput">
            Display name
          </DisplayNameLabel>
          <Input
            id="nickname"
            fieldName="nickname"
            validation={nameValidation}
            error={error?.nickname}
          />
          {error?.nickname && <AlertWarning text={error.nickname?.message} />}
        </ContentDiv>

        <InputContainer>
          <EmailLabel>Email</EmailLabel>
          <Input
            id="email"
            fieldName="userEmail"
            validation={emailValidation}
            error={error?.userEmail}
          />
          {error?.userEmail && <AlertWarning text={error.userEmail?.message} />}
        </InputContainer>

        <InputContainer>
          <PasswordLabel>Password</PasswordLabel>
          <Input
            id="password"
            type="password"
            fieldName="userPassword"
            validation={passwordValidation}
            error={error?.userPassword}
          />
          {error?.userPassword && (
            <AlertWarning text={error.userPassword?.message} />
          )}
        </InputContainer>

        <ValidationMessage>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </ValidationMessage>
        <SignupButton type={"signup"} />
        <Msgdiv>
          By clicking “Sign up”, you agree to our
          <LinkSpan>terms of service</LinkSpan> and acknowledge that you have
          read
          <br /> and understand ourservice, privacy policy
          <LinkSpan>code of conduct</LinkSpan>
        </Msgdiv>
      </form>
    </FormProvider>
  );
};

export default SignupLayout;
