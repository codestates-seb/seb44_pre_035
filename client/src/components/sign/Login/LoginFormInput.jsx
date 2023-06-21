import { useState } from "react";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import Input from "../../../share/Input";
import { FormProvider, useForm } from "react-hook-form";
import AlertWarning from "../Signup/AlertWarning";
import { useDispatch } from "react-redux";
import { setUser } from "../../../app/usersReducer";
import { useNavigate } from "react-router-dom";
import ModalComponet from "../../../share/Modal";
import { Cookies } from "react-cookie";
import { logIn } from "../../../api/userAPI";

const InputContainer = styled.div`
  margin: 0.6rem 0;
`;
const Label = styled.label`
  display: block;
  margin: 4px 0;
  padding: 0 2px;
  font-weight: 600;
  font-size: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FindPassword = styled.span`
  color: #0693ff;
  line-height: 2rem;
  font-size: 0.8rem;
`;
const ButtonContainer = styled.div`
  margin-top: 12px;
  margin-bottom: 6px;
  width: 100%;
  height: 100%;
`;
const LoginFormInput = () => {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const dispatch = useDispatch();
  const methods = useForm();
  const navigate = useNavigate();
  const cookie = new Cookies();
  const pass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    callback: false,
  });
  const {
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();
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
  const error = methods?.formState?.errors;
  const onSubmit = async (data) => {
    const res = await logIn(data);
    if (res?.status !== 200) {
      setModal({
        open: true,
        title: "로그인을 실패했습니다.",
        message: `이메일과 비밀번호를 다시 확인해주세요.`,
      });
      return setIsAuthorized(false);
    } else {
      const { userId } = res.data;
      localStorage.setItem("userId", JSON.stringify(userId));
      const token = res.headers?.authorization.split(" ")[1];
      dispatch(setUser({ token, userId }));
      cookie.set("token", token);
      navigate("/");
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ModalComponet
          open={modal.open}
          setModal={setModal}
          message={modal.message}
          title={modal.title}
        />
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            width="23rem"
            fieldName="email"
            validation={emailValidation}
            error={error?.email}
          />
          {error?.email && <AlertWarning text={error.email?.message} />}
          {/* <AlertIcon /> */}
        </InputContainer>
        <InputContainer>
          <FlexContainer>
            <Label htmlFor="password">Password</Label>
            <FindPassword>Forgot password?</FindPassword>
          </FlexContainer>
          <Input
            id="password"
            width="23rem"
            fieldName="password"
            validation={passwordValidation}
            type="password"
            error={error?.password}
          />
          {error?.password && <AlertWarning text={error.password?.message} />}
          {!error?.password && !isAuthorized && (
            <AlertWarning text="email or password is incorrect" />
          )}
        </InputContainer>
        <ButtonContainer>
          <LoginButton type={"login"} />
        </ButtonContainer>
      </form>
    </FormProvider>
  );
};

export default LoginFormInput;
