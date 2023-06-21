import styled from "styled-components";

import CheckIcon from "../img/check.svg";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 25px;
  max-width: 600px;
  padding: 30px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-size: 21px;
  font-weight: bold;
`;

const ModalTitle = styled.h5`
  margin: 0;
  margin-top: 10px;
`;

const ModalBody = styled.div`
  margin-bottom: 18px;
  text-align: center;
  font-size: 15px;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

const ModalButton = styled.button`
  margin-left: 10px;
  padding: 8px 54px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CheckImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  align-self: center;
`;

const ModalComponent = ({ open, setModal, title, message, callback }) => {
  if (!open) return null;

  const handleClose = () => {
    setModal({ open: false });
    if (callback) {
      callback();
    }
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <CheckImage src={CheckIcon} alt="Check Icon" />
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>{message}</p>
        </ModalBody>
        <ModalFooter>
          <ModalButton onClick={handleClose}>확인</ModalButton>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalComponent;
