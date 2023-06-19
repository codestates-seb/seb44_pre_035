import styled from "styled-components";
import voteUpIcon from "../../../img/voteUpIcon.svg";
import voteDownIcon from "../../../img/voteDownIcon.svg";

const Wrapper = styled.div`
  width: auto;
  padding-right: 16px;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #d6d9dc;
  border-radius: 50%;

  &:hover {
    background-color: #fee3cd;
  }
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;

const Text = styled.div`
  font-size: 19px;
  font-weight: 600;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PostSidebar() {
  return (
    <Wrapper>
      <Button>
        <Image src={voteUpIcon} alt="voteUp" />
      </Button>
      <Text>0</Text>
      <Button>
        <Image src={voteDownIcon} alt="voteDown" />
      </Button>
    </Wrapper>
  );
}
