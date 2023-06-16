import styled from "styled-components";
import SignupButton from "./SignupButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
const EmailInput = styled.input.attrs({
  type: "text",
})`
  display: flex;
  text-align: left;
  padding: 7px 9px;
  width: 100%;
  text-align: start;
  font-size: 13px;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  box-shadow: none;
  opacity: 0.77;
  border-radius: 3px;
  border-width: 1px;
  border-color: #babfc4;
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
const PasswordInput = styled.input.attrs({
  type: "password",
})`
  display: inline-block;
  padding: 7px 9px;
  border-width: 1px;
  border-color: #babfc4;
  width: 100%;
  text-align: start;
  font-size: 13px;
  line-height: normal;
  letter-spacing: normal;
  font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI",
    "Liberation Sans", sans-serif;
  box-shadow: none;
  opacity: 0.77;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const Sign = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Msgdiv = styled.div`
  font-size: 12px;
  margin-top: 10px;
  text-align: left;
  margin-bottom: 10px;
  opacity: 0.67;
`;

const LinkSpan = styled.span`
  color: #0074ce;
  cursor: pointer;
`;

const ContentDiv = styled.div`
  margin: 6px 0;
  width: 100%;
`;

const SignupLayout = ({
  displayName,
  setDisplayName,
  signupEmail,
  setSignupEmail,
  signupPassword,
  setSignupPassword,
}) => {
  const navigate = useNavigate();
  const handleSignupButton = (e) => {
    e.preventDefault();

    const reqbody = {
      email: signupEmail,
      password: signupPassword,
      name: displayName,
    };
    const headers = {
      "Content-Type": "application/json",
      authorization: "",
    };

    axios
      .post("", JSON.stringify(reqbody), { headers })
      .then((res) => {
        console.error(res);
        window.alert("회원가입 성공");
        navigate("../Signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Sign onSubmit={(e) => handleSignupButton(e)}>
      <ContentDiv>
        <DisplayNameLabel htmlFor="displayNameInput">
          Display name
        </DisplayNameLabel>
        <DisplayNameInput
          id="displayNameInput"
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
      </ContentDiv>
      <ContentDiv>
        <EmailLabel>Email</EmailLabel>
        <EmailInput onChange={(e) => setSignupEmail(e.target.value)} required />
      </ContentDiv>
      <ContentDiv>
        <PasswordLabel>Password</PasswordLabel>
        <PasswordInput
          onChange={(e) => setSignupPassword(e.target.value)}
          required
        />
      </ContentDiv>
      <Msgdiv>
        Passwords must contain at least eight
        <br />
        characters, including at least 1 letter and 1 number.
      </Msgdiv>
      <SignupButton type={"signup"} />
      <Msgdiv>
        By clicking “Sign up”, you agree to our
        <LinkSpan>terms of service</LinkSpan> and acknowledge that you have read
        <br /> and understand ourservice, privacy policy
        <LinkSpan>code of conduct</LinkSpan>
      </Msgdiv>
    </Sign>
  );
};

export default SignupLayout;
