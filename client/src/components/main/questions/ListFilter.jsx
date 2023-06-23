import styled from "styled-components";
import { Link } from "react-router-dom";
import { LIST_TYPE } from "../utils";

export default function ListFilter({ listType, sort, keyword }) {
  return (
    <Wrapper>
      <ListFilterItem
        to={`?${
          listType === LIST_TYPE.SEARCH ? `keyword=${keyword}&` : ""
        }tab=DESC`}
        $currentSort={sort === "DESC"}
      >
        Newest
      </ListFilterItem>
      <ListFilterItem
        to={`?${
          listType === LIST_TYPE.SEARCH ? `keyword=${keyword}&` : ""
        }tab=ASC`}
        $currentSort={sort === "ASC"}
      >
        Oldest
      </ListFilterItem>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const ListFilterItem = styled(Link)`
  font-size: 12px;
  padding: 9.6px;
  border: 1px solid #838c95;
  background-color: ${(props) =>
    props.$currentSort ? "#e3e6e8" : "transparent"};

  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &:not(:first-child) {
    border-left: none;
  }
`;
