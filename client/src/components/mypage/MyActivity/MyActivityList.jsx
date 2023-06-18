import styled from "styled-components";

const MyActivityList = ({ contents }) => {
  return (
    <MyActivityListWrapper>
      <List>{contents}</List>
    </MyActivityListWrapper>
  );
};

const MyActivityListWrapper = styled.div`
  /* border: 1px solid red; */
`;

const List = styled.div`
  border: 1px solid gray;
  border-radius: 3px;

  padding: 24px;
`;

export default MyActivityList;
