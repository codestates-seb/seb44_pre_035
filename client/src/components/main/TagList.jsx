import styled from "styled-components";
import TagListItem from "./TagListItem";

export default function TagList({ tags, className }) {
  return (
    <Wrapper className={className}>
      <List>
        {tags.map((tag) => (
          <ListItem key={tag}>
            <TagListItem tag={tag} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li``;
