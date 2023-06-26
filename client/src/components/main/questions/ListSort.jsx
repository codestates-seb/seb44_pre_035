import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LIST_TYPE, SORT_TYPE } from "../utils";

export default function ListSort({ listType, tab, sort, keyword }) {
  const navigate = useNavigate();

  const handleClickOption = (selected) => {
    navigate(
      `${
        listType === LIST_TYPE.SEARCH ? `/search?keyword=${keyword}&` : "?"
      }tab=${tab}&sort=${selected}`,
    );
  };

  return (
    <Wrapper>
      <Dropbox
        defaultValue={sort}
        onChange={(event) => handleClickOption(event.target.value)}
      >
        <Option value={SORT_TYPE.NEWEST}>Newest</Option>
        <Option value={SORT_TYPE.OLDEST}>Oldest</Option>
        <Option value={SORT_TYPE.HIGHVIEWS}>Views Highest</Option>
        <Option value={SORT_TYPE.LOWVIEWS}>Views Lowest</Option>
      </Dropbox>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Dropbox = styled.select`
  width: auto;
  height: 100%;
`;

const Option = styled.option``;
