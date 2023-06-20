import styled from "styled-components";
import alert from "../../../img/alert.svg";

const Alert = styled.img`
  width: 18px;
  height: 18px;
  display: block;
  position: absolute;
  bottom: 150%;
  right: 0.7rem;
`;
export const AlertText = styled.p`
  margin: 2px 0px;
  padding: 2px;
  font-size: 0.7rem;
  color: red;
  display: block;
`;

const AlertContainer = styled.div`
  position: relative;
`;
const AlertWarning = ({ text }) => {
  return (
    <AlertContainer>
      <Alert src={alert} />
      <AlertText>{text}</AlertText>
    </AlertContainer>
  );
};
export default AlertWarning;
