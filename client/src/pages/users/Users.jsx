import { useEffect, useState } from "react";
import { getUsers } from "../../api/userAPI";
import UserItem from "../../components/user/user";
import styled from "styled-components";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <Container>
      <PageHeader>
        <PageTitle>Users</PageTitle>
      </PageHeader>
      <ListStatus>{users.length} users</ListStatus>
      <UserList>
        {users.map((user) => (
          <UserItem key={user.accountId} account={user} />
        ))}
      </UserList>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 16px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const PageTitle = styled.h1`
  font-size: 27px;
`;

const ListStatus = styled.div`
  font-size: 17px;
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(227, 230, 232);
  margin-bottom: 16px;
`;

const UserList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
