import styled from "styled-components";
import { getProfile } from "../../profile/getRandomAccount";

export default function UserItem({ account }) {
  return (
    <Wrapper>
      <Image src={getProfile()} />
      <Text>{account.nickname}</Text>
      <Text>{account.email}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  width: fit-content;
  height: fit-content;

  &:first-of-type {
    font-size: 15px;
    margin-bottom: 5px;
  }

  &:last-child {
    font-size: 12px;
    color: #6a737c;
  }
`;
